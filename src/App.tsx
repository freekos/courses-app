import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { COURSES } from './constants';

function App() {
	return (
		<div className='app'>
			<Header />
			<main className='main'>
				<Courses courses={COURSES} />
			</main>
		</div>
	);
}

export default App;
