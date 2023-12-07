// const result = _.add(2, 3)
// console.log(result);

// let sliderInp = document.querySelector('.slider__input')
// let sliderImg = document.querySelector('.slider__image')

sliderInp.addEventListener(
    "input", 
    _.debounce(() => {
        const sliderV = sliderInp.max / 2;

        if (sliderInp.value > sliderV) {
            sliderImg.style.width = '400px';
            sliderImg.style.height = '400px';
        } else {
            sliderImg.style.width = '200px';
            sliderImg.style.height = '200px';
        }
    }, 300)
)

let box = document.querySelector('#box')

document.addEventListener(
    "mousemove", 
    _.debounce((event) => {
      const clientX = event.clientX;
      const clientY = event.clientY;
      box.style.transform = `translateX(${clientX}px) translateY(${clientY}px)`
    }, 100)
)

let inputA = document.querySelector('.inputA');
let inp = document.querySelector('.inp')

inputA.addEventListener(
    "input",
    _.debounce(() => {
        const inpAValue = inputA.value;
        inp.append(inpAValue)
    }, 500)
)

let formInp = document.querySelector('.form__inp')
let form = document.querySelector('.form')
let validationCode = document.querySelector('.validation__code')

form.addEventListener(
    "input",
    _.debounce(() => {
      let text = formInp.value;
      if (text.length >= 6 && text.includes('@')) {
        validationCode.textContent = text;
      }
      else {
        validationCode.textContent = '';
        alert('Text is not valid')
      }
    }, 500)
  );