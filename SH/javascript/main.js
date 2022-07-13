// const { data } = require("browserslist");

const datas = [
  {
    id: 1,
    name: "이승원",
    content: "수정사항 전달 드립니다. 이번이 정말 마지막입니다.",
  },
  { id: 2, name: "아이디어 콘서트", content: "모두 파이팅!" },
  {
    id: 3,
    name: "이승원, Grace Lin",
    content:
      "수정사항 전달 드립니다. 이번이 마지막이면 좋겠네요. 잘 부탁 드립니다. 자...",
  },
  { id: 4, name: "이승원", content: "수고 많으셨습니다!" },
  {
    id: 5,
    name: "플레이콘",
    content: "https://www.pinterest.co.kr/pin/435879451359/...",
  },
];

const $search_btn = document.querySelector("#search_btn");
const $serach_box_wrapper_hidden = document.querySelector(
  ".serach_box_wrapper_hidden"
);
const $search_box = document.querySelector(".search_box");
const $search_input = document.querySelector(".search_input");
const $search_cancel = document.querySelector(".search_cancel");
const $talk_list = document.querySelector(".talk_list");

const $noting_search_wrapper_hidden = document.querySelector(
  ".noting_search_wrapper_hidden"
);

const init = () => {
  datas.forEach((data) => {
    $talk_list.innerHTML += `
          <li>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/61/61387.png"
                alt="인물"
                width="100"
                height="100"
                class="profile-pic"
              />
              <div class="chat_info">
                <div class="chat_name">${data.name}</div>
                <div class="chat_message">
                  ${data.content}
                </div>
              </div>
            </a>
          </li>
          `;
  });
}; // 초기화 함수

const showNothing = () => {
  $talk_list.innerHTML = `<div class="noting_search_wrapper_hidden">
  <div class="nothing_search">
    <span class="iconify" data-icon="akar-icons:circle-alert"></span>
    <div>검색결과가 없습니다.</div>
    <div>다른 키워드로 검색해보세요.</div>
  </div>
</div>`;
}; // 검색결과가 없을 때 화면

const toggleSearchBtn = () => {
  $serach_box_wrapper_hidden.classList.toggle("hidden");
}; // 검색창 토글 함수

const searchSubmit = (event) => {
  event.preventDefault();
  $talk_list.innerHTML = ""; // 내용 초기화

  const values = []; // 데이터 값을 모두 넣을 배열
  const valueDatas = []; // 검색을 위한 데이터 배열

  datas.forEach((data) => {
    const value = Object.values(data);
    values.push(value);
  }); //data의 object 값을 values에 모두 저장

  values.forEach((value) => {
    const newValue = {
      id: value[0],
      words: value[1].toString() + " " + value[2].toString(),
    }; // 검색을 위한 데이터 제작
    valueDatas.push(newValue);
  }); // 검색 데이터 제작 완료 후 valueDatas에 모두 저장

  valueDatas.forEach((valueData) => {
    if (valueData.words.includes($search_input.value)) {
      datas.forEach((data) => {
        if (data.id === valueData.id) {
          $talk_list.innerHTML += `
          <li>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/61/61387.png"
                alt="인물"
                width="100"
                height="100"
                class="profile-pic"
              />
              <div class="chat_info">
                <div class="chat_name">${data.name}</div>
                <div class="chat_message">
                  ${data.content}
                </div>
              </div>
            </a>
          </li>
          `;
        } // 같은 아이디값이 있다면 보여준다.
      });
    }
  }); // 저장된 데이터와 input의 값을 비교해서 input을 포함하고 있는 메세지들을 가져온다.

  if ($talk_list.innerHTML === "") {
    showNothing();
  } // 내용에 아무것도 없다면 showNoting() 함수 실행
}; // 검색 기능

init(); // 데이터 초기화

// 검색창 토글 적용
$search_btn.addEventListener("click", toggleSearchBtn);
$search_cancel.addEventListener("click", toggleSearchBtn);

//검색 기능 적용
$search_box.addEventListener("submit", searchSubmit);
