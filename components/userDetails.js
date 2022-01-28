import { useQuery } from 'react-query';
import * as api from '../http/usersApi';
import styles from '../styles/Home.module.css';
import { UserForm } from './userform';
import React from 'react';
export const UserDetails = ({ userId }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const { data, isLoading, isError, error } = useQuery(['users', userId], () =>
    api.getUserById(userId)
  );
  if (!userId) return <h3>No user selected</h3>;

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>Error: {error.message}</h3>;

  return (
    <div className={styles.details}>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      {isEditing ? (
        <UserForm user={data} setIsEditing={setIsEditing} />
      ) : (
        <div>
          <h2>name: {data.name}</h2>
          <h2>age: {data.age}</h2>
          <h2>city: {data.city}</h2>
          <h2>occupation: {data.occupation}</h2>
        </div>
      )}
    </div>
  );
};
