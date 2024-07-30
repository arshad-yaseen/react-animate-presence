/**
 * Animation config object.
 */
export interface AnimationConfig {
  /** CSS animation class for the enter animation */
  enter: string;
  /** CSS animation class for the exit animation */
  exit: string;
}

/**
 * Props for the useAnimatePresence hook.
 */
export interface UseAnimatePresenceProps {
  /** Animation class names for enter and exit states */
  animation: AnimationConfig;
  /**
   * Whether the element is visible or not
   * @default false
   */
  visible?: boolean;
  /** Optional callback function to be called when the exit animation completes */
  onExitComplete?: () => void;
}

/**
 * Return type for the useAnimatePresence hook.
 */
export interface UseAnimatePresenceReturn<T = HTMLDivElement> {
  /** Ref to be attached to the element that will be animated */
  ref: React.RefObject<T>;
  /** Current animation class name */
  animationClassName: string;
  /** Whether the element should be rendered in the DOM */
  isRendered: boolean;
}
