import { Course } from 'src/api';
import {
	CourseInfoCardDescription,
	CourseInfoCardTitle,
} from './CourseInfoCardText';
import styles from './styles.module.scss';
import { formatFullName, getDurationTime } from 'src/helpers';
import { Card } from 'src/common';

interface CourseInfoCardProps {
	course: Course;
}

export const CourseInfoCard = ({ course }: CourseInfoCardProps) => {
	return (
		<Card.Outlined className={styles.courseinfo_card}>
			<div className={styles.courseinfo_card__content}>
				<h6 className={styles.courseinfo_content__title}>Description:</h6>
				<p className={styles.courseinfo_content__description}>
					{course.description}
				</p>
			</div>
			<div className={styles.courseinfo_card__line} />
			<div className={styles.courseinfo_card__info}>
				<div className={styles.courseinfo_info__column}>
					<CourseInfoCardTitle>ID:</CourseInfoCardTitle>
					<CourseInfoCardTitle>Duration:</CourseInfoCardTitle>
					<CourseInfoCardTitle>Created:</CourseInfoCardTitle>
					<CourseInfoCardTitle>Authors:</CourseInfoCardTitle>
				</div>
				<div className={styles.courseinfo_info__column}>
					<CourseInfoCardDescription>{course.id}</CourseInfoCardDescription>
					<CourseInfoCardDescription>
						<span style={{ fontWeight: 700 }}>
							{getDurationTime(course.duration)}
						</span>{' '}
						<span>hours</span>
					</CourseInfoCardDescription>
					<CourseInfoCardDescription>
						{course.creationDate}
					</CourseInfoCardDescription>
					<CourseInfoCardDescription>
						{course.authors.map(formatFullName).join(', ')}
					</CourseInfoCardDescription>
				</div>
			</div>
		</Card.Outlined>
	);
};
