const btn = document.querySelector('button');

//quadrati al click
btn.addEventListener('click',function(){
    const numSquare = 64;
//griglia
    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    for(let i = 0; i < numSquare; i++){
        let square = drawSquare(i,numSquare);
        console.log(square);
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
    });
    return square;
}
