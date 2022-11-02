const userid = document.querySelector("#userid");
const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const fullname = document.querySelector("#username");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const address = document.querySelector("#address-button");
const submitButton = document.querySelector("#submit_button");
let chkFlag = true;

submitButton.addEventListener("click", function (e) {
  let chkArray = [
    idConfirm(),
    pwd1Confirm(),
    pwd2Confirm(),
    fullnameConfirm(),
    emailConfirm(),
    telConfirm(),
  ];

  for (const chk of chkArray) {
    if (!chk) {
      chkFlag = false;
    }
  }

  if (chkFlag) {
    document.signup.submit();
  }
});

function idConfirm() {
  const mustId = document.querySelector(".must_id");
  const overlap = document.querySelector(".overlap");

  mustId.style.display = "none";
  overlap.style.display = "none";

  console.log(userid.value);
  const test = 0;

  if (!userid.value.replace(/ /g, "")) {
    mustId.style.display = "block";
    return false;
  } else {
    if (!idCheck(userid.value.replace(/ /g, ""))) {
      overlap.style.display = "block";
      return false;
    }
  }
  return true;
}

function pwd1Confirm() {
  const mustPwd1 = document.querySelector(".must_pwd1");
  const regPwd = document.querySelector(".reg_pwd");

  mustPwd1.style.display = "none";
  regPwd.style.display = "none";

  if (!pwd1.value.replace(/ /g, "")) {
    mustPwd1.style.display = "block";
    return false;
  } else {
    if (!pwdCheck(pwd1.value.replace(/ /g, ""))) {
      regPwd.style.display = "block";
      return false;
    }
  }
  return true;
}

function pwd2Confirm() {
  const mustPwd2 = document.querySelector(".must_pwd2");
  const same = document.querySelector(".same");

  mustPwd2.style.display = "none";
  same.style.display = "none";

  if (pwd2.value.replace(/ /g, "") === "") {
    mustPwd2.style.display = "block";
    return false;
  } else {
    if (pwd1.value.replace(/ /g, "") && pwd2.value.replace(/ /g, "")) {
      if (pwd1.value.replace(/ /g, "") !== pwd2.value.replace(/ /g, "")) {
        same.style.display = "block";
        return false;
      }
    }
  }
  return true;
}

function fullnameConfirm() {
  const mustFullname = document.querySelector(".must_fullname");
  mustFullname.style.display = "none";

  console.log(username.value);
  const test = 0;

  if (!username.value.replace(/ /g, "")) {
    mustFullname.style.display = "block";
    return false;
  }
  return true;
}

function emailConfirm() {
  const mustEmail = document.querySelector(".must_email");
  const regEmail = document.querySelector(".reg_email");

  mustEmail.style.display = "none";
  regEmail.style.display = "none";

  if (!email.value.replace(/ /g, "")) {
    mustEmail.style.display = "block";
    return false;
  } else {
    if (!emailCheck(email.value.replace(/ /g, ""))) {
      regEmail.style.display = "block";
      return false;
    }
  }
  return true;
}

function telConfirm() {
  const mustTel = document.querySelector(".must_tel");
  const regTel = document.querySelector(".reg_tel");
  mustTel.style.display = "none";
  regTel.style.display = "none";

  if (!tel.value.replace(/ /g, "")) {
    mustTel.style.display = "block";
    return false;
  } else {
    if (!telCheck(tel.value.replace(/ /g, "")) && tel.value.replace(/ /g, "")) {
      regTel.style.display = "block";
      return false;
    }
    return true;
  }
}

function idCheck(id) {
  return true;
}

function pwdCheck(pwd) {
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd);
}

function telCheck(tel) {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return reg.test(tel);
}

function emailCheck(email) {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
}

/* function idConfirm() {
  var useridText = userid.value;
  var re = /^(?=.*[a-z])(?=.*\d)[^]{6,16}$/;
  var result = re.test(useridText);
  if (!result) {
    overlap.style.display = "block";
    return false;
  }
} */
