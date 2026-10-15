import { useEffect, type RefObject } from "react";

const TARGETS = ".vx-appear, .vx-photo";

/** Marks each entrance element `is-in` once its own animation ends, and
 *  forces every one in when animations are not running at all. */
export function useAppear(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll<HTMLElement>(TARGETS));

    const offs = nodes.map((node) => {
      const done = (event: AnimationEvent) => {
        if (event.target !== node) return;
        node.classList.add("is-in");
        node.removeEventListener("animationend", done);
      };
      node.addEventListener("animationend", done);
      return () => node.removeEventListener("animationend", done);
    });

    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        const animating = nodes.some((node) =>
          node
            .getAnimations?.()
            .some((a) => a.playState === "running" || a.playState === "finished"),
        );
        if (!animating) nodes.forEach((node) => node.classList.add("is-in"));
      });
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
      offs.forEach((off) => off());
    };
  }, [root]);
}
