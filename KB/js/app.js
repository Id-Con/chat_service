<<<<<<< HEAD
fetch('')







=======
>>>>>>> e5b24ee1a1d3023811ea07814745ac8fbd5e8edf
let $search_talk = document.querySelector('.search_talk');
let $search_talk_2 = document.querySelector('.search_talk_2');
let $search_hidden = document.querySelector('#search_hidden');
let $chatlist = document.querySelector('#chatlist');
let $ymdi = document.querySelector('.ymdi');
let $title = document.querySelectorAll('.title');
let $time = document.querySelectorAll('.time');
let $content = document.querySelectorAll('.time');
<<<<<<< HEAD
let $showlist = document.querySelector('.showlist')


// for(let i=0; i<$title.length; i++){
//     console.log(`본문 : ${$title[i].innerText}, 시간 : ${$time[i].innerText}`);
// }

/* 차후 db데이터로 변경 */
let datalist = [];
for(let i=0; i<$chatlist.childNodes.length; i++){
    chatlist.childNodes[i].value !== undefined ? datalist.push(chatlist.childNodes[i].value) : i
}


$search_talk.addEventListener('click',function(){
    $search_talk_2.style.display = "flex";

=======

$search_talk.addEventListener('click',function(){
    $search_talk_2.style.display = "flex";
>>>>>>> e5b24ee1a1d3023811ea07814745ac8fbd5e8edf
})
$search_hidden.addEventListener('click',function(){
    $search_talk_2.style.display = "none";
    console.log($ymdi.value);
    $ymdi.value = ``;
<<<<<<< HEAD
    for(let i=0; i<datalist.length; i++){
        $title[i].parentNode.parentNode.parentNode.style.display = 'flex'
    }
=======
>>>>>>> e5b24ee1a1d3023811ea07814745ac8fbd5e8edf
})

window.addEventListener('keydown', e=> {
    setTimeout(()=>{
        console.log($ymdi.value);
<<<<<<< HEAD
        for(let i=0; i<datalist.length; i++){
            // console.log(`${datalist[i]}에 input값의 포함여부는 ${datalist[i].includes($ymdi.value)}`);
            datalist[i].includes($ymdi.value) ? $title[i].parentNode.parentNode.parentNode.style.display = 'flex' : $title[i].parentNode.parentNode.parentNode.style.display = 'none'
        }
    },100)
})
=======

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
>>>>>>> e5b24ee1a1d3023811ea07814745ac8fbd5e8edf
