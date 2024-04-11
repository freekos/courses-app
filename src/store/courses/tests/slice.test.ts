import { coursesReducer } from '../slice';
import { courseAddThunk } from '../thunk';

describe('coursesReducer', () => {
	const mockInitialState = {
		courses: [],
		isLoading: false,
		error: null,
		isAdding: false,
		isDeleting: false,
	};

	it('should return the initial state', () => {
		const mockAction = {
			type: '',
		};

		const nextState = coursesReducer(undefined, mockAction);
		expect(nextState).toEqual(mockInitialState);
	});

	it('should handle SAVE_COURSE and return new state', () => {
		const mockAction = {
			type: courseAddThunk.fulfilled.type,
		};

		const nextState = coursesReducer(mockInitialState, mockAction);
		expect(nextState).toEqual({ ...mockInitialState, isAdding: false });
	});
});
