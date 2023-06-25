import React from "react";

const Portfolio = (props) => {
  return (
    <section id="portSection" className={props.attr}>
      <h3>한국인이 좋아하는 외국소설</h3>
      <p>그동안 한국인들이 좋아하는 외국 소설입니다.</p>
      <div className="port__inner container">
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/기욤뮈소01.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>당신거기 있어줄래요?</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/기욤뮈소02.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>구해줘</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/기욤뮈소03.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>센 강의 이름모를 여인</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/기욤뮈소04.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>종이 여자</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/기욤뮈소05.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>안젤리크</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/기욤뮈소06.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>작가들의 비밀스러운 삶</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
