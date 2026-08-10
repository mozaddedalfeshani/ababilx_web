"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  getHomeCopy,
  type HomeCopy,
  type HomeLocale,
} from "@/constant/home/copy";

type HomeLocaleContextValue = {
  locale: HomeLocale;
  setLocale: (locale: HomeLocale) => void;
  copy: HomeCopy;
};

const HomeLocaleContext = createContext<HomeLocaleContextValue | null>(null);

const STORAGE_KEY = "ababilx_home_locale";
const LOCALE_EVENT = "ababilx-home-locale";

function readLocale(): HomeLocale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "bn" ? "bn" : "en";
}

function subscribeLocale(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener(LOCALE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(LOCALE_EVENT, handler);
  };
}

export function HomeLocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<HomeLocale>(
    subscribeLocale,
    readLocale,
    () => "en",
  );

  const setLocale = useCallback((next: HomeLocale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  }, []);

  const copy = useMemo(() => getHomeCopy(locale), [locale]);

  return (
    <HomeLocaleContext.Provider value={{ locale, setLocale, copy }}>
      {children}
    </HomeLocaleContext.Provider>
  );
}

export function useHomeLocale(): HomeLocaleContextValue {
  const ctx = useContext(HomeLocaleContext);
  if (!ctx) {
    throw new Error("useHomeLocale must be used within HomeLocaleProvider");
  }
  return ctx;
}
