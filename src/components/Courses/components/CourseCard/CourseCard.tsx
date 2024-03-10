import { TrashIcon, PencilIcon } from '@heroicons/react/16/solid';
import { Button } from 'src/common/Button';
import { Course } from 'src/types/course';
import { formatCreatedDate, formatFullName } from 'src/helpers';
import { CourseInfoText } from './CourseInfoText';
import styles from './styles.module.scss';
import { ReactNode } from 'react';

interface CourseCardProps {
	course: Course;
	actions: ReactNode;
}

export const CourseCard = ({ course, actions }: CourseCardProps) => {
	return (
		<div className={styles.course_card}>
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
						<CourseInfoText title='Duration:' description={course.duration} />
						<CourseInfoText
							title='Created:'
							description={formatCreatedDate(course.createdAt)}
						/>
					</div>
					{actions}
				</aside>
			</div>
		</div>
	);
};
