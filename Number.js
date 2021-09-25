const res = Math.floor(Math.random() * 20) + 1;
// const hs = document.querySelector('#highscore')
const ul = document.createElement('ul');
const guessnumber = document.querySelector('#guessnumber')
const buton = document.querySelector('#btn');
var highscore = 20;
let guess = 1;
buton.addEventListener('click', function () {
    const num = document.querySelector('#number').value
    if (num == res) {
        console.log("Cracked It!!!");
        alert("You guessed it right!!!");
        console.log("Your Score is:" + highscore)
        console.log("Your Number Of Guess are:" + guess)
        lis = ['Cracked It!!!', `Your Score is: ${highscore}`, `Your Number Of Guess are: ${guess}`,]
        for (let i of lis) {
            let li = document.createElement('li');
            li.innerText = i
            ul.append(li)
        }
        // guessnumber.append(`Cracked It!!!\nYour Score is: ${highscore}\nYour Number Of Guess are: ${guess}`)
        ul.classList.add('cracked');

        guessnumber.append(ul);


    }
    else if (num > res) {
        // console.log("Number is too High");
        alert("Try Again!!! Number is too High")
        highscore -= 1
        guess += 1
    }
    else {
        // console.log("Number is too Low");
        alert("Try Again!!! Number is too Low")
        highscore -= 1
        guess += 1
    }
})