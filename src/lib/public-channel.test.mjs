import { describe, expect, test } from "bun:test";

import { channelPicture, parseChannel, tickKind } from "./public-channel";

describe("channel picture", () => {
  test("only our own CDN over https", () => {
    for (const ok of [
      "https://assetsbox.ababilx.com/chat/g1/b.jpg",
      "https://cdn.ababilx.com/a.jpg",
    ]) {
      expect(channelPicture(ok)).toBe(ok);
    }
    for (const bad of [
      "http://assetsbox.ababilx.com/a.jpg",
      "https://evil.example/a.jpg",
      "https://ababilx.com.evil.example/a.jpg",
      "https://evilababilx.com/a.jpg",
      "https://user@assetsbox.ababilx.com/a.jpg",
      "https://assetsbox.ababilx.com:8443/a.jpg",
      "javascript:alert(1)",
      "",
      7,
      null,
    ]) {
      expect(channelPicture(bad)).toBe("");
    }
  });
});

describe("parseChannel", () => {
  const body = {
    data: {
      group: {
        conversation_id: "g1",
        name: "Dhaka Devs",
        handle: "dhaka_devs",
        avatar_url: "https://assetsbox.ababilx.com/chat/g1/a.jpg",
        banner_url: "https://evil.example/b.jpg",
        description: "Flutter people",
        member_count: 1200,
        join_mode: "request",
        is_verified: true,
      },
    },
  };

  test("reads the card, drops a foreign banner", () => {
    const c = parseChannel(body);
    expect(c?.name).toBe("Dhaka Devs");
    expect(c?.handle).toBe("dhaka_devs");
    expect(c?.avatarUrl).toBe("https://assetsbox.ababilx.com/chat/g1/a.jpg");
    expect(c?.bannerUrl).toBe("");
    expect(c?.memberCount).toBe(1200);
    expect(c?.asksToJoin).toBe(true);
    expect(c?.verified).toBe(true);
  });

  test("not the shape we expect is null", () => {
    expect(parseChannel(null)).toBeNull();
    expect(parseChannel({ data: {} })).toBeNull();
    expect(parseChannel({ data: { group: { name: "" } } })).toBeNull();
  });

  test("gold tick for AbabilX official, blue for verified", () => {
    expect(tickKind({ official: true, verified: true })).toBe("gold");
    expect(tickKind({ official: false, verified: true })).toBe("blue");
    expect(tickKind({ official: false, verified: false })).toBeNull();
  });
});
