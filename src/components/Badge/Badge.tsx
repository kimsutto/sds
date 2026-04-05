import { ReactNode } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  style_type?: 'solid' | 'subtle' | 'outline';
  dot?: boolean;
  children: ReactNode;
}

export function Badge({
  variant = 'default',
  style_type = 'solid',
  dot,
  children,
}: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[style_type]}`}>
      {dot && <span className={`${styles.dot} ${styles[`dot_${variant}`]}`} />}
      {children}
    </span>
  );
}
