const input = document.getElementById('inp')
const text = document.querySelector('.text')


input.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 13:
      let arr = []

      const rev = input.value.split('').reverse().join('')
      arr.push(rev)

      arr.forEach((item) => {
        const div = document.createElement('div')
        const button = document.createElement('button')
        button.innerHTML = 'delete'

        button.onclick = () => {
          div.remove()
        }

        div.innerHTML = item
        div.append(button)
        text.append(div)
      })
      break;
    default:
      break;
  }
})


// input.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//         let arr = []
//
//         const rev = input.value.split('').reverse().join('')
//         arr.push(rev)
//         arr.forEach((item) => {
//             const div = document.createElement('div')
//             const button = document.createElement('button')
//             button.innerHTML = 'delete'
//
//             button.onclick = () => {
//                 div.remove()
//             }
//             div.innerHTML = item
//             div.append(button)
//             text.append(div)
//         })
//     }
// })




// alcogoglik.addEventListener('input', (e) => {
// const rev = e.target.value.split('')
// const reversedArray = rev.reverse()
// const arr = []
// reversedArray.forEach(char => {
// alcash.innerHTML += char
// })
// })
// let i = 1;
// let sum = 0;
// while (i <= 99) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
//     i++;
// }
// console.log("The sum of all odd numbers from 1 to 99 is: " + sum);
// var daysOfWeek = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// for (var i = 0; i < daysOfWeek.length; i++) {
//     if (i < 5) {
//      console.log(daysOfWeek[i].toLowerCase());
//     } else {
//         console.log(daysOfWeek[i].toUpperCase());
//     }
// }
