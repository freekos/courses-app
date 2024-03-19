import { useCreateCourseForm } from 'src/hooks/useCreateCourseForm';
import { Container } from 'src/common/Container';
import { Typography } from 'src/common/Typography';
import { Card } from 'src/common/Card';
import { CreateCourseForm } from './components/CreateCourseForm';
import styles from './styles.module.scss';

export const CreateCourse = () => {
	const { form, handleCreateCourse } = useCreateCourseForm();

	return (
		<Container isDark>
			<Typography.H3>Course Edit/Create Page</Typography.H3>
			<div className={styles.create_course__form}>
				<CreateCourseForm form={form} onSubmit={handleCreateCourse} />
			</div>
		</Container>
	);
};
