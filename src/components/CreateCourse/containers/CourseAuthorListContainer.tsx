import { UseFormReturn } from 'react-hook-form';
import { CourseSchema } from 'src/hooks';
import { AuthorItem, AuthorList, EmptyAuthorList } from '../components';
import { CourseAuthorItemActionsContainer } from './CourseAuthorItemActionsContainer';

interface CourseAuthorListContainerProps {
	authors: CourseSchema['authors'];
	courseForm: UseFormReturn<CourseSchema>;
}

export const CourseAuthorListContainer = ({
	authors,
	courseForm,
}: CourseAuthorListContainerProps) => {
	return (
		<>
			{!authors.length ? (
				<EmptyAuthorList>Author list is empty</EmptyAuthorList>
			) : (
				<AuthorList>
					{authors.map((item, index) => (
						<AuthorItem
							key={index}
							name={item.name}
							actions={
								<CourseAuthorItemActionsContainer
									item={item}
									courseForm={courseForm}
								/>
							}
						/>
					))}
				</AuthorList>
			)}
		</>
	);
};
