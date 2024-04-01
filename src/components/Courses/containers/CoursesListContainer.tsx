import { useMemo } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';

import { Course, DeleteCourseArgs } from 'src/api';
import { Button, ProtectedView } from 'src/common';
import { getCoursesWithAuthorNames } from 'src/helpers';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { courseDeleteThunk, coursesGetThunk } from 'src/store';
import { CourseCard } from '../components';
import { EmptyCoursesList } from '../EmptyCoursesList';
import styles from '../styles.module.scss';

interface CoursesListContainerProps {
	courses: Course[];
	search: string;
}

export const CoursesListContainer = ({
	courses,
	search,
}: CoursesListContainerProps) => {
	const authors = useAppSelector((state) => state.authors.authors);
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

	if (!courses.length) {
		return (
			<div className={styles.empty__wrapper}>
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
			</div>
		);
	}

	return (
		<>
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
							<ProtectedView role='admin'>
								<Button
									size='icon'
									onClick={() => handleDeleteCourse({ id: item.id })}
								>
									<TrashIcon width='20' color='white' />
								</Button>

								<Button
									size='icon'
									onClick={() => navigate(`/courses/update/${item.id}`)}
								>
									<PencilIcon width='20' color='white' />
								</Button>
							</ProtectedView>
						</div>
					}
				/>
			))}
		</>
	);
};
