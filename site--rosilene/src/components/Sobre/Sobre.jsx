import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.card}>
        <h2>Sobre a profissional</h2>
        <p>
          Rosilene é enfermeira formada, com atuação voltada ao cuidado
          humanizado, prezando sempre pela ética, empatia e responsabilidade.
        </p>
        <p>
          Possui experiência em atendimentos domiciliares e procedimentos
          assistenciais, oferecendo segurança e confiança aos pacientes.
        </p>
      </div>
    </section>
  );
}
