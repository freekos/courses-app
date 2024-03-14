import { ReactNode } from 'react';

import { Course } from 'src/types/course';
import { Container } from 'src/common/Container';
import { CourseInfoCard } from './components/CourseInfoCard';
import styles from './styles.module.scss';

interface CourseInfoProps {
	course: Course;
	actions?: ReactNode;
}

export const CourseInfo = ({ course, actions }: CourseInfoProps) => {
	return (
		<Container isDark>
			<div className={styles.course_info}>
				<h5 className={styles.course_info__title}>{course.title}</h5>
				<div className={styles.course_info__card}>
					<CourseInfoCard course={course} />
				</div>
				<div className={styles.course_info__actions}>{actions}</div>
			</div>
		</Container>
	);
};
