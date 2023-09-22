import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import HeaderCard from "../../assets/images/header_1.svg";
import EventLogo1 from "../../assets/images/event_logo_1.png";
import EventLogo2 from "../../assets/images/event_logo_2.png";
import EventLogo3 from "../../assets/images/event_logo_3.png";
import EventInfo from "../../components/EventInfo/EventInfo";
import AccordianListItem from "../../components/AccordianListItem/AccordianListItem";
import LinkListItem from "../../components/LinkListItem/LinkListItem";
import TopNav from "../../components/TopNav/TopNav";

const events = [
  { title: "기간", text: "2023.07.01(토) ~ 2023.12.31(일)" },
  { title: "대상", text: "신한투자증권 생애 첫 계좌 개설 신규 고객" },
];

const Home = () => {
  const navigate = useNavigate();

  const [openAccordion1, setOpenAccordion1] = useState(false);
  const [openAccordion2, setOpenAccordion2] = useState(false);

  const onClickAccordion1 = () => {
    setOpenAccordion1(!openAccordion1);
  };
  const onClickAccordion2 = () => {
    setOpenAccordion2(!openAccordion2);
  };

  return (
    <>
      <TopNav />
      {/*상단 탭 */}
      <div className={styles.tabMenuContainer}>
        <button onClick={() => navigate("/")}>국내 주식</button>
        <button onClick={() => navigate("/global")}>해외 주식</button>
      </div>

      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.headerSubTitle}>지금 계좌 개설하면</div>
          <div className={styles.headerTitle}>
            <span className={styles.primaryColor}>수수료 평생혜택</span> 제공
          </div>

          {/* 카드 섹션 */}
          <div className={styles.cardContainer}>
            <div className={styles.cardImageContainer}>
              <img className={styles.cardImage} src={HeaderCard} alt="온라인 수수료 평생 무료 혜택" />
            </div>
            <div className={styles.cardTitle}>
              온라인 국내주식 수수료<br />
              <span className={styles.primaryColor}>평생 혜택 </span>제공
            </div>

            {/* 설명 */}
            <ul className={styles.cardDesc}>
              <li>* 유관기관 제비용만 고객 부담(07.01 기준)</li>
              <li>- 코스피, 코스닥, 코넥스 : 0.00363960%</li>
              <li>- K-OTC : 0.09091870%</li>
              <li>- ETF, ETN, ELW : 0.00420870%</li>
              <li>* 온라인 채널 거래에 한함(증권플러스 제외)</li>
            </ul>
          </div>

          {/* 기간/대상 */}
          <div className={styles.infoContainer}>
            {events.map((event) => (
              <EventInfo title={event.title} text={event.text} />
            ))}
          </div>

          {/* 혜택받으러가기 버튼 */}
          <a href="https://open.shinhansec.com/m/event2/230701_feeEvent/event.jsp" rel="noreferrer" target="_blank">
            <div className={styles.applyButton}>수수료 평생혜택 받으러가기</div>
          </a>
        </section>

        {/* 아코디언 메뉴 */}
        <section className={styles.linkSection}>
          {/* 메뉴 1 */}
          <div>
            <AccordianListItem
              title={"투자에 필요한 더~ 많은 혜택"}
              onClick={onClickAccordion1}
              isOpen={openAccordion1}
            />

            <div className={`${styles.linkContentContainer} ${openAccordion1 ? styles.itemOpen : ""}`}>
              <LinkListItem
                subText={"수수료+환전우대 혜택까지"}
                text={"해외주식"}
                imageUrl={EventLogo1}
                linkUrl={"https://digitalshinhansec.com/global"}
              />
            </div>
          </div>

          {/* 메뉴 2 */}
          <div>
            <AccordianListItem
              title={"쉽고 빠른 투자 정보"}
              onClick={onClickAccordion2}
              isOpen={openAccordion2}
            />

            <div className={`${styles.linkContentContainer} ${openAccordion2 ? styles.itemOpen : ""}`}>
              <LinkListItem
                subText={"쉽게 이해되는 투자 콘텐츠가 가득!"}
                text={"<알파TV> 구독하기"}
                imageUrl={EventLogo2}
                linkUrl={"https://www.youtube.com/@shinhansecurities"}
              />
              <LinkListItem
                subText={"한발 빠르게 만나보는 투자 콘텐츠!"}
                text={"카카오톡 채널 추가하기"}
                imageUrl={EventLogo3}
                linkUrl={"https://pf.kakao.com/_xdnLFd"}
              />
            </div>
          </div>
        </section>

        {/* 이벤트 유의사항 */}
        <section className={styles.noticeSction}>
          <h4 className={styles.noticeTitle}>※ 이벤트 유의사항</h4>
          <ul className={styles.noticeText}>
            <li>
              기간 내 대상 고객이 이벤트를 신청해야 혜택이 적용되며, 신청 시점
              이후 체결된 거래에 한해 수수료 혜택이 적용됩니다.
            </li>
            <li>
              본 이벤트 생애 첫 계좌 개설 신규 고객 조건은 2023.07.01(토) 이전에
              당사에서 개설한 계좌가 없는 고객(IRP, DB, DC 계좌 제외) 입니다.
            </li>
            <li>
              이벤트 대상 계좌는 ① 비대면 증권종합계좌(신한알파, 모바일 홈페이지,
              신한플러스에서 개설한 계좌 한정), ②은행제휴 S-Lite 한정입니다.
              파운트 등 핀테크 제휴계좌는 제외됩니다.
            </li>
          </ul>

          <footer className={styles.footer}>
            서울특별시 영등포구 여의대로 70 (신한투자증권 타워) <br />
            대표이사 김상태 |사업자등록번호 116-81-36684 <br />
            ©2023 SHINHAN SECURITIES CO.,LTD.
          </footer>
        </section>
      </div>
    </>
  );
};

export default Home;