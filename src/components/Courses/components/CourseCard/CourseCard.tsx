import { ReactNode } from 'react';
import { Course } from 'src/types/course';
import {
	formatCreatedDate,
	formatFullName,
	getDurationTime,
} from 'src/helpers';
import { CourseInfoText } from './CourseInfoText';
import styles from './styles.module.scss';
import { Card } from 'src/common/Card';

interface CourseCardProps {
	course: Course;
	actions: ReactNode;
}

export const CourseCard = ({ course, actions }: CourseCardProps) => {
	return (
		<Card.Outlined className={styles.course_card}>
			<h5 className={styles.course_card__title}>{course.title}</h5>
			<div className={styles.course_card__content}>
				<p className={styles.course_content__description}>
					{course.description}
				</p>
				<aside className={styles.course_card__aside}>
					<div className={styles.course_aside__info}>
						<CourseInfoText
							title='Authors:'
							description={course.authors.map(formatFullName).join(', ')}
						/>
						<CourseInfoText
							title='Duration:'
							description={getDurationTime(course.duration)}
						/>
						<CourseInfoText
							title='Created:'
							description={formatCreatedDate(course.createdAt)}
						/>
					</div>
					{actions}
				</aside>
			</div>
		</Card.Outlined>
	);
};
