import { ReactNode } from 'react';
import styles from './ListItem.module.css';

export interface ListItemProps {
  title: string;
  description?: string;
  avatar?: { initial: string; color?: string };
  trailing?: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function ListItem({
  title,
  description,
  avatar,
  trailing,
  active = false,
  onClick,
}: ListItemProps) {
  return (
    <div
      className={`${styles.item} ${active ? styles.active : ''} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
    >
      {avatar && (
        <div className={styles.avatar} style={{ background: avatar.color || 'var(--color-accent)' }}>
          {avatar.initial}
        </div>
      )}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {description && <span className={styles.description}>{description}</span>}
      </div>
      {trailing && <div className={styles.trailing}>{trailing}</div>}
    </div>
  );
}

export interface ListGroupProps {
  children: ReactNode;
}

export function ListGroup({ children }: ListGroupProps) {
  return <div className={styles.group}>{children}</div>;
}
