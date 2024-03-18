import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './styles.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & { error?: string };

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, ...props }: InputProps, ref) => {
		return (
			<input
				className={styles.input}
				ref={ref}
				data-error={!!error}
				{...props}
			/>
		);
	}
);

Input.displayName = 'Input';
