let $search_talk = document.querySelector('.search_talk');
let $search_talk_2 = document.querySelector('.search_talk_2');
let $search_hidden = document.querySelector('#search_hidden');
let $chatlist = document.querySelector('#chatlist');
let $ymdi = document.querySelector('.ymdi');
let $title = document.querySelectorAll('.title');
let $time = document.querySelectorAll('.time');
let $content = document.querySelectorAll('.time');

$search_talk.addEventListener('click',function(){
    $search_talk_2.style.display = "flex";
})
$search_hidden.addEventListener('click',function(){
    $search_talk_2.style.display = "none";
    console.log($ymdi.value);
    $ymdi.value = ``;
})

window.addEventListener('keydown', e=> {
    setTimeout(()=>{
        console.log($ymdi.value);

    },100)
})

for(let i=0; i<$title.length; i++){
    console.log(`본문 : ${$title[i].innerText}, 시간 : ${$time[i].innerText}`);
}
console.log($chatlist.childNodes);


let datalist = [];
for(let i=0; i<$chatlist.childNodes.length; i++){
    chatlist.childNodes[i].value !== undefined ? datalist.push(chatlist.childNodes[i].value) : i
}
console.log(datalist)