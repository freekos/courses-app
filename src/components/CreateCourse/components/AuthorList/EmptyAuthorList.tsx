import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type EmptyAuthorListProps = PropsWithChildren;

export const EmptyAuthorList = ({ children }: EmptyAuthorListProps) => {
	return (
		<div className={styles.author_empty}>
			<p className={styles.author_empty__description}>{children}</p>
		</div>
	);
};
