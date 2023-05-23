const number = Number(prompt("몇 명이 참가하나요?")); //값 입력받아 변수에 저장, Number를 이용해 String을 Number로 변환.
//querySelector를 이용해서 html태그 선택
const btn = document.querySelector("button");
const input = document.querySelector("input");
const word = document.querySelector("#word");
const $order = document.querySelector("#order");
let originWord; //제시어
let newWord; //현재 단어

//button 클릭하면 작동하는 함수
const onClickBtn = () => {
  if (!originWord || originWord[originWord.length - 1] === newWord[0]) {
    //제시어가 비어 있거나 입력한 단어가 올바를 경우
    originWord = newWord; //입력한 단어가 제시어가 됨
    word.textContent = originWord; //id가 word인 span에 제시어 표시
    const order = Number($order.textContent); //id가 order인 span의 textContent를 Number를 이용해 String을 Number로 변환히야 변수에 저장
    if (order + 1 > number) {
      //order + 1이 처음에 설정한 number보다 큰 경우
      $order.textContent = 1; //id가 order인 span의 textContent를 "1"로 설정
    } else if (input.value === "") {
      //input에 아무것도 입력하지 않았을 경우
      alert("단어를 입력해주세요."); //알림창 생성
    } else {
      //order + 1이 처음에 설정한 number보다 작거나 같고 입력창에 올바르게 입력했을 경우
      $order.textContent = order + 1; //id가 order인 span의 textContent를 order + 1로 변경
    }
    input.value = ""; //입력 버튼을 누르면 input 태그에 입력한 단어를 지워줌
    input.focus(); //입력 버튼을 누르고 나서 input 태그에 자동으로 포커싱해줌
  } else {
    if (input.value === "") {
      //input에 아무것도 입력하지 않았을 경우
      alert("단어를 입력해주세요."); //알림창 생성
      return input.focus(); //입력창에 커서를 두고 return 해줌
    }
    //입력한 단어가 올바르지 않거나 아무것도 입력하지 않았을 경우
    alert("올바르지 않습니다."); //알림창 생성
    input.value = ""; //입력 버튼을 누르면 input 태그에 입력한 단어를 지워줌
    input.focus(); //입력 버튼을 누르고 나서 input 태그에 자동으로 포커싱해줌
  }
};

//input에 입력하면 작동하는 함수
const onInput = (event) => {
  newWord = event.target.value; //입력하는 단어를 현재 단어로 넣어줌
};

//addEventListener(JS가 HTML에서 발생하는 이벤트를 감지할 수 있게 함)를 이용해 이벤트 발생 시 실행할 함수 작성 및 태그 연결
btn.addEventListener("click", onClickBtn); //click 이벤트 감지
input.addEventListener("input", onInput); //input 이벤트 감지
