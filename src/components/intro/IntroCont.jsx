import React from "react";
import { Link } from "react-router-dom";

function IntroCont() {
  return (
    <div className="intro__cont container">
      <div className="intro__cont__inner right">
        <div className="introPage_desc right_text">
          <h4 className="intro__text__title Rebecca">
            장르와
            <br />
            관심사 파악
          </h4>
          <p className="intro__text__desc SeoulHangang3">
            자신이 선호하는 장르나 관심사를 고려하여 독서목록을 작성해 보세요.
            이를 통해 원하는 주제나 스타일의 소설을 찾을 수 있습니다.
          </p>
          <Link
            className="Rebecca"
            to="https://www.yes24.com/main/default.aspx"
          >
            찾아보기
          </Link>
        </div>
        <div className="introPage_img">
          <img
            className="intro__text__img"
            src="./assets/images/intro/intro_img01.jpg"
            alt="인트로 이미지1"
          />
        </div>
      </div>
      <div className="intro__cont__inner left">
        <div className="introPage_desc">
          <h4 className="intro__text__title Rebecca">
            베스트셀러
            <br />
            목록 확인
          </h4>
          <p className="intro__text__desc SeoulHangang3">
            베스트셀러 목록은 대중적인 인기를 얻은 소설들을 포함하고 있습니다.
            출판사나 온라인 서점의 베스트셀러 목록을 확인해보면 다양한 장르와
            주제의 인기 작품을 찾을 수 있습니다.
          </p>
          <Link
            className="Rebecca"
            to="https://www.yes24.com/main/default.aspx"
          >
            찾아보기
          </Link>
        </div>
        <div className="introPage_img">
          <img
            className="intro__text__img"
            src="./assets/images/intro/intro_img02.jpg"
            alt="인트로 이미지2"
          />
        </div>
      </div>
      <div className="intro__cont__inner right">
        <div className="introPage_desc right_text">
          <h4 className="intro__text__title Rebecca">
            작가의
            <br />
            다른 작품 탐색
          </h4>
          <p className="intro__text__desc SeoulHangang3">
            이미 좋아하는 작가의 다른 작품을 찾아보세요. 작가의 스타일이나
            이야기 구성에 대한 선호도가 유사할 가능성이 큽니다.
          </p>
          <Link
            className="Rebecca"
            to="https://www.yes24.com/main/default.aspx"
          >
            찾아보기
          </Link>
        </div>
        <div className="introPage_img">
          <img
            className="intro__text__img"
            src="./assets/images/intro/intro_img03.jpg"
            alt="인트로 이미지3"
          />
        </div>
      </div>
      <div className="intro__cont__inner left">
        <div className="introPage_desc">
          <h4 className="intro__text__title Rebecca">도서관 방문</h4>
          <p className="intro__text__desc SeoulHangang3">
            도서관은 다양한 작품을 무료로 대여할 수 있는 좋은 장소입니다.
            도서관의 추천 도서나 독서 행사를 확인하여 다양한 소설을 만나보세요.
          </p>
          <Link
            className="Rebecca"
            to="https://www.yes24.com/main/default.aspx"
          >
            찾아보기
          </Link>
        </div>
        <div className="introPage_img">
          <img
            className="intro__text__img"
            src="./assets/images/intro/intro_img04.jpg"
            alt="인트로 이미지4"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroCont;
