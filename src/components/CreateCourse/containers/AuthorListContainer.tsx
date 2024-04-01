import { CourseSchema, useAppSelector } from 'src/hooks';
import { AuthorItem, AuthorList } from '../components';
import { AuthorItemActionsContainer } from './AuthorItemActionsContainer';
import { UseFormReturn } from 'react-hook-form';

interface AuthorListContainerProps {
	courseForm: UseFormReturn<CourseSchema>;
}

export const AuthorListContainer = ({
	courseForm,
}: AuthorListContainerProps) => {
	const authors = useAppSelector((state) => state.authors.authors);

	return (
		<AuthorList>
			{authors.map((item, index) => (
				<AuthorItem
					key={index}
					name={item.name}
					actions={
						<AuthorItemActionsContainer item={item} courseForm={courseForm} />
					}
				/>
			))}
		</AuthorList>
	);
};
