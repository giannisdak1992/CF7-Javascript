$(function () {
  let debounceTimeout = null
  $('#searchInput').on('input', function () {
    clearTimeout(debounceTimeout) //
    debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500) //this -> #searchInput
  })

  $('#showMore').on('click', function (e) {
    e.preventDefault()
    onShowMoreClicked()
  })
})
