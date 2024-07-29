export interface UseAnimatePresenceProps {
  /** Animation class names for enter and exit states */
  animation: {
    /** CSS animation class name for the enter animation */
    enter: string;
    /** CSS animation class name for the exit animation */
    exit: string;
  };
  /**
   * Whether the element is visible or not
   * @default false
   */
  visible?: boolean;
  /** Optional callback function to be called when the exit animation completes */
  onExitComplete?: () => void;
}

export interface UseAnimatePresenceReturn<T = HTMLDivElement> {
  /** Ref to be attached to the element that will be animated */
  ref: React.RefObject<T>;
  /** Current animation class name */
  animationClassName: string;
  /** Whether the element should be rendered in the DOM */
  isRendered: boolean;
}
