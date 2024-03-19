import { ComponentProps, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

const H3 = ({ children, ...props }: ComponentProps<'h3'>) => (
	<h3 className={styles.h3} {...props}>
		{children}
	</h3>
);

export const Typography = {
	H3,
};
