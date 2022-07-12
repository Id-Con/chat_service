const $search_btn = document.querySelector("#search_btn");
const $serach_box_wrapper_hidden = document.querySelector(
  ".serach_box_wrapper_hidden"
);
const $search_cancel = document.querySelector(".search_cancel");

const toggleSearchBtn = () => {
  $serach_box_wrapper_hidden.classList.toggle("hidden");
};

$search_btn.addEventListener("click", toggleSearchBtn);
$search_cancel.addEventListener("click", toggleSearchBtn);
