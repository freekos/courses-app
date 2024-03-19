import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { Routing } from './routing';

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
				<main className='main'>
					<Routing />
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
