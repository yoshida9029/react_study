import styles from './Profile.module.css';

function Profile() {
    return (
        <section className={styles.box}>
        <h2>プロフィール</h2>
        <p>ここにユーザーのプロフィール情報を表示します。</p>
        </section>
    );
}

export default Profile;

