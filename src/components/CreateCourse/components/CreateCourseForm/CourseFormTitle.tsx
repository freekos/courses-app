import { ComponentProps } from 'react';
import styles from './styles.module.scss';

type CourseFormTitleProps = ComponentProps<'p'>;

export const CourseFormTitle = ({
	children,
	...props
}: CourseFormTitleProps) => {
	return (
		<p className={styles.course_form__title} {...props}>
			{children}
		</p>
	);
};
