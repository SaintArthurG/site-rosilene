import styles from "./Videos.module.css";

export default function Videos() {
  return (
    <section className={styles.videos}>
      <h2>Conteúdos e orientações</h2>
      <p>
        Vídeos educativos voltados à promoção da saúde, cuidados e bem-estar.
      </p>

      <div className={styles.grid}>
        <iframe
          src="https://www.youtube.com/embed/ID_DO_VIDEO"
          title="Vídeo 1"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/ID_DO_VIDEO"
          title="Vídeo 2"
          allowFullScreen
        />
      </div>
    </section>
  );
}
