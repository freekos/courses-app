import { ComponentProps, forwardRef } from 'react';
import styles from './styles.module.scss';
import { Card } from 'src/common/Card';

type AuthCardProps = ComponentProps<'div'>;

export const AuthCard = forwardRef<HTMLDivElement, AuthCardProps>(
	({ children, ...props }, ref) => {
		return (
			<Card.Outlined className={styles.auth_card} ref={ref} {...props}>
				{children}
			</Card.Outlined>
		);
	}
);
