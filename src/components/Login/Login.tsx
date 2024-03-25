import { Link } from 'react-router-dom';

import { useLoginForm } from 'src/hooks';
import { AuthCard, AuthLayout, Container } from 'src/common';
import { LoginForm } from './components';

export const Login = () => {
	const { form, handleLogin } = useLoginForm();

	return (
		<Container isDark>
			<AuthLayout title='Login'>
				<AuthCard>
					<LoginForm form={form} onSubmit={handleLogin} />
					<span style={{ textAlign: 'center' }} className='auth__description'>
						<p>If you don't have an account you may </p>
						<Link style={{ fontWeight: 700 }} to='/registration'>
							Registration
						</Link>
					</span>
				</AuthCard>
			</AuthLayout>
		</Container>
	);
};
