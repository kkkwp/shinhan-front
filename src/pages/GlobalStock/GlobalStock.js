import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GlobalStock.module.css";
import HeaderCard from "../../assets/images/header_1.svg";
import EventLogo1 from "../../assets/images/event_logo_1.png";
import EventInfo from "../../components/EventInfo/EventInfo";
import AccordianListItem from "../../components/AccordianListItem/AccordianListItem";
import LinkListItem from "../../components/LinkListItem/LinkListItem";
import TopNav from "../../components/TopNav/TopNav";
import EventCard from "../../components/EventCard/EventCard";

const events = [
  { num: 1, title: "기간", text: "2023.07.01(토) ~ 2023.12.31(일)" },
  { num: 3, title: "대상", text: "신한투자증권 생애 첫 계좌 개설 신규 고객" },
];

const eventCards = [
  {
    cardImage: HeaderCard,
    title: (
      <>
        온라인 국내주식 수수료
        <br />
        <span className={styles.primaryColor}>평생 혜택 </span>제공
      </>
    ),
    list: [
      "* 유관기관 제비용만 고객 부담(07.01 기준)",
      "- 코스피, 코스닥, 코넥스 : 0.00363960%",
      "- K-OTC : 0.09091870%",
      "- ETF, ETN, ELW : 0.00420870%",

      "* 온라인 채널 거래에 한함(증권플러스 제외)",
    ],
  },
  { num: 3, title: "대상", text: "신한투자증권 생애 첫 계좌 개설 신규 고객" },
];

const GlobalStock = () => {
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
          <div className={styles.headerSubTitle}>지금이 일본 투자할 타이밍</div>
          <div className={styles.headerTitle}>
            <span className={styles.primaryColor}>수수료 + 환전우대 혜택!</span>
          </div>

          {/* 카드 섹션 */}
          <EventCard event={eventCards[0]} />

          {/* 기간/대상 */}
          <div className={styles.infoContainer}>
            {events.map((event) => (
              <EventInfo title={event.title} text={event.text} />
            ))}
          </div>

          {/* 혜택받으러가기 버튼 */}
          <a>
            <div className={styles.applyButton}>수수료 평생혜택 받으러가기</div>
          </a>
        </section>

        {/* 아코디언 메뉴  */}
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
          <AccordianListItem
            title={"쉽고 빠른 투자 정보"}
            onClick={onClickAccordion2}
            isOpen={openAccordion2}
          />
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
              이벤트 대상 계좌는 ① 비대면 증권종합계좌(신한알파, 모바일
              홈페이지, 신한플러스에서 개설한 계좌 한정), ②은행제휴 S-Lite
              한정입니다. 파운트 등 핀테크 제휴계좌는 제외됩니다.
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

export default GlobalStock;