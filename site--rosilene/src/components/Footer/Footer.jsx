import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p><strong>Rosilene – Enfermeira</strong></p>
      <p>Atendimento humanizado • Ética • Profissionalismo</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
