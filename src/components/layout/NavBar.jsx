/* eslint-disable react/prop-types */
import styles from "./NavBar.module.css";

function NavBar({ toggle, setToggle }) {
  return (
    <header className={styles.navbar}>
      <h1>Vita Vogue</h1>
      <nav className={styles.nav}>
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={`${styles.toggle_button} ${
            toggle ? styles.active : styles.inative
          }`}
        >
          <span></span>
        </div>
        <a href="/">home</a>
        <a href="/tarefas">tarefas</a>
      </nav>
    </header>
  );
}

export default NavBar;
