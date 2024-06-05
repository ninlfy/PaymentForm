document.querySelector('.card-number-input').oninput = () => {
    const cardNumberInput = document.querySelector('.card-number-input');
    const cardNumberBox = document.querySelector('.card-number-box');
    const cardNumberValue = cardNumberInput.value.replace(/\D/g, '').substring(0, 16);
    const formattedCardNumber = cardNumberValue.replace(/(.{4})/g, '$1 ').trim();
    cardNumberBox.innerText = formattedCardNumber;
    cardNumberInput.value = formattedCardNumber;
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () => {
    const monthValue = document.querySelector('.month-input').value;
    const yearValue = document.querySelector('.year-input').value;
    if (yearValue !== 'year') {
        document.querySelector('.exp-month').innerText = `${monthValue}/${yearValue.substring(2)}`;
    }
}

document.querySelector('.year-input').oninput = () => {
    const monthValue = document.querySelector('.month-input').value;
    const yearValue = document.querySelector('.year-input').value;
    if (monthValue !== 'month') {
        document.querySelector('.exp-month').innerText = `${monthValue}/${yearValue.substring(2)}`;
    }
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    const cvvInput = document.querySelector('.cvv-input');
    const cvvBox = document.querySelector('.cvv-box');
    const cvvValue = cvvInput.value;
    const hiddenCvv = '*'.repeat(cvvValue.length);
    cvvBox.innerText = hiddenCvv;
};

document.getElementById('credit-card-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const errorMessages = document.querySelectorAll('.error-msg');
    errorMessages.forEach(msg => msg.innerText = '');

    let isValid = true;

    const cardNumberInput = document.querySelector('.card-number-input');
    const cardNumberError = document.querySelector('.card-number-error');
    const cardNumberValue = cardNumberInput.value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardNumberValue)) {
        cardNumberError.innerText = 'Invalid card number';
        isValid = false;
    }

    const cardHolderInput = document.querySelector('.card-holder-input');
    const cardHolderError = document.querySelector('.card-holder-error');
    if (!/^[a-zA-Zа-яА-Я\s\-']{3,100}$/.test(cardHolderInput.value)) {
        cardHolderError.innerText = 'Invalid card holder';
        isValid = false;
    }

    const monthInput = document.querySelector('.month-input');
    const yearInput = document.querySelector('.year-input');
    const expirationError = document.querySelector('.expiration-error');
    if (monthInput.value === 'month' || yearInput.value === 'year') {
        expirationError.innerText = 'Please select expiration date';
        isValid = false;
    }

    const cvvInput = document.querySelector('.cvv-input');
    const cvvError = document.querySelector('.cvv-error');
    if (!/^\d{3}$/.test(cvvInput.value)) {
        cvvError.innerText = 'Invalid CVV';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('credit-card-form').submit();
    }
});
