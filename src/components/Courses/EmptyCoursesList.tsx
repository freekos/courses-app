import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface EmptyCoursesListProps {
	action?: ReactNode;
}

export const EmptyCoursesList = ({ action }: EmptyCoursesListProps) => {
	return (
		<div className={styles.empty}>
			<div className={styles.empty__content}>
				<h5 className={styles.empty_content__title}>Your List Is Empty</h5>
				<p>Please use ’Add New Course’ button to add your first course</p>
			</div>
			<div className={styles.empty__action}>{action}</div>
		</div>
	);
};
