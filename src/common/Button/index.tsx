import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: 'md';
	color?: 'primary';
	loading?: boolean;
};

// TODO: add loading animation spinner
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			size = 'md',
			color = 'primary',
			disabled,
			loading = false,
			...props
		}: ButtonProps,
		ref
	) => {
		return (
			<button
				className={styles.button}
				ref={ref}
				data-size={size}
				data-color={color}
				disabled={disabled || loading}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';
