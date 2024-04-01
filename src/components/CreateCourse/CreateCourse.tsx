import { useLocation, useNavigate, useParams } from 'react-router-dom';

import {
	CourseSchema,
	useAppSelector,
	useCourse,
	useCourseForm,
} from 'src/hooks';
import { Container, Typography } from 'src/common';
import { CreateCourseContainer } from './containers';
import styles from './styles.module.scss';
import { useEffect } from 'react';

type CourseMode = 'create' | 'update' | null;

export const CreateCourse = () => {
	const authors = useAppSelector((state) => state.authors.authors);
	const { course, handleGetCourse } = useCourse();
	const {
		form: courseForm,
		handleCreateCourse: onCreateCourse,
		handleUpdateCourse: onUpdateCourse,
	} = useCourseForm();
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();
	const mode: CourseMode = location.pathname.includes('add')
		? 'create'
		: location.pathname.includes('update')
			? 'update'
			: null;

	const handleCreateCourse = async (data: CourseSchema) => {
		if (mode !== 'create') return;
		try {
			await onCreateCourse(data);
			navigate('/courses');
		} catch (err) {
			console.log(err);
			courseForm.setError('root', {
				message: err?.response?.data?.result || 'Request error',
			});
		}
	};

	const handleUpdateCourse = async (data: CourseSchema) => {
		if (mode !== 'update' || !course) return;
		try {
			await onUpdateCourse({ id: course.id, ...data });
			navigate('/courses');
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (mode !== 'update' || !id) return;
		handleGetCourse({ id });
	}, [id]);

	useEffect(() => {
		if (!course) return;
		courseForm.setValue('title', course.title);
		courseForm.setValue('description', course.description);
		courseForm.setValue('duration', String(course.duration));
		courseForm.setValue(
			'authors',
			course.authors.map((authorId) => {
				const findAuthor = authors.find((item) => item.id === authorId);
				return findAuthor ?? { id: '', name: '' };
			})
		);
	}, [authors, course]);

	return (
		<Container isDark>
			<Typography.H3>Course Edit/Create Page</Typography.H3>
			<div className={styles.create_course__form}>
				{mode === 'create' ? (
					<CreateCourseContainer
						courseForm={courseForm}
						onSubmit={handleCreateCourse}
					/>
				) : mode === 'update' ? (
					<CreateCourseContainer
						courseForm={courseForm}
						onSubmit={handleUpdateCourse}
					/>
				) : null}
			</div>
		</Container>
	);
};
