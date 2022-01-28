import styles from '../styles/Home.module.css';
import { Users } from '../components/users';
import { UserDetails } from '../components/userDetails';
import React from 'react';
export default function Home() {
  const [userId, setUserId] = React.useState();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https:///react-query.tanstack.com'>React Query</a>
        </h1>
        <div className={styles.usersContainer}>
          <Users className={styles.left} setUserId={setUserId} />
          <UserDetails className={styles.right} userId={userId} />
        </div>
      </main>
    </div>
  );
}
