const btn = document.querySelector(".btn")
const loginId = document.querySelector(".idInput")
const password = document.querySelector(".passwordInput")

const infoList = {
  sumin: "1234",
  mango: "6789",
  apple: "000000",
}

function login() {
  if (infoList[loginId.value] != undefined && infoList[loginId.value] != null) {
    if (infoList[loginId.value] === password.value) {
      alert(`환영합니다. ${loginId.value}님!`)
    } else {
      alert("비밀번호를 확인해주세요.")
    }
  } else {
    alert("아이디가 존재하지 않습니다.")
  }
}

btn.addEventListener("click", login)
