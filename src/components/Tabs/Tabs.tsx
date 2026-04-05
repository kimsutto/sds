import { useState } from 'react';
import styles from './Tabs.module.css';

export interface TabItem {
  label: string;
  value: string;
}

export interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  variant?: 'underline' | 'pill' | 'boxed';
  onChange?: (value: string) => void;
}

export function Tabs({
  items,
  defaultValue,
  variant = 'underline',
  onChange,
}: TabsProps) {
  const [active, setActive] = useState(defaultValue || items[0]?.value);

  const handleClick = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div className={`${styles.tabs} ${styles[variant]}`}>
      {items.map((item) => (
        <button
          key={item.value}
          className={`${styles.tab} ${active === item.value ? styles.active : ''}`}
          onClick={() => handleClick(item.value)}
        >
          {item.label}
          {variant === 'underline' && <span className={styles.indicator} />}
        </button>
      ))}
    </div>
  );
}
