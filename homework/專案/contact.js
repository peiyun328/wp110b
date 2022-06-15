var submitBtn = document.querySelector('.submit')

//提交函式
function submitheck() {
  var nameStr = document.querySelector('.name').value
  var emailStr = document.querySelector('.email').value
  var passwordStr = document.querySelector('.password').value
  var account = {} //輸入的資料，填入空物件
  account.nameStr = nameStr //填入的姓名
  account.email = emailStr //填入的 email
  account.password = passwordStr //填入的密碼

  var sub = new XMLHttpRequest()
  sub.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true)
  sub.setRequestHeader('Content-type', 'application/json')
  var data = JSON.stringify(account)
  sub.send(data)
  sub.onload = function () {
    alert("提交成功")
  }
}
submitBtn.addEventListener('click', submitheck, false)
