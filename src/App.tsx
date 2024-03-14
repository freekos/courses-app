import { useState } from 'react';

import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { CourseInfo } from './components/CourseInfo';
import { Course } from './types/course';
import { AUTHORS_LIST, COURSES } from './constants';
import { Button } from './common/Button';

function App() {
	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

	const courses = COURSES.map((course) => {
		const authors = course.authors.map((author) => {
			const findAuthor = AUTHORS_LIST.find((item) => item.id === author);
			return findAuthor.name;
		});
		return {
			...course,
			authors,
		};
	});

	return (
		<div className='app'>
			<Header />
			<main className='main'>
				{selectedCourse ? (
					<CourseInfo
						course={selectedCourse}
						actions={
							<Button onClick={() => setSelectedCourse(null)}>Back</Button>
						}
					/>
				) : (
					<Courses
						onShow={(course: Course) => setSelectedCourse(course)}
						courses={courses}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
