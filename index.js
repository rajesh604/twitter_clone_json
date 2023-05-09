// select the body of the html

const body = document.querySelector('body');

// get the all the elements with class name of start
const start = document.getElementsByClassName('start');
// console.log(start);

// user for of loop
for (let element of start) {
    element.addEventListener('click', (event) => {
        // get the element below it
        const parentElem = event.target.parentElement.parentElement;
        // console.log(parentElem);
        // get all the element with section1 class in the parentElem
        const section1 = parentElem.getElementsByClassName('section1');

        for (let element of section1) {
            // console.log(element);
            element.classList.toggle('disapper');
        }
    });
};