import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img className={styles.cardImage} src={event.cardImage} alt="banner" />
      </div>
      <div className={styles.cardTitle}>{event.title}</div>
      {/* 설명 */}
      <ul className={styles.cardDesc}>
        {event.list.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventCard;