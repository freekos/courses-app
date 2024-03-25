import { ComponentProps } from 'react';

import styles from './styles.module.scss';

type CourseFormSectionProps = ComponentProps<'section'>;

export const CourseFormSection = ({
	children,
	...props
}: CourseFormSectionProps) => {
	return (
		<section className={styles.course_form__section} {...props}>
			{children}
		</section>
	);
};
