const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener('blur', onFocusLost);

function onFocusLost (event)  {
    if (Number(event.currentTarget.getAttribute('data-length')) === event.currentTarget.value.length) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {event.currentTarget.classList.add('invalid');}
};