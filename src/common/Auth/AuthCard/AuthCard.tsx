import { ComponentProps, forwardRef } from 'react';
import styles from './styles.module.scss';

type AuthCardProps = ComponentProps<'div'>;

export const AuthCard = forwardRef<HTMLDivElement, AuthCardProps>(
	({ children, ...props }, ref) => {
		return (
			<div className={styles.auth_card} ref={ref} {...props}>
				{children}
			</div>
		);
	}
);
