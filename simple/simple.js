
caliculate = () => {
    const $number = document.getElementById('sentence');
    let sum = 0
    for (let index = 1; index <= 10; index++) {
        sum = sum + index;
        $number.textContent = sum;
    }
}

const $button = document.getElementById('button');

$button.addEventListener('click', () => {
    caliculate();

});
