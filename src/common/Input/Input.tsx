import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(props: InputProps, ref) => {
		return <input className={styles.input} ref={ref} {...props} />;
	}
);

Input.displayName = 'Input';
