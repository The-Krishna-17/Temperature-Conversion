//declaring variables
const ctfBtn = document.querySelector('#ctf');
const ftcBtn = document.querySelector('#ftc');

//main code for the conversion of degree celcius to farhenite
ctfBtn.addEventListener('click', function(){
    if(input === ""){ // Check if the input is empty
        document.querySelector('#output').innerHTML = `The input can't be empty`;
    } 
    else{
        const input = Number(document.querySelector('#input').value);
        if(isNaN(input)){ // Check if the input is a valid number
            document.querySelector('#output').innerHTML = 'Please enter a valid number.';
        }
        else{
            const temp = (input * (9/5)) + 32;
            document.querySelector('#output').innerHTML = `Output: ${temp.toFixed(2)} °F`
        }
    }
});


//main code for the conversion of degree farhenite to degree celcius
ftcBtn.addEventListener('click', function(){
    if(input === ""){ // Check if the input is empty
        document.querySelector('#output').innerHTML = `The input can't be empty`;
    }
    else{
        const input = Number(document.querySelector('#input').value);
        if(isNaN(input)){ // Check if the input is a valid number
            document.querySelector('#output').innerHTML = 'Please enter a valid number.';
        }
        else{
            const temp = (input - 32) * (5/9);
            document.querySelector('#output').innerHTML = `Output: ${temp.toFixed(2)} °C`
        }
    }
});



