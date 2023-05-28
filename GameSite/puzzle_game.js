function puzzleGame() {
    let i = 3;
    do {
        let answer = String(prompt('Висит груша, нельзя скушать. Что это?'));
        answer = answer.toLowerCase();
        if (answer == 'null') {
            break;
        }
        if (answer === 'лампочка') {
            alert('Правильно!');
            break;
        } else if (i === 1) {
            alert('Попытки закончились. Извини.')
            break;
        } else {
            alert(`Попробуй еще раз :( \nПопытки: ${i - 1} `);
            i--;
            if (i === 2) {
                alert('Подсказка: работает от электричества')
            }
            if (i === 1) {
                alert('Подсказка: обычно на потолке, светится')
            }
        }
    } while (i !== 0);
}