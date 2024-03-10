import styles from './styles.module.scss';

interface UsernameProps {
	name: string;
}

export const Username = ({ name }: UsernameProps) => {
	return <p className={styles.username}>{name}</p>;
};
