import { Author } from 'src/api';

export interface AuthorsState {
	authors: Author[];
	isLoading: boolean;
	error: string | null;
}
