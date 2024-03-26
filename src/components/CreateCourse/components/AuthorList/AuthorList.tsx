import { ComponentProps } from 'react';

import styles from './styles.module.scss';

type AuthorListProps = ComponentProps<'div'>;

export const AuthorList = ({ children, ...props }: AuthorListProps) => {
	return (
		<div className={styles.author_list} {...props}>
			{children}
		</div>
	);
};
