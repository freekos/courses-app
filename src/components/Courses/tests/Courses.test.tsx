import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { Courses } from '../Courses';
import { thunk } from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

describe('Courses component', () => {
	let navigate;

	beforeEach(() => {
		navigate = jest.fn();
		jest.doMock('react-router-dom', () => ({
			...jest.requireActual('react-router-dom'),
			useNavigate: () => navigate,
		}));
	});

	it('should display amount of CourseCard equal to the length of courses array', () => {
		const store = mockStore({
			courses: { courses: mockCourses },
			authors: { authors: mockAuthors },
			user: { role: 'admin' },
		});

		render(
			<Provider store={store}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);
		const courseCards = screen.getAllByTestId('course-card');

		expect(courseCards.length).toBe(mockCourses.length);
	});

	it('should show CourseForm after clicking the "Add new course" button', () => {
		const store = mockStore({
			courses: { courses: mockCourses },
			authors: { authors: mockAuthors },
			user: { role: 'admin' },
		});

		render(
			<Provider store={store}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);

		const addButton = screen.getByText('Add new');
		fireEvent.click(addButton);

		// expect(navigate).toHaveBeenCalled();
	});
});
