import { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';

import { Container } from 'src/common/Container';
import { Button } from 'src/common/Button';
import { Course } from 'src/types/course';
import { SearchBar } from './components/SearchBar';
import { CourseCard } from './components/CourseCard';
import { AUTHORS_LIST, COURSES } from 'src/constants';
import { EmptyCoursesList } from './EmptyCoursesList';
import styles from './styles.module.scss';

export const Courses = () => {
	const courses = COURSES.map((course) => {
		const authors = course.authors.map((author) => {
			const findAuthor = AUTHORS_LIST.find((item) => item.id === author);
			return findAuthor!.name;
		});
		return {
			...course,
			authors,
		};
	});
	const [resultCourses, setResultCourses] = useState<Course[]>(courses);
	const navigate = useNavigate();

	const handleSearch = (search: string) => {
		const filterCourses = courses.filter((item) =>
			item.title.toLowerCase().includes(search.toLowerCase())
		);
		setResultCourses(filterCourses);
	};

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

							<Button size='icon'>
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
