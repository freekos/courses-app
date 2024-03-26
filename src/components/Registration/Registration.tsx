import { Link } from 'react-router-dom';

import { useRegistrationForm } from 'src/hooks';
import { AuthCard, AuthLayout, Container } from 'src/common';
import { RegistrationForm } from './components';

export const Registration = () => {
	const { form, handleRegistration } = useRegistrationForm();

	return (
		<Container isDark>
			<AuthLayout title='Registration'>
				<AuthCard>
					<RegistrationForm form={form} onSubmit={handleRegistration} />
					<span className='auth__description'>
						If you have an account you may{' '}
						<Link style={{ fontWeight: 700 }} to='/login'>
							Login
						</Link>
					</span>
				</AuthCard>
			</AuthLayout>
		</Container>
	);
};
