    //데이터는 객체 배열로 만들어서 불러오기
    const cards = [
        {
            idx:1,
            card_photo: '01.jpg',
            card_title: '보령머드축제',
            card_content: '2022.7.16~8.15',
        },
        {
            idx:2,
            card_photo: '02.jpg',
            card_title: '대구 치맥 페스티벌',
            card_content: '2022.7.6~7.10',
        },
        {
            idx:3,
            card_photo: '03.png',
            card_title: '디어마이광주',
            card_content: '2022.8.31~9.5',
        },
        {
            idx:4,
            card_photo: '04.jpg',
            card_title: '신촌 물총축제',
            card_content: '2022.7.30~7.31',
        },
        {
            idx:5,
            card_photo: '05.jpg',
            card_title: '인천 펜타포트 락 페스티벌',
            card_content: '2022.8.5~8.7',
        },
        {
            idx:6,
            card_photo: '06.jpg',
            card_title: ' 씨네코리아엑스포',
            card_content: '2022.10.6~10.8',
        },
        {
            idx:7,
            card_photo: '01.jpg',
            card_title: '보령머드축제',
            card_content: '2022.7.16~8.15',
        },
        {
            idx:8,
            card_photo: '02.jpg',
            card_title: '대구 치맥 페스티벌',
            card_content: '2022.7.6~7.10',
        },
        {
            idx:9,
            card_photo: '03.png',
            card_title: '디어마이광주',
            card_content: '2022.8.31~9.5',
        },
        {
            idx:10,
            card_photo: '04.jpg',
            card_title: '신촌 물총축제',
            card_content: '2022.7.30~7.31',
        },
        {
            idx:11,
            card_photo: '05.jpg',
            card_title: '인천 펜타포트 락 페스티벌',
            card_content: '2022.8.5~8.7',
        },
        {
            idx:12,
            card_photo: '06.jpg',
            card_title: ' 씨네코리아엑스포',
            card_content: '2022.10.6~10.8',
        },
    ]

    //카드 복사하기
    function showCards() {
        let cardList = document.querySelector('.cardwrap');
        cards.forEach(function (card) {
            let newCard = document.querySelector(".card_item[hidden]").cloneNode(true);
            newCard.querySelector(".card_photo").src = '../img/' + card.card_photo;
            newCard.querySelector(".card_title").innerHTML = card.card_title;
            newCard.querySelector(".card_content").innerHTML = card.card_content;
            newCard.hidden = false;
            cardList.appendChild(newCard);
        })
    }

    window.onload = showCards();

    //좋아요 누르면 빨간 하트로 바뀜
    const filledHeart = []
    const like = document.querySelectorAll(".heart_img")
    like.forEach((tag) => {
        tag.addEventListener("click", () => {
            tag.classList.toggle("on")
        })
    })
    
    //버튼 호버 애니메이션
    const linkBtn = document.querySelectorAll(".card_btn")
    linkBtn.forEach((a)=>{
        a.addEventListener("mouseover", ()=>{
        a.classList.add("btnAni")
        })
        a.addEventListener("mouseout", ()=>{
            a.classList.remove("btnAni")
        })
    })
    