import styles from "./Servicos.module.css";

export default function Servicos() {
  return (
    <section className={styles.servicos}>
      <h2>Serviços prestados</h2>
      <ul>
        <li>Aplicação de medicamentos</li>
        <li>Curativos simples e avançados</li>
        <li>Atendimento domiciliar</li>
        <li>Cuidados com idosos</li>
        <li>Acompanhamento pós-procedimento</li>
      </ul>
    </section>
  );
}
