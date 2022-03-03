const testimonies = [
  {
    text: '"I\'ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m the job of my dreams and so excited about the future."',
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    image:'./images/image-tanya.jpg'
  },
  {
    text: '“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I feel so confident about starting up as a professional developer.”',
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    image:'./images/image-john.jpg'
  },
]

const statement = document.getElementById('statement')
const avatar = document.getElementById('avatar')
const person = document.getElementById('name')
const job = document.getElementById('job')

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const section = document.querySelector('section')
let index = 0
assignValues()
function assignValues() {
  anime({
    targets: [statement, avatar, person, job],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    delay: anime.stagger(300)
  })
  statement.innerText = testimonies[index].text
  person.innerText = testimonies[index].name
  job.innerText = testimonies[index].job
  avatar.src = testimonies[index].image
}
function nextTestimony() {
  index++
  if (index == testimonies.length) {
    index = 0
    assignValues()
  } else {
    assignValues()
  }
}
function prevTestimony() {
  index--
  if (index == -1) {
    index = testimonies.length - 1
    assignValues()
  } else {
    assignValues()
  }
}
next.addEventListener('click', ()=> {
  nextTestimony()
})
prev.addEventListener('click', ()=> {
  prevTestimony()
})

document.addEventListener('keydown', (e)=> {
  // left arrow key
  if(e.keyCode == 37){
    prevTestimony()
  }
  // right arrow key
  if(e.keyCode == 39){
    nextTestimony()
  }
})