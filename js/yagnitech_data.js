const scriptURL = 'https://script.google.com/macros/s/AKfycbz5PjFhjNUndD1E4fCDfsmZtTOFol4Z_7vq-Xk5jLszFp8RVLY/exec'
const form = document.forms['submit-to-google-sheet']

const scriptURL1 = 'https://script.google.com/macros/s/AKfycbyKnZ31TPEQCWUyKiVeoYdBYuDfuJYHMDAwF8rClwIwL0jOPtQ/exec'
const form1 = document.forms['subscribe']

form.addEventListener('submit', function(e) {
  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(function(response) {
    submit();
  }).catch(function(error) { console.log(error) })
})

form1.addEventListener('submit', function(e) {
  e.preventDefault()

  fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
  .then(function(response) {
    submit1();
  }).catch(function(error) { console.log(error) })
})

function submit() {
  document.forms['submit-to-google-sheet'].reset();
}

function submit1() {
  document.forms['subscribe'].reset();
}

