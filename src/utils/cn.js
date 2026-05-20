import { clsx } from 'clsx';

/**
 * Utility for conditionally joining classNames together.
 * Combines clsx for conditional classes.
 */
export function cn(...inputs) {
  return clsx(inputs);
}
