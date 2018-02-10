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
myApp.elements = [
    { 
        tag: 'h1',
        classes: [],
        locked: false,
        colour: '',
        content: 'title',
        colourType: ['color']
    },
    {
        tag: 'p',
        classes: [],
        locked: false,
        colour: '',
        content: 'lorem ipsum',
        colourType: ['color']
    },
    {
        tag: 'button',
        classes: [],
        locked: false,
        colour: '',
        content: 'button',
        colourType: ['color', 'background']
    },
    {
        tag: 'i',
        classes: ['fas', 'fa-bars'],
        locked: false,
        colour: '',
        content: '',
        colourType: ['color', 'background']
    },
    // {
    //     tag: 'div',
    //     classes: [],
    //     locked: false,
    //     colour: '',
    //     content: 'hello',
    //     colourType: ['color', 'background']
    // },
]

// background colour changes to random HEX colour
const setBackground = () => {
    $('.background').css('background-color', '#' + (Math.random() * 0xFFFFFF << 0).toString(16));
}

// function is saved as variable 
const addElement = (element) => {
    // empty element
    // $('#background').empty();
    // we are taking an object in and build an element on the screen inside the background element 
    console.log(element.tag)
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
    setColours(element, newElement);
    // go to new function and give new element
    handleClick(element, newElement);
    
    // console.log(element.classes)
    // append new element
    $('#background').append(newElement)
}

const setColours = (element, newElement) => {
    if(element.locked === false) {
        element.colourType.forEach((type) => {
            console.log(type);
            // .css gets property type and value that we want to add
            // method
            // return replaces function with the value
            // value is where function call used to be
            newElement.css(type, getRandomColour)
        });
    } else{console.log('locked')}
}

const resetColour = () => {
    $('#background').empty();
    setBackground()
    // get all the elements, loop through and reset colours
    myApp.elements.forEach(addElement);
}

// events starts here
// 
const handleClick = (element, newElement) => {
    newElement.on('click', () => {
        console.log(element)
        // whatever locked is make it opposite of that
        element.locked = !element.locked;
        console.log(element)
    });
} 

const getRandomColour = () => {
    // sending this and returning back from the place it was called from 
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

// random button click event
// wheenevr clicked will reset colour
$('.button-random').on('click', resetColour) 

// on click allow user to input HEX value


// take the elements go over each element in array and do something with each object in array
myApp.elements.forEach(function(element){
    // can call these separatly
    // set background on page load
    setBackground()
    addElement(element)
});








