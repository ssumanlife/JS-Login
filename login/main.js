const btn = document.querySelector(".btn")
const loginId = document.querySelector(".idInput")
const password = document.querySelector(".passwordInput")

const infoList = {
  sumin: "1234",
  mango: "6789",
}

function login() {
  let a = loginId.value
  if (infoList[a] != undefined && infoList[a] != null) {
    if (infoList[a] === password.value) {
      alert(`환영합니다. ${loginId.value}님!`)
    } else {
      alert("비밀번호를 확인해주세요.")
    }
  } else {
    alert("아이디가 존재하지 않습니다.")
  }
}

// 데이터의 실행 순서에 맞게 HTML Button요소에 이벤트 핸들러 속성 추가
// btn.addEventListener("click", login())
