import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './components/Header';
import { Routing } from './routing';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export const persistor = persistStore(store);

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<div className='app'>
						<Header />
						<main className='main'>
							<Routing />
						</main>
					</div>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
