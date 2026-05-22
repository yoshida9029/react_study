// src/components/Card.jsx
// import "./Card.css";
import styles from "./Card.module.css";

function Card() {
    return (
    <section className={styles.card}>
        <h2>カードタイトル</h2>
        <p>
        このカードは、テーマに合わせて背景色・文字色・枠線の色が変わります。
        </p>
    </section>
    );
}

export default Card;