// pseudocode here

// user has option to change color palette to own choice or one that is already provided
// choices of palette will be ones I made myself on color hunt

// on click figure out hover on buttons
// figure out how to change body colour
// colours stores in array
// return random number from array
// can randomize one color at a time or all
// switch button so user can switch colours around on element

// the user inputs colour palette choices
// user can change the hex colours of the elements on the page

// HEX COLOUR RANDOMIZER
// formula
// '#' + (Math.random() * 0xFFFFFF << 0).toString(16);


// global scope
// empty object {}
// main container
const myApp = {};

// do not need to preface with const 
// array of elements in variable
// each object represents element inside background
// can easily add more objects to it
// name of array in myApp is called elements
myApp.elements = [
    { 
        tag: 'h1',
        classes: ['h1Color'],
        locked: false,
        color: '',
        content: 'Title',
        colorType: ['color']
    },
   {
        tag: 'p',
        classes: ['pColor'],
        locked: false,
        color: '',
       content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        colorType: ['color']
    },
    {
        tag: 'button',
        classes: ['bColor'],
        locked: false,
        color: '',
        content: 'button',
        colorType: ['color', 'background']
    }
    // {
    //     tag: 'i',
    //     classes: ['fas', 'fa-bars'],
    //     locked: false,
    //     color: '',
    //     content: '',
    //     colorType: ['color']
    // }
]


// FUNCTIONS START HERE
// function that allows background colour to change to random HEX colour
const setBackground = () => {
    // jquery find div with class of .background inside my html and add style property to it using .css jquery method
    // jquery change background-color to random HEX color code with following formula
    $('.background').css('background-color', '#' + (Math.random() * 0xFFFFFF << 0).toString(16));
}

// function is saved as variable here that can be reused 
const addElement = (element) => {
    // empty element
    // $('#background').empty();
    // we are taking an object in and building an element on the screen inside the background element 
    // console.log(element.tag)
    // angle brackets with template literal inside
    // angle brackets set 
    const newElement = $(`<${element.tag}>`).text(element.content);
    // variable of element grabbing the array in classes
    const classes = element.classes;
    // c = class
    classes.forEach( (c) => {
        // each time we discover class decide what to do with it
        // grab element and add class to it
        newElement.addClass(c)
    });

    // because this already exists we can call it
    // applyColour(element);
    // loop over colorType
    // find what color types are and apply to each element
    // deciding if true or false
    setColors(element, newElement);
    // go to new function and give new element
    handleClick(element, newElement);
    
    // console.log(element.classes)
    // append new element
    $('#background').append(newElement)
}

// function for locking unlocking set colors on random
const setColors = (element, newElement) => {
    if(element.locked === false) {
        element.colorType.forEach((type) => {
            // console.log(type);
            // .css gets property type and value that we want to add
            // method
            // return replaces function with the value
            // value is where function call used to be
            newElement.css(type, getRandomColor)
        });
    } else{('locked')}
}

const resetColor = () => {
    $('#background').empty();
    setBackground()
    // get all the elements, loop through and reset colours
    myApp.elements.forEach(addElement);
}

// manual color function here
const manualColor = (e) => {
    // find form
    // get form values
    // apply values to elements
    // Get hex value from input
    // regex has # + six other colours for hex code value

    // apply values to elements
    let h1Color = $('#h1-color').val();
    // allow user to apply hex value to h1
    $('.h1Color').css('color', h1Color);

    // apply values to elements
    let pColor = $('#paragraph-color').val();
    // allow user to apply hex value to paragraph
    $('.pColor').css('color', pColor);

    // apply values to elements
    let bColor = $('#button-color').val();
    // allow user to apply hex value to button
    $('.bColor').css('color', bColor);
    
    let formArray = $('form').serializeArray();

    // let regular expression be equal to hex color code that is length of 7 characters including #
    let re = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    re.exec();
}

const setColorsManual = (element, newElement) => {
    // target each element by class (with jquery)
    
    // use jquery to set element text-color/background
}

// make function similar to random function and pass the variable inside  

const getRandomColor = () => {
    // sending this and returning back from the place it was called from 
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

// EVENTS START HERE
const handleClick = (element, newElement) => {
    newElement.on('click', () => {
        // console.log(element)
        // whatever locked is make it opposite of that
        // = !
        element.locked = !element.locked;
        // console.log(element)
    });
} 

// random button click event
// whenever clicked will reset colour
$('.button-random-active').on('click', resetColor) 

// click event for submit, call manualColor
$('.submit').on('click', manualColor) 
// on click allow user to input HEX value



// DOCUMENT READY
// document ready where everything gets called
// take the elements go over each element in array and do something with each object in array
myApp.elements.forEach(function(element){
    // can call these separately
    // set background on page load
    setBackground()
    addElement(element)
});








