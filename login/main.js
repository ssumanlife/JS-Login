const btn = document.querySelector(".btn")
const loginId = document.querySelector(".idInput")
const password = document.querySelector(".passwordInput")

const infoList = {
  sumin: "1234",
  mango: "6789",
  apple: "000000",
}

function login() {
  // const loginId = document.querySelector(".idInput")
  // const password = document.querySelector(".passwordInput")

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

// js파일이 읽혀내려가는 순간 login()가 실행되는 것을 막기위해 콜백함수를 핸들러로 적용
// 콜백함수는 특정한 실행 위치를 보장해주는 용도로 활용!!
btn.addEventListener("click", () => login())
