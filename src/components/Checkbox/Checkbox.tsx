import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className={`${styles.wrapper} ${props.disabled ? styles.disabled : ''} ${className || ''}`}>
      <input type="checkbox" className={styles.input} {...props} />
      <span className={styles.box}>
        <svg className={styles.check} viewBox="0 0 24 24" width="14" height="14">
          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 17.999l-6.364-6.364 1.414-1.414z" fill="currentColor" />
        </svg>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
