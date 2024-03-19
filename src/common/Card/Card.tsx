import { ComponentProps } from 'react';

import styles from './styles.module.scss';

export const Card = {
	Outlined: ({ children, ...props }: ComponentProps<'div'>) => (
		<div className={styles.card__outlined} {...props}>
			{children}
		</div>
	),
};
