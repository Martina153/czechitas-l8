console.log('funguju');


const goodbye = (name) => {
	return 'S pozdravem ' + name
}

const formalGoodbye = (name) => {
  return 'S uctivou poklonou…' + name
}

const rudeGoodbye = (name) => {
  return 'Se měj…' + name
}

const fillSubject = (subject) => {
	document.querySelector('.email__subject').textContent = subject
}

const goodbyeFunction = () => {
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    return formalGoodbye;
  } else {
    return rudeGoodbye;
  }

}

const fillBody = (body, name, vlozenaFunkce) => {
	const bodyElm = document.querySelector('.email__body')
	bodyElm.innerHTML = body
	const closingElm = document.querySelector('.email__closing')
	closingElm.textContent = goodbyeFunction(name)
}

