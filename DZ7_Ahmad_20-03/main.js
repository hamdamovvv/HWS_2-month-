// class Cars {
//     constructor(options) {
//         this.model = options.model
//         this.color = options.color
//         this.wheels = options.wheels
//         this.price = options.price
//     }
//     start() {
//         console.log('Машина заведена!')
//     }
//
// }
//
// class Toyota extends Cars {
//     constructor(options) {
//         super(options);
//     }
//
// }
//
// const toyota = new Toyota({
//         model: 'Toyota',
//         color: 'Green',
//         wheels: 4,
//         price: "2000$"
//     }
// )
//
// class Mercedes extends Cars {
//     constructor(options) {
//         super(options);
//     }
// }
//
// const mercedes = new Mercedes({
//     model: 'Mercedes',
//     color: 'Black',
//     wheels: 6,
//     price: "5000$"
// })
//
// class Volvo extends Cars {
//     constructor(options) {
//         super(options);
//     }
// }
//
// const volvo = new Volvo({
//     model: 'Volvo',
//     color: 'White',
//     wheels: 12,
//     price: "25000$"
// })
//
// mercedes.start()
// toyota.start()
// volvo.start()
//
//

// const btns = document.querySelectorAll('.counter__btn');
//
// btns.forEach(btn=> {
//     btn.addEventListener('click',
//         function () {
//             const direction = this.dataset.direction;
//             const inp = this.parentElement.querySelector('.alco__value');
//             const currentValue = +inp.value;
//             let newValue;
//
//
//             (direction === 'plus') ?
//                 newValue = currentValue + 1
//                 :
//                 newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
//
//             (direction === 'plus') ?
//                 inp.style.color = "green"
//                 :
//                 inp.style.color = "red"
//
//
//
//
//             inp.value = newValue;
//         })
// })