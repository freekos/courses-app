import { MinusIcon } from '@heroicons/react/16/solid';
import { UseFormReturn } from 'react-hook-form';

import { Author } from 'src/api';
import { CourseSchema } from 'src/hooks';

interface CourseAuthorItemActionsContainerProps {
	item: Author;
	courseForm: UseFormReturn<CourseSchema>;
}

export const CourseAuthorItemActionsContainer = ({
	item,
	courseForm,
}: CourseAuthorItemActionsContainerProps) => {
	const handleRemoveAuthor = (item: Author) => {
		courseForm.setValue(
			'authors',
			courseForm.getValues('authors').filter((author) => author.id !== item.id)
		);
	};

	return (
		<MinusIcon
			style={{ cursor: 'pointer' }}
			width={16}
			onClick={() => handleRemoveAuthor(item)}
		/>
	);
};
