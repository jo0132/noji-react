import React from "react";
import { Link } from "react-router-dom";

const portText = [
  {
    portImg: "../assets/images/port/베르나르 베르베르01.png",
    iconImg: "../assets/images/member/peep-27-1.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=146610828",
    title: "고양이",
    desc: "베르나르 베르베르",
  },
  {
    portImg: "../assets/images/port/베르나르 베르베르02.png",
    iconImg: "../assets/images/member/peep-27-1.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=2253337",
    title: "파피용",
    desc: "베르나르 베르베르",
  },
  {
    portImg: "../assets/images/port/베르나르 베르베르03.png",
    iconImg: "../assets/images/member/peep-27-1.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=32136853",
    title: "제3인류",
    desc: "베르나르 베르베르",
  },
  {
    portImg: "../assets/images/port/베르나르 베르베르04.png",
    iconImg: "../assets/images/member/peep-27-1.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=294835271",
    title: "행성",
    desc: "베르나르 베르베르",
  },
  {
    portImg: "../assets/images/port/베르나르 베르베르05.png",
    iconImg: "../assets/images/member/peep-27-1.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=364908",
    title: "뇌",
    desc: "베르나르 베르베르",
  },
  {
    portImg: "../assets/images/port/베르나르 베르베르06.png",
    iconImg: "../assets/images/member/peep-27-1.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=293057",
    title: "아버지들의 아버지",
    desc: "베르나르 베르베르",
  },
  {
    portImg: "../assets/images/port/기욤뮈소01.png",
    iconImg: "../assets/images/member/peep-54.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=286922889",
    title: "당신거기 있어줄래요?",
    desc: "기욤 뮈소",
  },
  {
    portImg: "../assets/images/port/기욤뮈소02.png",
    iconImg: "../assets/images/member/peep-54.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=286920811",
    title: "구해줘",
    desc: "기욤 뮈소",
  },
  {
    portImg: "../assets/images/port/기욤뮈소03.png",
    iconImg: "../assets/images/member/peep-54.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=286765514",
    title: "센 강의 이름모를 여인",
    desc: "기욤 뮈소",
  },
  {
    portImg: "../assets/images/port/기욤뮈소04.png",
    iconImg: "../assets/images/member/peep-54.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=317302949",
    title: "종이 여자",
    desc: "기욤 뮈소",
  },
  {
    portImg: "../assets/images/port/기욤뮈소05.png",
    iconImg: "../assets/images/member/peep-54.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=306367260",
    title: "안젤리크",
    desc: "기욤 뮈소",
  },
  {
    portImg: "../assets/images/port/기욤뮈소06.png",
    iconImg: "../assets/images/member/peep-54.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=216722228",
    title: "작가들의 비밀스러운 삶",
    desc: "기욤 뮈소",
  },
  {
    portImg: "../assets/images/port/jk롤링01.png",
    iconImg: "../assets/images/member/peep-101.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=226215686",
    title: "혼혈왕자",
    desc: "jk롤링",
  },
  {
    portImg: "../assets/images/port/jk롤링02.png",
    iconImg: "../assets/images/member/peep-101.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=215741930",
    title: "불의 잔",
    desc: "jk롤링",
  },
  {
    portImg: "../assets/images/port/jk롤링03.png",
    iconImg: "../assets/images/member/peep-101.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=215741756",
    title: "비밀의 방",
    desc: "jk롤링",
  },
  {
    portImg: "../assets/images/port/jk롤링04.png",
    iconImg: "../assets/images/member/peep-101.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=221588157",
    title: "불사조 기사단",
    desc: "jk롤링",
  },
  {
    portImg: "../assets/images/port/jk롤링05.png",
    iconImg: "../assets/images/member/peep-101.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=215739377",
    title: "마법사의 돌",
    desc: "jk롤링",
  },
  {
    portImg: "../assets/images/port/jk롤링06.png",
    iconImg: "../assets/images/member/peep-101.svg",
    url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=120343185",
    title: "저주받은 아이",
    desc: "jk롤링",
  },
];

function PortDesc({ portImg, iconImg, title, desc, url }) {
  return (
    <div className="port">
      <figure className="port__header">
        <Link to={url}>
          <img src={portImg} alt={title} />
        </Link>
      </figure>
      <div className="port__body">
        <div>
          <img src={iconImg} alt={desc} />
        </div>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

const PortCont = () => {
  return (
    <div className="port__cont container">
      {portText.map((text, index) => (
        <PortDesc
          key={index}
          portImg={text.portImg}
          iconImg={text.iconImg}
          title={text.title}
          desc={text.desc}
        />
      ))}
    </div>
  );
};
export default PortCont;
