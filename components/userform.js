import React from 'react';
import styles from '../styles/Home.module.css';
import { useMutation, useQueryClient } from 'react-query';
import * as api from '../http/usersApi';

export const UserForm = ({ user, setIsEditing }) => {
  const [fields, setFields] = React.useState({ ...user });
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(api.updateUser, {
    onSuccess: (data) => {
      queryClient.setQueryData(['users', user.id], data);
      // // trigger the old data to be invalidated
      // queryClient.invalidateQueries(['users', user.id]);
      setIsEditing(false);
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(fields);
  };

  if (isLoading) return <p>Saving your changes...</p>;
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          <input
            type='text'
            name='name'
            value={fields.name}
            onChange={handleChange}
          />
        </label>
        <label>
          age:{' '}
          <input
            type='text'
            name='age'
            value={fields.age}
            onChange={handleChange}
          />
        </label>
        <label>
          city:{' '}
          <input
            type='text'
            name='city'
            value={fields.city}
            onChange={handleChange}
          />
        </label>
        <label>
          occupation:{' '}
          <input
            type='text'
            name='occupation'
            value={fields.occupation}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};
