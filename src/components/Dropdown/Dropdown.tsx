import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export function Dropdown({
  options,
  value,
  placeholder = 'Select an option...',
  disabled = false,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (opt: DropdownOption) => {
    setSelected(opt.value);
    setOpen(false);
    onChange?.(opt.value);
  };

  const selectedLabel = options.find((o) => o.value === selected)?.label;

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={`${styles.trigger} ${open ? styles.open : ''} ${disabled ? styles.disabled : ''}`}
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
      >
        <span className={selectedLabel ? styles.value : styles.placeholder}>
          {selectedLabel || placeholder}
        </span>
        <span className={styles.arrow}>{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div className={styles.menu}>
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`${styles.item} ${opt.value === selected ? styles.selected : ''}`}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
              {opt.value === selected && <span className={styles.check}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
