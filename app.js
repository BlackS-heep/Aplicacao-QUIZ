const correctAnswers = ['C', 'A', 'A', 'B']

const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')
const redoButton = document.querySelector('.redo-button')

let score = 0

const getUserAnsewers = () => {
  return [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]
}

const calculateUserScore = userAnswers => {
  score = 0

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })
}

const showFinalResult = () => {
  scrollTo(0,0)
  finalScoreContainer.classList.remove('d-none')
}

const animateFinalResult = () => {
  let counter = 0

  const timer = setInterval(() => {
    if (counter === score){
      clearInterval(timer)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 20)
}

const redoQuiz = () => {
  redoButton.classList.remove('d-none')
}

redoButton.addEventListener('click', () => {
  form.button.classList.remove('d-none')
  redoButton.classList.add('d-none')
  finalScoreContainer.classList.add('d-none')
  
  form.reset()
})

const handleFormSubmit =  event => {
  event.preventDefault()

  const userAnswers = getUserAnsewers()

  calculateUserScore(userAnswers)
  showFinalResult()
  animateFinalResult()

  form.button.classList.add('d-none')
  redoQuiz()
}

form.addEventListener('submit', handleFormSubmit)