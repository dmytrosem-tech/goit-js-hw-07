const refs = {
    inputWormRef: document.querySelector('#font-size-control'),
    spanRef: document.querySelector('#text')
}

refs.spanRef.style.fontSize = '20px';
refs.inputWormRef.setAttribute('value', '20');
refs.inputWormRef.setAttribute('min', '1');
refs.inputWormRef.setAttribute('max', '40');
refs.inputWormRef.setAttribute('step', '1');

refs.inputWormRef.addEventListener('input', onValueChange);

function onValueChange (event) {
    const value = event.currentTarget.value;
    refs.spanRef.style.fontSize = `${value}px`;
}


