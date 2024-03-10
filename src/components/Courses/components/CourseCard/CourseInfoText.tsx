import styles from './styles.module.scss';

interface CourseInfoTextProps {
	title: string;
	description: string;
}

export const CourseInfoText = ({ title, description }: CourseInfoTextProps) => {
	return (
		<div className={styles.course_info}>
			<span className={styles.course_info__title}>{title}</span>
			<span className={styles.course_info__description}>{description}</span>
		</div>
	);
};
