import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { AUTHORS_LIST, COURSES } from './constants';

function App() {
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
				<Courses courses={courses} />
			</main>
		</div>
	);
}

export default App;
