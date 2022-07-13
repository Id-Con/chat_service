let $search_talk = document.querySelector('.search_talk');
let $search_talk_2 = document.querySelector('.search_talk_2');
let $search_hidden = document.querySelector('#search_hidden');
let $input_value = document.querySelector('.input_value');
let $showlist = document.querySelector('.showlist');


fetch('./db/chatroom.json').then(res=>res.json()).then((data)=>{
    let makeList = (name,time,content,unread) => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add("row","section");
        let leftDiv = document.createElement('div');
        leftDiv.classList.add("col-3");
        let chatImgDiv = document.createElement('div');
        chatImgDiv.classList.add("chatroom_img");
        /*db에 이미지추가해서 나중에 이미지도 넣어야함*/
        leftDiv.appendChild(chatImgDiv);
        let rightDiv = document.createElement('div');
        rightDiv.classList.add("col-9","chatroom_right")
        let rightDiv_right = document.createElement('div');
        let nameP = document.createElement('p');
        nameP.classList.add('title');
        nameP.innerText = `${name}`;
        let timeP = document.createElement('p');
        timeP.classList.add('time');
        let timeWording = ``;
        time.trim().split(':')[0].split(` `)[1]< 12 ? timeWording += `오전 ${time.trim().split(':')[0].split(` `)[1]}:${time.trim().split(':')[1]}` : timeWording += `오후 ${Number(time.trim().split(':')[0].split(` `)[1])-12}:${time.trim().split(':')[1]}`;
        timeP.innerText = `${timeWording}`;
        rightDiv_right.appendChild(nameP);
        rightDiv_right.appendChild(timeP);
        let contentP = document.createElement('p');
        contentP.classList.add('content');
        contentP.innerText = `${content}`;
        let unreadDiv = document.createElement('div');
        unreadDiv.classList.add('preview');
        unreadDiv.innerText = `${unread}`;
        rightDiv.appendChild(rightDiv_right);
        rightDiv.appendChild(contentP);
        rightDiv.appendChild(unreadDiv);
        mainDiv.appendChild(leftDiv);
        mainDiv.appendChild(rightDiv);
        $showlist.appendChild(mainDiv);
    }

    /* DB정보 로딩 후 배열에 저장 */
    let datalist = Array.from(Array(data.length),()=>Array(5).fill(null));
    for(let i=0; i<data.length; i++){
        datalist[i][0] = data[i].name;
        datalist[i][1] = data[i].time;
        datalist[i][2] = data[i].content;
        datalist[i][3] = data[i].unread;
        datalist[i][4] = data[i].image;
    }
    console.log(datalist.sort((a,b)=>new Date(b[1])-new Date(a[1])));

    /*채팅리스트 생성*/
    for(let i=0; i<datalist.length; i++){
        makeList(datalist[i][0],datalist[i][1],datalist[i][2],datalist[i][3]);
    }

    /* 간단한 on/off 기능 */
    $search_talk.addEventListener('click',function(){
        $search_talk_2.style.display = "flex";
    
    })
    $search_hidden.addEventListener('click',function(){
        $search_talk_2.style.display = "none";
        console.log($input_value.value);
        $input_value.value = ``;
        let $title = document.querySelectorAll('.title');
        for(let i=0; i<datalist.length; i++){
            $title[i].parentNode.parentNode.parentNode.style.display = 'flex'
        }
    })
    
    /* window keydownEvent */
    window.addEventListener('keydown', function(){
        setTimeout(()=>{
            let $title = document.querySelectorAll('.title');
            // let $time = document.querySelectorAll('.time');
            // let $content = document.querySelectorAll('.content');
            // console.log($input_value.value);
            for(let i=0; i<datalist.length; i++){
                datalist[i][0].includes($input_value.value) ? $title[i].parentNode.parentNode.parentNode.style.display = 'flex' : datalist[i][2].includes($input_value.value) ? $title[i].parentNode.parentNode.parentNode.style.display = 'flex' : $title[i].parentNode.parentNode.parentNode.style.display = 'none'
            }
        },100)
    })
});