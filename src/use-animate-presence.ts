import {useCallback, useEffect, useRef, useState} from 'react';

import {UseAnimatePresenceProps, UseAnimatePresenceReturn} from './types';

/**
 * A hook for managing enter/exit animations with CSS classes.
 *
 * @param props - The configuration options for the hook
 * @returns An object containing the ref, animation class name, and visibility state
 *
 * @example
 * const MyComponent = () => {
 *   const { ref, animationClassName, visible } = useAnimatePresence({
 *     defaultVisible: true,
 *     animation: {
 *       enter: 'fade-in',
 *       exit: 'fade-out',
 *     },
 *     onExitComplete: () => console.log('Exit animation completed'),
 *   });
 *
 *   return (
 *     visible && (
 *       <div ref={ref} className={animationClassName}>
 *         Fade in/out content
 *       </div>
 *     )
 *   );
 * };
 */
const useAnimatePresence = ({
  defaultVisible = false,
  animation,
  onExitComplete,
}: UseAnimatePresenceProps): UseAnimatePresenceReturn => {
  const [animationClassName, setAnimationClassName] = useState(
    defaultVisible ? animation.enter : animation.exit,
  );
  const [visible, setVisible] = useState(defaultVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultVisible) {
      setVisible(true);
      setAnimationClassName(animation.enter);
    } else {
      setAnimationClassName(animation.exit);
    }
  }, [defaultVisible, animation.enter, animation.exit]);

  const handleAnimationEnd = useCallback(() => {
    if (!defaultVisible) {
      setVisible(false);
      onExitComplete?.();
    }
  }, [defaultVisible, onExitComplete]);

  useEffect(() => {
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
    animationClassName,
    visible,
  };
};

export default useAnimatePresence;
