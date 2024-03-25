import { useState } from 'react';
import { Author, DeleteAuthorArgs, authorsApi } from 'src/api';

export const useAuthors = () => {
	const [authors, setAuthors] = useState<Author[]>([]);

	const handleGetAuthors = async () => {
		try {
			const res = await authorsApi.getAuthors();
			setAuthors(res.result);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDeleteAuthor = async (data: DeleteAuthorArgs) => {
		try {
			await authorsApi.deleteAuthor(data);
			await handleGetAuthors();
		} catch (err) {
			console.log(err);
			throw err;
		}
	};

	return { authors, handleGetAuthors, handleDeleteAuthor };
};
