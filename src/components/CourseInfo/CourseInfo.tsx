import { Container } from 'src/common/Container';
import { CourseInfoCard } from './components/CourseInfoCard';
import styles from './styles.module.scss';
import { Button } from 'src/common/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourse } from 'src/hooks/useCourse';
import { useEffect } from 'react';

export const CourseInfo = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { course, handleGetCourse } = useCourse();

	useEffect(() => {
		if (!id) return;
		handleGetCourse({ id });
	}, [id]);

	if (!course) {
		return null;
	}

	return (
		<Container isDark>
			<div className={styles.course_info}>
				<h5 className={styles.course_info__title}>{course.title}</h5>
				<div className={styles.course_info__card}>
					<CourseInfoCard course={course} />
				</div>
				<div className={styles.course_info__actions}>
					<Button onClick={() => navigate(-1)}>Back</Button>
				</div>
			</div>
		</Container>
	);
};
