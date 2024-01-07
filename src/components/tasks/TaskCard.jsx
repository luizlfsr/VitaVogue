import styles from "./taskCard.module.css";

function tasksCard({ name }) {
  return (
    <div className={styles.card}>
      <p>{name ? name : "nome não informado"}</p>
      <button className={styles.card_button}>Ver Conteudo</button>
    </div>
  );
}

export default tasksCard;
