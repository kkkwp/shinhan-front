import styles from "./BenefitCard.module.css";

const BenefitCard = ({ benefit }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img className={styles.cardImage} src={benefit.image} alt="banner" />
      </div>
      <div className={styles.cardTitle}>{benefit.title}</div>
      {/* 설명 */}
      <ul className={styles.cardDesc}>
        {benefit.restrictions.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitCard;