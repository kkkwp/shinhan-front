import styles from "./TopNav.module.css";
import Logo from "../../assets/images/logo.svg";
import shareIcon from "../../assets/images/ic_share.svg";

const TopNav = () => {
  const APP_DOWNLOAD_LINK = "https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";

  const onClickCopyButton = () => {
    // TODO: [미션] 현재 사이트 링크 클립보드 복사하고 알림창 띄우기
    var currentUrl = document.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("링크를 복사했습니다.");
    });
  };

  return (
    <div className={styles.container}>
      {/* 로고 */}
      <img src={Logo} alt="logo" />
      <div className={styles.rightButtonContainer}>
        {/* 다운로드 버튼 */}
        <a href={APP_DOWNLOAD_LINK} rel="noreferrer" target="_blank">
          <div className={styles.roundButton}>앱 다운로드</div>
        </a>
        {/* 공유 버튼 */}
        <div className={styles.circleButton} onClick={onClickCopyButton}>
          <img src={shareIcon} alt="share" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;