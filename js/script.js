const btn = document.querySelector('button');

//quadrati al click
btn.addEventListener('click',function(){
    const level = document.getElementById('level').value;
//grigie diverse per ogni livello
let numSquare;
switch(level){
    case 'medio':
        numSquare = 81;
        break;
    case 'difficile':
        numSquare = 49;
        break;
    default:
        numSquare = 100;
console.log(numSquare);
}

//griglia + stampo quadrati
    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    for(let i = 0; i < numSquare; i++){
        let square = drawSquare(i,numSquare);
        
        playground.append(square);
    }
});

//quadrati
function drawSquare(squareIndex, numSquare){
    const squareWidth = Math.sqrt(numSquare);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click', function(){
        square.classList.add('active');
        square.style.color = 'black';
        console.log(square.textContent);
    });
    return square;
}
