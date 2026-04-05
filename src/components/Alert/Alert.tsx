import { ReactNode, useState } from 'react';
import styles from './Alert.module.css';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  children?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function Alert({
  variant = 'info',
  title,
  children,
  dismissible = true,
  onDismiss,
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const icons = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕',
  };

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className={`${styles.alert} ${styles[variant]}`}>
      <div className={styles.bar} />
      <span className={styles.icon}>{icons[variant]}</span>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {children && <p className={styles.message}>{children}</p>}
      </div>
      {dismissible && (
        <button className={styles.close} onClick={handleDismiss} aria-label="Dismiss">
          ✕
        </button>
      )}
    </div>
  );
}
