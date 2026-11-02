import { describe, expect, test } from "bun:test";

import { inviteCodeFromPath, parseInvitePreview, safePicture } from "./space-invite";
import { androidIntentUrl, appUrl } from "./user-link";

describe("invite code", () => {
  test("keeps its case", () => expect(inviteCodeFromPath("AbC_d-12xY")).toBe("AbC_d-12xY"));
  test("refuses what is not a code", () => {
    for (const bad of ["abc", "a b c d", "../../etc", "a%2Fb%2Fc", "%E0%A4%A", "x".repeat(65), "<script>"]) {
      expect(inviteCodeFromPath(bad)).toBeNull();
    }
  });
});

describe("picture", () => {
  test("https only", () => {
    expect(safePicture("https://cdn/x.jpg")).toBe("https://cdn/x.jpg");
    for (const bad of ["http://cdn/x.jpg", "javascript:alert(1)", "data:image/png;base64,AA", "", 7, null]) {
      expect(safePicture(bad)).toBe("");
    }
  });
});

describe("preview", () => {
  const body = {
    data: {
      space: { name: "Nethex", icon_url: "https://cdn/i.jpg", banner_url: "http://no", description: "Hi", member_count: 3 },
      inviter: { name: "Rafi", username: "rafi_h", avatar_url: "" },
    },
  };
  test("reads the wire", () => {
    const p = parseInvitePreview(body);
    expect(p.name).toBe("Nethex");
    expect(p.bannerUrl).toBe("");
    expect(p.memberCount).toBe(3);
    expect(p.inviter.username).toBe("rafi_h");
  });
  test("no inviter means no inviter", () => {
    expect(parseInvitePreview({ data: { space: body.data.space } }).inviter).toBeNull();
  });
  test("garbage is null", () => {
    for (const bad of [null, {}, { data: {} }, { data: { space: { name: "" } } }]) {
      expect(parseInvitePreview(bad)).toBeNull();
    }
  });
});

describe("app links", () => {
  test("space code", () => {
    expect(appUrl("space", "AbC_d-12xY")).toBe("ababilx://space?c=AbC_d-12xY");
    expect(androidIntentUrl("space", "AbC_d-12xY")).toContain("intent://space?c=AbC_d-12xY#Intent;scheme=ababilx");
  });
});
