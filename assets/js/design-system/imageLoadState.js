class ImageLoadState {
    constructor (img) {
        this.element = img;
        if (this.element.complete) this.setClass();
        this.element.addEventListener('load', this.setClass.bind(this));
    }
    setClass() {
        this.element.classList.add('loaded');
    }
};

window.osuny = window.osuny || {};
window.osuny.ImageLoadState = ImageLoadState;

window.osuny.page.registerComponent({
    name: 'ImageLoadState',
    selector: 'img',
    klass: window.osuny.ImageLoadState
});
