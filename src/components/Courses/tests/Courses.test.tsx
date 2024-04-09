import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { Courses } from '../Courses';
import { thunk } from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Courses component', () => {
	const getComponent = () => {
		const mockCourses = [
			{
				id: '1',
				title: 'Course 1',
				description: 'Description 1',
				creationDate: '2024-04-08',
				duration: 60,
				authors: ['1'],
			},
		];
		const mockAuthors = [{ id: '1', name: 'Alex' }];
		const store = mockStore({
			user: { role: 'admin' },
			courses: { courses: mockCourses },
			authors: { authors: mockAuthors },
		});

		return (
			<Provider store={store}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);
	};

	it('should display amount of CourseCard equal to the length of courses array', () => {
		render(getComponent());
		const courseCards = screen.getAllByTestId('course-card');

		expect(courseCards.length).toBe(1);
	});

	it('should show CourseForm after clicking the "Add new course" button', () => {
		render(getComponent());

		const addButton = screen.getByRole('button', { name: 'Add new' });
		fireEvent.click(addButton);

		expect(mockNavigate).toHaveBeenCalledWith('/courses/add');
	});
});
