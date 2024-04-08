import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector, useCourse } from 'src/hooks';
import { Button, Container } from 'src/common';
import { CourseInfoCard } from './components';
import styles from './styles.module.scss';

export const CourseInfo = () => {
	const authors = useAppSelector((state) => state.authors.authors);
	const { course, handleGetCourse } = useCourse();
	const { id } = useParams();
	const navigate = useNavigate();

	const courseWithAuthorsNames = useMemo(() => {
		if (!course) return null;
		return {
			...course,
			authors: course.authors.map((authorId) => {
				const findAuthor = authors.find((item) => item.id === authorId);
				return findAuthor?.name ?? '';
			}),
		};
	}, [authors, course]);

	useEffect(() => {
		if (!id) return;
		handleGetCourse({ id });
	}, [id]);

	if (!courseWithAuthorsNames) {
		return null;
	}

	return (
		<Container isDark>
			<div className={styles.course_info}>
				<h5 className={styles.course_info__title}>
					{courseWithAuthorsNames.title}
				</h5>
				<div className={styles.course_info__card}>
					<CourseInfoCard course={courseWithAuthorsNames} />
				</div>
				<div className={styles.course_info__actions}>
					<Button onClick={() => navigate('../')}>Back</Button>
				</div>
			</div>
		</Container>
	);
};
