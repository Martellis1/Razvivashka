let cards = document.querySelectorAll('.card'),
player = document.querySelector('.player');


card.addEventListener('click', el => {
    let sound = el.target.parentElement.dataset.sound;
   console.log(sound);
    player.setAttribute('src', `mp3/${sound}.MP3`);
    player.play();
    
cards.forEach(card => {
    let width = card.offsetWidth;
    let height = card.offsetHeight;

    card.addEventListener('mousemove', el => {
        let xVal = el.offsetx;
        let yVal = el.offsety;

        let xRotation = ((yVal - height / 2) / height) * -20;

        let yRotation = ((xVal - width / 2) / width) * 20;

        let css = 'perspective(500px) scale(1.06) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

        el.target.style.transform = css;
    });


    card.addEventListener('mouseout', el => {
        el.target.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    });

    });
}
)
