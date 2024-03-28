import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './components/Header';
import { Routing } from './routing';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className='app'>
					<Header />
					<main className='main'>
						<Routing />
					</main>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
