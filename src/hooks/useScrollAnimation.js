import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Hook universel d'animation au défilement (scroll animation).
 * Le contenu démarre invisible et apparaît avec animation au moment
 * où il entre dans le viewport.
 *
 * Supporte toutes les syntaxes d'appel :
 * - const [ref, isVisible] = useScrollAnimation();
 * - const ref = useScrollAnimation();
 * - ref passé directement à un élément JSX : <div ref={ref} />
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  // Démarre à false pour que l'animation se déclenche à l'entrée
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const obsOptions = typeof options === 'object' && options !== null ? options : {};
    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el);
          }
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
          ...obsOptions,
        }
      );

      observer.observe(el);
      return () => observer.disconnect();
    } catch {
      setIsVisible(true);
    }
  }, []);

  // Objet hybride agissant comme un tuple [ref, isVisible], un objet ref { current }, et un boîtier safe
  const result = [ref, isVisible];
  Object.defineProperty(result, 'current', {
    get: () => ref.current,
    set: (v) => { ref.current = v; },
    configurable: true,
  });

  return result;
}

/**
 * Hook universel pour animations en cascade (stagger).
 * Supporte :
 * - Appel direct : const stagger = useStaggerAnimation(4); style={{ animationDelay: stagger(index) }}
 * - Déstructuration : const [ref, isVisible] = useStaggerAnimation(4);
 * - Ref direct : <div ref={stagger} />
 */
export function useStaggerAnimation(count = 4, staggerDelay = 100) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const delay = typeof count === 'number' && typeof staggerDelay === 'number' ? staggerDelay : 100;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el);
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      observer.observe(el);
      return () => observer.disconnect();
    } catch {
      setIsVisible(true);
    }
  }, []);

  // Fonction callable pour renvoyer le délai CSS en millisecondes
  const fn = useCallback((index = 0) => {
    const i = typeof index === 'number' ? index : 0;
    return `${(i + 1) * delay}ms`;
  }, [delay]);

  // Supporte l'utilisation comme React ref
  Object.defineProperty(fn, 'current', {
    get: () => ref.current,
    set: (v) => { ref.current = v; },
    configurable: true,
  });

  // Supporte la déstructuration [ref, isVisible]
  fn[Symbol.iterator] = function* () {
    yield ref;
    yield isVisible;
  };

  return fn;
}
