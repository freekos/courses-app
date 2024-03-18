import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { Routing } from './routing';

function App() {
	return (
		<div className='app'>
			<Header />
			<main className='main'>
				<BrowserRouter>
					<Routing />
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
