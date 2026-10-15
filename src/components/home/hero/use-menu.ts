import { useCallback, useEffect, useState } from "react";

const DESKTOP = "(min-width: 901px)";

/** Phone menu: Escape and a resize to desktop close it; the body stops
 *  scrolling while it is open. */
export function useMenu() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    document.body.classList.toggle("vx-menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia(DESKTOP);
    const onWide = () => {
      if (mq.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
      document.body.classList.remove("vx-menu-open");
    };
  }, [open]);

  return { open, close, toggle };
}
