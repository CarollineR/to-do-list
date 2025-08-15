function addATask() {
    const input = document.getElementById('task');
    const text = input.value.trim();

    if (text === '') {
        alert('Add a Task!');
        return;
    }

    const list = document.getElementById('TaskList');
    const li = document.createElement('li');

    const spanText = document.createElement('span');
    spanText.textContent = text;
    spanText.classList.add('text');

    spanText.addEventListener('click', function () {
        spanText.classList.toggle('completed');
    });

    const buttonComplete = document.createElement('button');
    buttonComplete.textContent = '✓';
    buttonComplete.classList.add('complete');
    buttonComplete.addEventListener('click', function() {
        spanText.classList.toggle('completed');
    });

    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = '-';
    buttonDelete.classList.add('delete');
    buttonDelete.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(spanText);
    li.appendChild(buttonComplete);
    li.appendChild(buttonDelete);

    list.appendChild(li);
    input.value = '';
}
