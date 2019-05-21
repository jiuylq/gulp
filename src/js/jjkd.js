window.onload = function () {
  appendItem()
  let lazy = initLazy()
  document.getElementById('btn').onclick = () => {
    lazy.init({
      elements: document.querySelectorAll('.box1 .img')
    })
  }
  document.getElementById('btn2').onclick = function () {
    appendItem('.box1', 5)
  }
}

function appendItem(className = '.box', p = 1) {
  let box = document.querySelector(className)
  let str = ''
  for (let i = 0; i < 5; i++) {
    str += `<div class="item item-${i*p}"></div>`
  }
  box.innerHTML = str
  str = ''
  for (let i = 0; i < 25; i++) {
    str += `<div class="img" data-src="https://dummyimage.com/200x200/ff0ff0&text=${i*p}" id="${i*p}"></div>`
    // str += `<img class="img" data-src="https://dummyimage.com/200x200/ff0ff0&text=${i*p}">`)
    if (i % 5 === 0) {
      box.querySelector('.item-' + i * p / 5).innerHTML = str
      str = ''
    }
  }
}

function initLazy() {
  let lazy = new LazyLoad()
  lazy.init({
    elements: document.querySelectorAll('.img'),
    distance: 50,
    tag: 'data-src',
    frequency: 14,
    isBg: true,
    defaultImg: 'https://dummyimage.com/200x200/ff0ff0&text=666'
  })
  return lazy
}