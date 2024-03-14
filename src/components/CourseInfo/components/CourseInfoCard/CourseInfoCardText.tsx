import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const CourseInfoCardTitle = ({ children }: PropsWithChildren) => {
	return <span className={styles.courseinfo_info__title}>{children}</span>;
};

export const CourseInfoCardDescription = ({ children }: PropsWithChildren) => {
	return <p className={styles.coursinfo_info__description}>{children}</p>;
};
