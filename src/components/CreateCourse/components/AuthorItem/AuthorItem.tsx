import { ReactNode } from 'react';

import { AuthorName } from './AuthorName';
import styles from './styles.module.scss';

interface AuthorItemProps {
	name: string;
	actions: ReactNode;
}

export const AuthorItem = ({ name, actions }: AuthorItemProps) => {
	return (
		<div className={styles.author_item}>
			<AuthorName name={name} />
			<div className={styles.author_item__actions}>{actions}</div>
		</div>
	);
};
