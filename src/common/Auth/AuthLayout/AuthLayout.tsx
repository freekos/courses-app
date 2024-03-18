import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface AuthLayoutProps extends PropsWithChildren {
	title: string;
}

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
	return (
		<div className={styles.auth_layout}>
			<h3 className={styles.auth_layout__title}>{title}</h3>
			{children}
		</div>
	);
};
