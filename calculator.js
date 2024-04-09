window.onload = function() {
    let answer = '';

    function appendToAnswer(value) {
        answer += value;
        updateAnswerBox();
    }

    function updateAnswerBox() {
        const answerBox = document.querySelector('.answer-box');
        if (answerBox) {
            answerBox.innerText = answer;
        } else {
            console.error("Answer box not found.");
        }
    }

    function calculate() {
        try {
            answer = eval(answer);
            updateAnswerBox();
        } catch (error) {
            answer = 'Error';
            updateAnswerBox();
        }
    }

    function clearAnswer() {
        answer = '';
        updateAnswerBox();
    }

    const buttons = document.querySelectorAll('.numpad button, .operators button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            if (value === '=') {
                calculate();
            } else if (value === 'C') {
                clearAnswer();
            } else if (value === '+') { 
                appendToAnswer(' + '); 
            } else {
                appendToAnswer(value);
            }
        });
    });
};
