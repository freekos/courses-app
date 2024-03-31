import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';

// import { authorsGetThunk, courseDeleteThunk, coursesGetThunk } from 'src/store';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCoursesWithAuthorNames } from 'src/helpers';
import { DeleteCourseArgs } from 'src/api';
import { Button, Container } from 'src/common';
import { CourseCard, SearchBar } from './components';
import { EmptyCoursesList } from './EmptyCoursesList';
import styles from './styles.module.scss';

export const Courses = () => {
	const { courses } = useAppSelector((state) => state.courses);
	const { authors } = useAppSelector((state) => state.authors);
	const [search, setSearch] = useState<string>('');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const coursesWithAuthorsNames = useMemo(() => {
		if (!courses.length || !authors.length) return [];
		return getCoursesWithAuthorNames(courses, authors);
	}, [courses, authors]);

	const resultCourses = useMemo(() => {
		return coursesWithAuthorsNames.filter((item) =>
			item.title.toLowerCase().includes(search.toLowerCase())
		);
	}, [coursesWithAuthorsNames, search]);

	const handleDeleteCourse = async (data: DeleteCourseArgs) => {
		try {
			// TODO: remove comment
			// await dispatch(courseDeleteThunk(data));
			// await dispatch(coursesGetThunk());
		} catch (err) {
			console.log(err);
		}
	};

	// TODO: remove comment
	// useEffect(() => {
	// 	dispatch(coursesGetThunk());
	// }, []);

	if (!courses.length) {
		return (
			<Container
				isDark
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
				}}
			>
				<EmptyCoursesList
					action={
						<Button
							style={{ textTransform: 'uppercase' }}
							onClick={() => navigate('/courses/add')}
						>
							Add new course
						</Button>
					}
				/>
			</Container>
		);
	}

	return (
		<Container
			isDark
			style={{ height: '100%' }}
			left={<SearchBar onSearch={setSearch} />}
			right={
				<Button
					style={{ textTransform: 'uppercase' }}
					onClick={() => navigate('/courses/add')}
				>
					Add new
				</Button>
			}
		>
			{resultCourses.map((item) => (
				<CourseCard
					key={item.id}
					course={item}
					actions={
						<div className={styles.course__actions}>
							<Button
								style={{ width: '100%', textTransform: 'uppercase' }}
								onClick={() => navigate(`/courses/${item.id}`)}
							>
								Show course
							</Button>

							<Button
								size='icon'
								onClick={() => handleDeleteCourse({ id: item.id })}
							>
								<TrashIcon width='20' color='white' />
							</Button>

							<Button size='icon'>
								<PencilIcon width='20' color='white' />
							</Button>
						</div>
					}
				/>
			))}
		</Container>
	);
};
