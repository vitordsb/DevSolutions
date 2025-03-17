import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} className={styles.icon} />
      <h3>{title}</h3>
      <p>{description}</p>
        <a href="" className={styles.detailsButton}>
            <img src="/public/icons/whatsapp.png" alt="" />
            <p>Entre em contato</p>
        </a>
    </div>
  );
}
