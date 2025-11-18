(function () {
    var pointerY = 0,
        table = document.querySelector('.projects-archives-list');

    if (!table) return;

    window.addEventListener('pointermove', function (e) {
        pointerY = e.clientY;
        if (pointerY > window.innerHeight / 2) {
            table.classList.add('thumbnail-up');
        } else {
            table.classList.remove('thumbnail-up');
        }
    });
})();
