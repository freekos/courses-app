import { ReactNode } from 'react';

import { Course } from 'src/api';
import {
	formatCreatedDate,
	formatFullName,
	getDurationTime,
} from 'src/helpers';
import { Card } from 'src/common/Card';
import { CourseInfoText } from './CourseInfoText';
import styles from './styles.module.scss';

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
							description={formatCreatedDate(course.creationDate)}
						/>
					</div>
					{actions}
				</aside>
			</div>
		</Card.Outlined>
	);
};
