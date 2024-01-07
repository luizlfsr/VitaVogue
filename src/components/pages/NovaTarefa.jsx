import { useState } from "react";
import styles from "./NovaTarefa.module.css";

function NovaTarefa() {
  const [valorName, setValorName] = useState('')
  const [valorContent, setValorContent] = useState('')

  const handleChangeName = (event) => {
    setValorName(event.target.value)
  }

  const handleChangeContent = (event) => {
    setValorContent(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    let dados = {
      name: valorName,
      content: valorContent
    }
    console.log(dados)
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h2>Criação de Tarefa</h2>
        <input
          type="text"
          id="input_name"
          className={styles.input}
          placeholder="nome da tarefa"
          required
          value={valorName}
          onChange={handleChangeName}
        />
        <input
          type="text"
          id="input_content"
          className={styles.input}
          placeholder="Conteudo da tarefa"
          required
          value={valorContent}
          onChange={handleChangeContent}
        />
        <input
          type="submit"
          id="submit_form"
          className={styles.submit_form}
          value="Concluir Criação"
        ></input>
      </form>
    </>
  );
}

export default NovaTarefa;
