import { Link } from 'react-router-dom';

import { useLoginForm } from 'src/hooks/useLoginForm';
import { Container } from 'src/common/Container';

import { LoginForm } from './components/LoginForm';
import { AuthCard, AuthLayout } from 'src/common/Auth';

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
