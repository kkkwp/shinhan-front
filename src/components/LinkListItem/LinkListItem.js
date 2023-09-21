import styles from "./LinkListItem.module.css";
import ArrowIconFill from "../../assets/images/ic_arrow_fill.png";

const LinkListItem = ({ subText, text, imageUrl, linkUrl }) => {
  return (
    <a className={styles.linkItem} href={linkUrl}>
      <div className={styles.linkLayout}>
        <img className={styles.linkLogo} src={imageUrl} alt="banner" />
        <div>
          <div className={styles.linkSubText}>{subText}</div>
          <div className={styles.linkText}>{text}</div>
        </div>
      </div>
      <img className={styles.linkArrowIcon} src={ArrowIconFill} alt="arrow" />
    </a>
  );
};

export default LinkListItem;