import styles from "./AccordianListItem.module.css";
import ArrowIcon from "../../assets/images/ic_arrow.svg";

const AccordianListItem = ({ title, onClick, isOpen }) => {
  return (
    <div className={styles.accordionContainer} onClick={onClick}>
      <div className={styles.accordionTitle}>{title}</div>
      <img src={ArrowIcon} className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ""}`} />
    </div>
  );
};

export default AccordianListItem;