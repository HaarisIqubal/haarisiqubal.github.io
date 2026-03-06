import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean `isVisible`.
 * Once the element enters the viewport it stays visible (no re-trigger).
 * @param {number} threshold - 0–1, how much of the element must be visible
 * @param {string} rootMargin - IntersectionObserver rootMargin
 */
export default function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -40px 0px') {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
