import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  state?: 'default' | 'error' | 'success';
}

export function Input({
  label,
  error,
  success,
  state = 'default',
  className,
  ...props
}: InputProps) {
  const resolvedState = error ? 'error' : success ? 'success' : state;

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={`${styles.input} ${styles[resolvedState]}`}
        {...props}
      />
      {error && <span className={styles.helperError}>{error}</span>}
      {success && !error && <span className={styles.helperSuccess}>{success}</span>}
    </div>
  );
}
