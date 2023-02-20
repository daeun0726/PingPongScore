const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

const select = document.querySelector('#select');

const reset = document.querySelector('#reset');

p1Add = 0;
p2Add = 0;
isGameOver = false;
winningScore = 0;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Add += 1;
        if (winningScore == p1Add) {
            isGameOver = true;
            p1Score.classList.add('has-text-success');
            p2Score.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Score.textContent = p1Add;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Add += 1;
        if (winningScore == p2Add) {
            isGameOver = true;
            p2Score.classList.add('has-text-success');
            p1Score.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Score.textContent = p2Add;
    }
})

select.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    isGameOver = false;
    p1Add = 0;
    p2Add = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
})

reset.addEventListener('click', function () {
    isGameOver = false;
    p1Add = 0;
    p2Add = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
})