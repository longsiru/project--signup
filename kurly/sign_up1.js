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
    selectConfirm(),
    submitBtnConfirm(),
    selectAConfirm(),
    selectBConfirm(),
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
  if (id.length < 6) {
    return false;
  } else if (id.length > 17) {
    return false;
  }
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

// 전체동의 checkbox
const allSelect = document.querySelector(".all_select input");
const itemsSelect = document.querySelectorAll(".items_select input");

allSelect.addEventListener("click", function () {
  const type = allSelect.checked;
  console.log(type);

  itemsSelect.forEach(function (items) {
    items.checked = type;
  });
});

itemsSelect.forEach(function (items) {
  items.addEventListener("click", function () {
    const flag = true;
    //  switch 설정
    itemsSelect.forEach(function (items) {
      if (items.checked === false)
        //  input select 상태 판단.
        return (flag = false);
    });
    return (allSelect.checked = flag);
  });
});

const termsAppoint = document.querySelector(".items_select  a");
termsAppoint.addEventListener("click", () => {
  alert("이용약관(필수)");
});

//주소
function getPost() {
  new daum.Postcode({
    oncomplete: function (data) {
      console.log(data);
      // const contentBnt = document.querySelector(".list_content_bnt");
      const mustZip = document.querySelector(".must_zip_no");
      const mustPres = document.querySelector(".must_pres_adre");
      mustZip.style.display = "block";
      mustPres.style.display = "block";
      // contentBnt.style.display = "none";
      jusoInput(data.zonecode, data.address);
    },
  }).open();
}

function jusoInput(zonecode, address) {
  document.querySelector(".must_zip_no").value = zonecode;
  document.querySelector(".must_pres_adre").value = address;
  /* if (addrDetail.length > 30) {
    alert("상세주소가 너무 길어 다시 입력해야 합니다.");
    return;
  }
  document.querySelector(".must_detai_adre").value = addrDetail; */
}

//주소 필수
const submitBtn = document.querySelector("#address_button");
function submitBtnConfirm() {
  const mustAdre = document.querySelector(".must_adre");
  mustAdre.style.display = "none";
  if (address_button.onclick) {
    mustAdre.style.display = "block";
    return false;
  }
  return true;
}

const Select = document.querySelector("#requ_Termsall_1");
function selectConfirm() {
  const mustselectMust = document.querySelector(".must_sele");
  // console.log("here111", mustelectMust);
  mustselectMust.style.display = "none";
  // console.log("here", mustelectMust.checked);
  if (!mustselectMust.checked) {
    mustselectMust.style.display = "block";
    return false;
  }
  return true;
}

const SelectA = document.querySelector("#requ_Termsall_2");
function selectAConfirm() {
  const mustAselectMust = document.querySelector(".must_selea");
  // console.log("here111", mustAselectMust);
  mustAselectMust.style.display = "none";
  // console.log("here", mustAselectMust.style.display);
  if (!mustAselectMust.checked) {
    mustAselectMust.style.display = "block";
    return false;
  }
  return true;
}

const SelectB = document.querySelector("#requ_Termsall_5");
function selectBConfirm() {
  const mustBselectMust = document.querySelector(".must_seleb");
  // console.log("here111", mustAselectMust);
  mustBselectMust.style.display = "none";
  // console.log("here", mustAselectMust.style.display);
  if (!mustBselectMust.checked) {
    mustBselectMust.style.display = "block";
    return false;
  }
  return true;
}
