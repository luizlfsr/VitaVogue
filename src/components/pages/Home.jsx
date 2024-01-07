import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home_container}>
      <h2>Seja Bem-Vindo ao meu site!</h2>
      <p>Este é um simple site To Do List.</p>
      <p>Tente criar uma tarefa.</p>
      <a href='/novatarefa' className={styles.button}>Criar Tarefa</a>
    </div>
  )
}

export default Home