import md5 from "md5"

function signUpForm(evt) {
  evt.preventDefault();

  let data = new FormData(evt.target);

  data.set('password', md5(data.get('password')));
  data.delete('password-rep');

  fetch(evt.target.action, {
    method: evt.target.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(data.entries()))
  }).then((response) => {
    return response.text();
  }).then((text) => {
    console.log(text);
  })
}

export {
  signUpForm
}