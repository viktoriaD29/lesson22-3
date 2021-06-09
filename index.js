const checkElem = document.querySelector('.task-status');
function getCheck () {
  const checkboxElem = document.querySelector('checked');
  if (checkboxElem.value) {
    console.log(true)
  } else {
    console.log(false)
  }
}
checkElem.addEventListener('change', getCheck);