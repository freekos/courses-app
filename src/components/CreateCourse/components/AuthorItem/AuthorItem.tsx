import { PlusIcon, TrashIcon } from '@heroicons/react/16/solid';
import styles from './styles.module.scss';

interface AuthorItemProps {
	name: string;
	onAdd: () => void;
	onDelete: () => void;
}

interface AuthorNameProps {
	name: string;
}

export const AuthorItem = ({ name, onAdd, onDelete }: AuthorItemProps) => {
	return (
		<div className={styles.author_item}>
			<AuthorName name={name} />
			<div className={styles.author_item__actions}>
				<PlusIcon width={16} />
				<TrashIcon width={16} />
			</div>
		</div>
	);
};

export const AuthorName = ({ name }: AuthorNameProps) => {
	return <span className={styles.author_item__name}>{name}</span>;
};
