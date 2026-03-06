import useScrollReveal from '../utils/useScrollReveal';

/**
 * Wraps children in a div that fades up into view when scrolled into viewport.
 * Props:
 *  - delay: CSS transition-delay string, e.g. "100ms" (default "0ms")
 *  - className: extra classes to merge
 */
export default function RevealOnScroll({ children, delay = '0ms', className = '' }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.45s ease ${delay}, transform 0.45s ease ${delay}`,
      }}
    >
      {children}
    </div>
  );
}
