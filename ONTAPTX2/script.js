function validateForm() {
    var name = window.document.myForm.fullname.value
    var password = window.document.myForm.password.value
    var confirmPassword = window.document.myForm.confirmPassword.value
    var phone = window.document.myForm.phone.value
    var regexName = /^[\w\W\s]+$/
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    var regexPhone = /^[\d\(\)\-]{10}+$/

    if (!regexName.test(name)) {
        alert("Họ và tên chỉ được chứa chữ cái và khoảng trắng.")
        return false
    }

    if (!regexPassword.test(password)) {
        alert("Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt, 1 chữ số và có tối thiểu 8 ký tự.")
        return false
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp.")
        return false
    }

    if (!regexPhone.test(phone)) {
        alert("Số điện thoại chỉ được chứa chữ số và các ký tự ( )-.")
        return false
    }

    return true
}