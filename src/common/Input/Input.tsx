import { InputHTMLAttributes, createElement, forwardRef } from 'react';

import styles from './styles.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	as?: 'input' | 'textarea';
	error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ as = 'input', error, ...props }: InputProps, ref) => {
		return createElement(as, {
			className: styles.input,
			ref,
			['data-error']: !!error,
			...props,
		});
	}
);

Input.displayName = 'Input';
