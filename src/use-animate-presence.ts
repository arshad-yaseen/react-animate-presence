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
 * }
 */
const useAnimatePresence = <T extends HTMLElement = HTMLDivElement>({
  visible = false,
  animation,
  onExitComplete,
}: UseAnimatePresenceProps): UseAnimatePresenceReturn<T> => {
  const [state, setState] = React.useState({
    isRendered: visible,
    animationClassName: visible ? animation.enter : '',
  });

  const ref = React.useRef<T>(null);
  const prevVisibleRef = React.useRef(visible);

  React.useEffect(() => {
    if (visible !== prevVisibleRef.current) {
      setState({
        isRendered: visible || state.isRendered,
        animationClassName: visible ? animation.enter : animation.exit,
      });
      prevVisibleRef.current = visible;
    }
  }, [visible, animation, state.isRendered]);

  const handleAnimationEnd = React.useCallback(() => {
    if (!visible) {
      onExitComplete?.();
      setState(prevState => ({...prevState, isRendered: false}));
    }
  }, [visible, onExitComplete]);

  React.useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('animationend', handleAnimationEnd);
      return () => {
        element.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [handleAnimationEnd]);

  return {
    ref,
    animationClassName: state.animationClassName,
    isRendered: state.isRendered,
  };
};

export default useAnimatePresence;
