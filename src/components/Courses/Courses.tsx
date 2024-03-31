import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';

import { courseDeleteThunk, coursesGetThunk } from 'src/store';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCoursesWithAuthorNames } from 'src/helpers';
import { DeleteCourseArgs } from 'src/api';
import { Button, Container, ProtectedView } from 'src/common';
import { CourseCard, SearchBar } from './components';
import { EmptyCoursesList } from './EmptyCoursesList';
import styles from './styles.module.scss';

export const Courses = () => {
	const courses = useAppSelector((state) => state.courses.courses);
	const authors = useAppSelector((state) => state.authors.authors);
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
			await dispatch(courseDeleteThunk(data));
			await dispatch(coursesGetThunk());
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		dispatch(coursesGetThunk());
	}, []);

	// TODO: move by single-responsibility
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
						<ProtectedView
							role='admin'
							fallback={
								<p style={{ textAlign: 'center' }}>
									You have not access to create course button!
								</p>
							}
						>
							<Button
								style={{ textTransform: 'uppercase' }}
								onClick={() => navigate('/courses/add')}
							>
								Add new course
							</Button>
						</ProtectedView>
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
				<ProtectedView
					role='admin'
					// fallback={
					// 	<p style={{ textAlign: 'center' }}>
					// 		You have not access to create new course!
					// 	</p>
					// }
				>
					<Button
						style={{ textTransform: 'uppercase' }}
						onClick={() => navigate('/courses/add')}
					>
						Add new
					</Button>
				</ProtectedView>
			}
		>
			{resultCourses.map((item) => (
				<CourseCard
					key={item.id}
					course={item}
					actions={
						// TODO: move by single-responsibility
						<div className={styles.course__actions}>
							<Button
								style={{ width: '100%', textTransform: 'uppercase' }}
								onClick={() => navigate(`/courses/${item.id}`)}
							>
								Show course
							</Button>
							<ProtectedView role='admin'>
								<Button
									size='icon'
									onClick={() => handleDeleteCourse({ id: item.id })}
								>
									<TrashIcon width='20' color='white' />
								</Button>

								<Button size='icon'>
									<PencilIcon width='20' color='white' />
								</Button>
							</ProtectedView>
						</div>
					}
				/>
			))}
		</Container>
	);
};
