const form = document.querySelector('.quiz-form')
const div = document.querySelector('.quiz-body')

const correctAnswers = ['C', 'A', 'A', 'B']

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if(userAnswer === correctAnswers[index]){
      score += 25
    }
  })

  const h1 = document.createElement('h1')
  h1.classList.add('mx-5')
  const message = `Você acertou ${score}% do quiz`
  h1.textContent = message
  div.appendChild(h1)
  form.button.remove()
})