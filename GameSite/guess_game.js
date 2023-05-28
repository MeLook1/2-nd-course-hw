function guessFirstOrLast() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    while (true) {
        let agree = confirm('Готов запоминать?');
        if (agree) {
            words = words.sort(() => Math.random() - 0.5);
            alert(words);
            let first = words[0];
            first = first.toLowerCase();
            let firstUser = String(prompt('Чему равнялся первый элемент массива?'));
            firstUser = firstUser.toLowerCase();
            let last = words[6];
            last = last.toLowerCase();
            let lastUser = String(prompt('Чему равнялся последний элемент массива?'));
            lastUser = lastUser.toLowerCase();
            if (first === firstUser && last === lastUser) {
                alert('Поздравляю! Вы угадали оба элемента!');
            } else if (first === firstUser || last === lastUser) {
                alert('Вы были близки к победе!')
            } else {
                alert('Оххх...К сожалению, вы ответили не верно :(')
            }
        } else { 
            break;
        }
    }
    
}