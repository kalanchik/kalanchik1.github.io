const form = document.getElementById('form');



form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('[name="name"]');
    const email = document.querySelector('[name="email"]');
    const number = document.querySelector('[name="numbers"]');
    const answer = document.querySelector('[name="answer"]');
    const telephone = document.querySelector('[name="telephone"]');
    const password = document.querySelector('[name="password"]');
    const brighteness = document.querySelector('[name="light"]');
    const roomButtons = document.querySelectorAll('[name="room"]');

    const rooms = [];

    roomButtons.forEach(button => {
        if (button.checked) {
            rooms.push(button.parentNode.textContent.trim());
        }
    });

    const formData = {
        "name": name.value,
        'email': email.value,
        "How many plants do you want to buy?": number.value,
        "Do you need help with the compositions?": answer.checked,
        "telephone": telephone.value,
        "password": password.value,
        "Brighteness in rooms": brighteness.value,
        "Select the rooms to be landscaped": rooms,
    }

    // Получаем элемент, в который будем выводить информацию
    const outputElement = document.getElementById("output");

    // Функция для форматирования объекта в виде "Ключ: значение"
    function formatOutput(obj) {
        let outputString = "<br><br>";
        for (const [key, value] of Object.entries(obj)) {
            outputString += `${key} : ${value}<br>`;
        }
        return outputString;
    }

    // Получаем отформатированную строку
    const formattedOutput = formatOutput(formData);

    // Выводим информацию на экран
    outputElement.innerHTML = formattedOutput;

});



