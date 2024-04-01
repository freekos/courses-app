import { useEffect, useState } from 'react';
import { Button } from 'src/common/Button';
import { Input } from 'src/common/Input';
import styles from './styles.module.scss';

interface SearchBarProps {
	onSearch: (value: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
	const [search, setSearch] = useState<string>('');

	useEffect(() => {
		if (search) return;
		onSearch('');
	}, [search]);

	return (
		<div className={styles.search_bar}>
			<Input
				style={{ width: '100%', maxWidth: '400px' }}
				placeholder='Input text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Button
				style={{ textTransform: 'uppercase' }}
				onClick={() => onSearch(search)}
			>
				Search
			</Button>
		</div>
	);
};
