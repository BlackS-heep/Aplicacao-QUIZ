const correctAnswers = ['C', 'B', 'D', 'A']

const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) =>
 form[`inputQuestion${index+1}`].value)

const calculateUserScore = userAnswers => {
  score = 0
  
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]
    
    if (isUserAnswerCorrect) {
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
    if(counter === score){
      clearInterval(timer)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 20)
}

form.addEventListener('submit', event => {
  event.preventDefault()
  
  const userAnswers = getUserAnswers()

  calculateUserScore(userAnswers)
  showFinalResult()
  animateFinalResult()
})
