import { render, screen } from '@testing-library/react';

import { CourseCard } from '../CourseCard';

describe('CourseCard', () => {
	const getComponent = () => {
		const mockCourse = {
			id: '1',
			title: 'Test Course',
			description: 'This is a test course description.',
			authors: ['John Doe', 'Jane Smith'],
			duration: 120,
			creationDate: '2024-04-01',
		};

		return <CourseCard course={mockCourse} />;
	};

	beforeEach(() => {
		render(getComponent());
	});

	it('should display title', () => {
		expect(screen.getByText('Test Course')).toBeInTheDocument();
	});

	it('should display description', () => {
		expect(
			screen.getByText('This is a test course description.')
		).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		expect(screen.getByText('Duration:')).toBeInTheDocument();
		expect(screen.getByText('02:00')).toBeInTheDocument();
	});

	it('should display authors list', () => {
		expect(screen.getByText('Authors:')).toBeInTheDocument();
		expect(screen.getByText('John Doe, Jane Smith')).toBeInTheDocument();
	});

	it('should display created date in the correct format', () => {
		expect(screen.getByText('Created:')).toBeInTheDocument();
		expect(screen.getByText('2024-04-01')).toBeInTheDocument();
	});
});
