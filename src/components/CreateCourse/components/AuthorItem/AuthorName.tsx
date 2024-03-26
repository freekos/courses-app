import styles from './styles.module.scss';

interface AuthorNameProps {
	name: string;
}

export const AuthorName = ({ name }: AuthorNameProps) => {
	return <span className={styles.author_item__name}>{name}</span>;
};
