import {
  GITHUB_ORG_URL,
  PAPER_URL,
  PLAY_STORE_URL,
  SITE_URL,
  WORKSPACE_URL,
} from "@/lib/seo";

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function openPaper() {
  openExternal(PAPER_URL);
}

export function openWorkspace() {
  openExternal(WORKSPACE_URL);
}

export function openPlayStore() {
  openExternal(PLAY_STORE_URL);
}

export function goContribute() {
  openExternal(GITHUB_ORG_URL);
}

export {
  GITHUB_ORG_URL,
  PAPER_URL,
  PLAY_STORE_URL,
  SITE_URL,
  WORKSPACE_URL,
};
