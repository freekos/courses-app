import { render } from '@testing-library/react';

import { CourseCard } from '../CourseCard';

const mockCourse = {
	id: '1',
	title: 'Test Course',
	description: 'This is a test course description.',
	authors: ['John Doe', 'Jane Smith'],
	duration: 120,
	creationDate: '2024-04-01',
};

describe('CourseCard', () => {
	it('should display title', () => {
		const { getByTestId } = render(<CourseCard course={mockCourse} />);
		expect(getByTestId('title')).toHaveTextContent('Test Course');
	});

	it('should display description', () => {
		const { getByText } = render(<CourseCard course={mockCourse} />);
		expect(getByText('This is a test course description.')).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		const { getByText } = render(<CourseCard course={mockCourse} />);
		expect(getByText(/Duration:/)).toBeInTheDocument();
		expect(getByText('02:00')).toBeInTheDocument();
	});

	it('should display authors list', () => {
		const { getByText } = render(<CourseCard course={mockCourse} />);
		expect(getByText(/Authors:/)).toBeInTheDocument();
		expect(getByText('John Doe, Jane Smith')).toBeInTheDocument();
	});

	it('should display created date in the correct format', () => {
		const { getByText } = render(<CourseCard course={mockCourse} />);
		expect(getByText(/Created:/)).toBeInTheDocument();
		expect(getByText('2024-04-01')).toBeInTheDocument();
	});
});
