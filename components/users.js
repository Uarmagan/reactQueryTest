import { useQuery } from 'react-query';
import * as api from '../http/usersApi';
import styles from '../styles/Home.module.css';

export const Users = ({ setUserId }) => {
  const { data, isLoading, isError, error } = useQuery('users', api.getUsers);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul className={styles.userSelectionList}>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} <button onClick={() => setUserId(user.id)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
