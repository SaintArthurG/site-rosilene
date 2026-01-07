import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Cuidado humanizado e profissional</h2>
          <p>
            Atendimento ético, responsável e dedicado, com foco no bem-estar,
            segurança e conforto de cada paciente.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              className={styles.whatsapp}
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href="https://instagram.com/SEUINSTAGRAM"
              target="_blank"
              className={styles.instagram}
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        <div className={styles.photo}>
          <img src="../../../public/Kellen.jpeg" alt="Rosilene - Enfermeira" />
        </div>
      </div>
    </section>
  );
}
