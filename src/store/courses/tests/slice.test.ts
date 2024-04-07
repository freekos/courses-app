import { coursesReducer } from '../slice';
import { courseAddThunk } from '../thunk';

describe('coursesReducer', () => {
	it('should return the initial state', () => {
		const initialState = {
			courses: [],
			isLoading: false,
			error: null,
			isAdding: false,
			isDeleting: false,
		};
		const nextState = coursesReducer(undefined, {});
		expect(nextState).toEqual(initialState);
	});

	it('should handle SAVE_COURSE and return new state', () => {
		const initialState = {
			courses: [],
			isLoading: false,
			error: null,
			isAdding: false,
			isDeleting: false,
		};
		const action = {
			type: courseAddThunk.fulfilled.type,
		};
		const expectedState = {
			...initialState,
			isAdding: false,
		};
		const nextState = coursesReducer(initialState, action);
		expect(nextState).toEqual(expectedState);
	});
});
