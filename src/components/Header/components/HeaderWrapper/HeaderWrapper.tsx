import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface HeaderWrapperProps {
	left?: ReactNode;
	center?: ReactNode;
	right?: ReactNode;
}

export const HeaderWrapper = ({ left, center, right }: HeaderWrapperProps) => {
	return (
		<div className={styles.header_wrapper}>
			<div className={styles.header_wrapper__left}>{left}</div>
			<div className={styles.header_wrapper__center}>{center}</div>
			<div className={styles.header_wrapper__right}>{right}</div>
		</div>
	);
};
