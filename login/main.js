const btn = document.querySelector(".btn")
const loginId = document.querySelector(".userID")
const password = document.querySelector(".userPW")

const infoList = {
  sumin: "1234",
  mango: "6789",
  apple: "000000",
}

function login() {
  let userId = loginId.value
  if (infoList[userId] != undefined && infoList[userId] != null) {
    if (infoList[userId] === password.value) {
      alert(`환영합니다. ${userId}님!`)
    } else {
      alert("비밀번호를 확인해주세요.")
    }
  } else {
    alert("아이디가 존재하지 않습니다.")
  }
}

btn.addEventListener("click", login)
