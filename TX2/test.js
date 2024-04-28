const fomatName = (name) => {
    let fullName = String(name).replace(/\s+/g, " ").toLowerCase().trim();
    fullName = fullName.replace(/\b\w/g, upperFullName = (fullName) => {
        return String(fullName).toUpperCase();
    });
    return fullName;
}

const checkEmail = (email) => {
    let re = /[a-zA-Z0-9]{4,}@[a-zA-Z]{2,}(\.[a-zA-Z]{2,})+/g;
    return re.test(email);
}

const checkPhoneNumber = (phoneNumber) => {
    let re = /^\(\d{4}(-\d{3}){2}\)$|\d{10}/g;
    return re.test(phoneNumber);
}

const checkUserName = (userName) => {
    let re = /[\w\W]{8,}/g;
    return re.test(userName);
}

const checkKey = (key) => {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,}$/g;
    return re.test(key);
}
const checkReKey = (key, reKey) => {
    return (key === reKey);
}

document.getElementById("fullName").onchange = function () {
    document.getElementById("fullName").value = fomatName(document.getElementById("fullName").value);
}
//Main 
document.getElementById("submit").onclick = function () {
    let check = false;
    let fullName = document.getElementById("fullName");
    let yearBorn = document.getElementById("yearBorn");
    let gender = document.getElementById("gender");
    let email = document.getElementById("email");
    let phoneNumber = document.getElementById("phoneNumber");
    let userName = document.getElementById("userName");
    let key = document.getElementById("key");
    let reKey = document.getElementById("reKey");

    if (fullName.value == "") {
        document.getElementById("fullNameFail").innerHTML = "Vui lòng nhập họ tên!";
        check = false;
    } else {
        check = true;
    }

    if (yearBorn.value == "") {
        document.getElementById("yearBornFail").innerHTML = "Vui lòng chọn năm sinh!";
    }
    else {
        document.getElementById("yearBornFail").innerHTML = " ";
    }

    let checkGender = false;
    if (checkGender == false) {
        document.getElementById("genderFail").innerHTML = "Vui lòng chọn giới tính!";
    }
    document.getElementById("male").onclick = function () {
        checkGender = true;
        document.getElementById("genderFail").innerHTML = " ";
    }
    document.getElementById("female").onclick = function () {
        checkGender = true;
        document.getElementById("genderFail").innerHTML = " ";
    }

    if (email.value == "") {
        document.getElementById("emailFail").innerHTML = "Vui lòng nhập email!";
        check = false;
    }
    else if (!checkEmail(email.value)) {
        document.getElementById("emailFail").innerHTML = "Email không hợp lệ!";
        check = false;
    } else {
        document.getElementById("emailFail").innerHTML = " ";
        check = true;
    }

    if (phoneNumber.value == "") {
        document.getElementById("phoneNumberFail").innerHTML = "Vui lòng nhập số điện thoại!";
        check = false;
    }
    else if (!checkPhoneNumber(phoneNumber.value)) {
        document.getElementById("phoneNumberFail").innerHTML = "Số điện thoại không hợp lệ!";
        check = false;
    } else {
        document.getElementById("phoneNumberFail").innerHTML = " ";
        check = true;
    }

    if (userName.value == "") {
        document.getElementById("userNameFail").innerHTML = "Vui lòng nhập tên đăng nhập!";
        check = false;
    } else if (!checkUserName(userName.value)) {
        document.getElementById("userNameFail").innerHTML = "Tên đăng nhập cần 8 ký tự trở lên!";
        check = false;
    } else {
        document.getElementById("userNameFail").innerHTML = " ";
        check = true;
    }

    if (key.value == "") {
        document.getElementById("keyFail").innerHTML = "Vui lòng nhập mật khẩu!";
        check = false;
    }
    else if (!checkKey(key.value)) {
        document.getElementById("keyFail").innerHTML = "Mật khẩu cần ít nhất 8 ký tự gồm ký tự đặc biệt, số, chữ hoa, chữ thường.";
        check = false;
    } else {
        document.getElementById("keyFail").innerHTML = " ";
        check = true;

    }

    if (reKey.value == "") {
        document.getElementById("reKeyFail").innerHTML = "Vui lòng nhập lại mật khẩu!";
        check = false;
    }
    else if (!checkReKey(key.value, reKey.value)) {
        document.getElementById("reKeyFail").innerHTML = "Mật khẩu không khớp. Vui lòng nhập lại!";
        check = false;
    }
    else {
        document.getElementById("reKeyFail").innerHTML = " ";
        check = true;
    }

    if (check) {
        document.getElementById("submit").type = "submit";
        alert("Đã đăng ký thành công");
    } else {
        document.getElementById("submit").type = "button";
    }
}
