import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { Header } from '../Header';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Header', () => {
	it('should render header logo', () => {
		const store = mockStore({ user: {} });
		render(
			<Provider store={store}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);
		expect(screen.queryByAltText('Logo')).toBeInTheDocument();
		expect(screen.queryByTestId('username')).not.toBeInTheDocument();
	});
	it('should render username', () => {
		const store = mockStore({ user: { isAuth: true, name: 'User' } });
		render(
			<Provider store={store}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);
		expect(screen.queryByTestId('username')).toContainHTML('User');
	});
});
