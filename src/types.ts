import {RefObject} from 'react';

export interface UseAnimatePresenceProps {
  /** Animation class names for enter and exit states */
  animation: {
    enter: string;
    exit: string;
  };
  /**
   * Initial visibility state
   * @default false
   */
  defaultVisible?: boolean;
  /** Optional callback function to be called when the exit animation completes */
  onExitComplete?: () => void;
}

export interface UseAnimatePresenceReturn {
  /** Ref to be attached to the element that will be animated */
  ref: RefObject<HTMLElement>;
  /** Current animation class name */
  animationClassName: string;
  /** Whether the element is visible in the DOM */
  visible: boolean;
}
