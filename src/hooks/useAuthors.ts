import { useState } from 'react';

import { Author, authorsApi } from 'src/api';

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

	return { authors, handleGetAuthors };
};
