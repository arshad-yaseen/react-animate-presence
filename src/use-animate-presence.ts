import React from 'react';

import {UseAnimatePresenceProps, UseAnimatePresenceReturn} from './types';

/**
 * A custom hook for managing enter/exit animations with CSS classes.
 *
 * @template T - The type of the HTML element to be animated (default: HTMLDivElement)
 * @param {UseAnimatePresenceProps} props - The configuration options for the hook
 * @returns {UseAnimatePresenceReturn<T>} An object containing the ref, animation class name, and visibility state
 *
 * @example
 * function MyComponent() {
 *   const [isVisible, setIsVisible] = useState(true);
 *   const { ref, animationClassName, isRendered } = useAnimatePresence({
 *     visible: isVisible,
 *     animation: {
 *       enter: 'fade-in',
 *       exit: 'fade-out',
 *     },
 *     onExitComplete: () => console.log('Exit animation completed'),
 *   });
 *
 *   return (
 *     <>
 *       <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
 *       {isRendered && (
 *         <div ref={ref} className={animationClassName}>
 *           Fade in/out content
 *         </div>
 *       )}
 *     </>
 *   );
 * };
 */
const useAnimatePresence = <T extends HTMLElement = HTMLDivElement>({
  visible = false,
  animation,
  onExitComplete,
}: UseAnimatePresenceProps): UseAnimatePresenceReturn<T> => {
  const [isRendered, setIsRendered] = React.useState(visible);
  const [animationClassName, setAnimationClassName] = React.useState(
    visible ? animation.enter : '',
  );

  const ref = React.useRef<T>(null);
  const isExitingRef = React.useRef(false);

  React.useEffect(() => {
    if (visible) {
      isExitingRef.current = false;
      setIsRendered(true);
      setAnimationClassName(animation.enter);
    } else {
      isExitingRef.current = true;
      setAnimationClassName(animation.exit);
    }
  }, [visible, animation]);

  const handleAnimationEnd = React.useCallback(() => {
    if (isExitingRef.current) {
      onExitComplete?.();
      setIsRendered(false);
      isExitingRef.current = false;
    }
  }, [onExitComplete]);

  React.useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('animationend', handleAnimationEnd);
      return () => {
        element.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [handleAnimationEnd]);

  return React.useMemo(
    () => ({
      ref,
      animationClassName,
      isRendered,
    }),
    [animationClassName, isRendered],
  );
};

export default useAnimatePresence;
