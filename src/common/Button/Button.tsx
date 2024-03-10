import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.scss';

type ButtonSize = 'lg' | 'md' | 'sm' | 'icon';
type ButtonColor = 'primary';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: ButtonSize;
	color?: ButtonColor;
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
