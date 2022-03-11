const dropDown = document.querySelector('select');
let winScore = 1;
dropDown.addEventListener('change',function(){
    winScore = parseInt(this.value);
    resetFun();
});
const p1 = {
    score: 0,
    button: document.querySelector('#p1score'),
    display: document.querySelector('#p1display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2score'),
    display: document.querySelector('#p2display')
}

let isgameOver = false;//for reset


function updateScore(player,opponent){
    if(!isgameOver){
        player.score++;
        if(player.score === winScore && (player.score - opponent.score)===2){
            isgameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        else if(player.score === winScore){
            isgameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click',function(){
    updateScore(p1,p2)
});
p2.button.addEventListener('click',function(){
    updateScore(p2,p1)
});

const reset = document.querySelector('#reset');
reset.addEventListener('click',resetFun);

//reset()
function resetFun(){
    isgameOver = false;
    for(let p of [p1,p2]){ 
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
        // dropDown.value= 1;
    }
}



