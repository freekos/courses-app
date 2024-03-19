import { useRef } from 'react';
import { Button } from 'src/common/Button';
import { Field } from 'src/common/Field';
import { Input } from 'src/common/Input';

interface AuthorCreateFieldProps {
	onChange: (value: string) => void;
}

export const AuthorCreateField = ({ onChange }: AuthorCreateFieldProps) => {
	const ref = useRef<HTMLInputElement | null>(null);
	return (
		<Field>
			<Input ref={ref} />
			<Button
				style={{ textTransform: 'uppercase' }}
				type='button'
				onClick={() => onChange(ref.current?.value || '')}
			>
				Create Author
			</Button>
		</Field>
	);
};
