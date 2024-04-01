import { PlusIcon, TrashIcon } from '@heroicons/react/16/solid';
import { UseFormReturn } from 'react-hook-form';

import { Author } from 'src/api';
import { CourseSchema, useAppDispatch } from 'src/hooks';
import { authorDeleteThunk, authorsGetThunk } from 'src/store';

interface AuthorItemActionsContainerProps {
	item: Author;
	courseForm: UseFormReturn<CourseSchema>;
}

export const AuthorItemActionsContainer = ({
	item,
	courseForm,
}: AuthorItemActionsContainerProps) => {
	const dispatch = useAppDispatch();

	const handleDeleteAuthor = async () => {
		try {
			await dispatch(authorDeleteThunk({ id: item.id }));
			await dispatch(authorsGetThunk());
		} catch (err) {
			console.log(err);
		}
	};

	const handleAddAuthor = () => {
		courseForm.setValue('authors', [item, ...courseForm.getValues('authors')]);
	};

	return (
		<>
			<PlusIcon
				style={{ cursor: 'pointer' }}
				width={16}
				onClick={handleAddAuthor}
			/>
			<TrashIcon
				style={{ cursor: 'pointer' }}
				width={16}
				onClick={handleDeleteAuthor}
			/>
		</>
	);
};
