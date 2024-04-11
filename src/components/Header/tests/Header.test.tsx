import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { Header } from '../Header';
import { UserState } from 'src/store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Header', () => {
	const getComponent = (props: { userState?: Partial<UserState> } = {}) => {
		const store = mockStore({ user: props?.userState });
		return (
			<Provider store={store}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);
	};

	it('should render header logo', () => {
		const mockUserState = {
			isAuth: false,
		};

		render(
			getComponent({
				userState: mockUserState,
			})
		);

		expect(screen.getByAltText('Logo')).toBeInTheDocument();
	});
	it('should render authorized username', () => {
		const mockUserState = {
			isAuth: true,
			name: 'Alex',
		};

		render(getComponent({ userState: mockUserState }));

		expect(screen.getByText('Alex')).toBeInTheDocument();
	});
});
