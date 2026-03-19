const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('eres lindo ;)')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;

    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(${randomX}%, ${randomY}%)`);
});