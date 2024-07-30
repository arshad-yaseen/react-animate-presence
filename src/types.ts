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
  /** Object containing enter and exit animation class names */
  animation: AnimationConfig;
  /**
   * Whether the element should be visible
   * @default false
   */
  visible?: boolean;
  /** Optional callback function called when exit animation completes */
  onExitComplete?: () => void;
}

/**
 * Return type for the useAnimatePresence hook.
 */
export interface UseAnimatePresenceReturn<T = HTMLDivElement> {
  /** Ref to be attached to the animated element */
  ref: React.RefObject<T>;
  /** Current animation class name */
  animationClassName: string;
  /** Whether the element should be rendered in the DOM */
  isRendered: boolean;
}
