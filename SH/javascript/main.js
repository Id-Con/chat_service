const $search_btn = document.querySelector("#search_btn");
const $serach_box_wrapper_hidden = document.querySelector(
  ".serach_box_wrapper_hidden"
);
const $search_box = document.querySelector(".search_box");
const $search_input = document.querySelector(".search_input");
const $search_cancel = document.querySelector(".search_cancel");
const $talk_list = document.querySelector(".talk_list");

const toggleSearchBtn = () => {
  $serach_box_wrapper_hidden.classList.toggle("hidden");
}; // 검색창 토글 함수

const searchSubmit = (event) => {
  event.preventDefault();
  // console.log($search_input.value);
  console.dir($talk_list.innerHTML);
}; // 검색 기능

// 검색창 토글 적용
$search_btn.addEventListener("click", toggleSearchBtn);
$search_cancel.addEventListener("click", toggleSearchBtn);

//검색 기능 적용
$search_box.addEventListener("submit", searchSubmit);
