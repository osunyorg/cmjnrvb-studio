class ProjectArchives {
    constructor (table) {
        var pointerY = 0;

        if (!table) return;

        window.addEventListener('pointermove', function (e) {
            pointerY = e.clientY;
            if (pointerY > window.innerHeight / 2) {
                table.classList.add('thumbnail-up');
            } else {
                table.classList.remove('thumbnail-up');
            }
        });
    }
};

window.osuny = window.osuny || {};
window.osuny.ProjectArchives = ProjectArchives;

window.osuny.page.registerComponent({
    name: 'projectArchives',
    selector: '.projects-archives-list',
    klass: window.osuny.ProjectArchives
});
