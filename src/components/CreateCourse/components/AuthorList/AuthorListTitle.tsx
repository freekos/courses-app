import { ComponentProps } from 'react';

import styles from './styles.module.scss';

type AuthorListTitleProps = ComponentProps<'label'>;

export const AuthorListTitle = ({
	children,
	...props
}: AuthorListTitleProps) => {
	return (
		<label className={styles.author_list__title} {...props}>
			{children}
		</label>
	);
};
