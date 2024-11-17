const scriptURL = 'https://script.google.com/macros/s/AKfycbxE4FChOqESSGG6DZkPZDBTYD5GT5FbJ9lqRhzYAG5hCcY63InWRw1llFeSmnd4g1Fllw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})