function echo() {
  const inputTxt = document.getElementById('inputTxt') //we seperate the dom
  const val = inputTxt.value //from the value

  const helloText = document.getElementById('helloText')
  helloText.innerHTML = val
}
