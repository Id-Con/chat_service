const friends_lists = [
  { id: 1, name: "강준성" },
  { id: 2, name: "경식" },
  { id: 3, name: "경장수" },
  { id: 4, name: "권휘식" },
  { id: 5, name: "금봄" },
  { id: 6, name: "김상연" },
  { id: 7, name: "김남하" },
  { id: 8, name: "김민수" },
];

const $friends_list = document.querySelector(".friends_list");
const $search_box_form = document.querySelector(".search_box_form");
const $search_input = document.querySelector(".search_input");

const init = () => {
  friends_lists.forEach((friend) => {
    $friends_list.innerHTML += `<li>
    <a href="#">
      <img
        src="https://cdn-icons-png.flaticon.com/512/61/61387.png"
        alt="인물"
        width="50"
        height="50"
        class="profile-pic"
      />
      <div class="friend_name">${friend.name}</div>
      <input type="checkbox" name="friend" class="friend_checkbox" />
    </a>
  </li>`;
  });
}; //친구 목록 초기화

const searchFriends = (event) => {
  event.preventDefault();
  $friends_list.innerHTML = `<div class="friends_list_title">친구</div>`;
  friends_lists.forEach((friend) => {
    if (friend.name.includes($search_input.value)) {
      $friends_list.innerHTML += `<li>
      <a href="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/61/61387.png"
          alt="인물"
          width="50"
          height="50"
          class="profile-pic"
        />
        <div class="friend_name">${friend.name}</div>
        <input type="checkbox" name="friend" class="friend_checkbox" />
      </a>
    </li>`;
    }
  });
}; //친구 검색 기능

$search_box_form.addEventListener("submit", searchFriends);
init();
