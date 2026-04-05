import { ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  image?: string;
  actions?: ReactNode;
}

export function Card({ title, subtitle, children, image, actions }: CardProps) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.body}>{children}</div>}
      </div>
      {actions && (
        <>
          <div className={styles.divider} />
          <div className={styles.actions}>{actions}</div>
        </>
      )}
    </div>
  );
}
