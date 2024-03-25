import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';

import { useCourses } from 'src/hooks';
import { Course, DeleteCourseArgs } from 'src/api';
import { Container } from 'src/common/Container';
import { Button } from 'src/common/Button';
import { SearchBar } from './components/SearchBar';
import { CourseCard } from './components/CourseCard';
import { EmptyCoursesList } from './EmptyCoursesList';
import styles from './styles.module.scss';

export const Courses = () => {
	const {
		courses,
		handleGetCourses,
		handleDeleteCourse: onDeleteCourse,
	} = useCourses();
	const [resultCourses, setResultCourses] = useState<Course[]>(courses);
	const navigate = useNavigate();

	const handleSearch = (search: string) => {
		const filterCourses = courses.filter((item) =>
			item.title.toLowerCase().includes(search.toLowerCase())
		);
		setResultCourses(filterCourses);
	};

	const handleDeleteCourse = async (data: DeleteCourseArgs) => {
		try {
			await onDeleteCourse(data);
			await handleGetCourses();
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		handleGetCourses();
	}, []);

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
			left={<SearchBar onSearch={handleSearch} />}
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
