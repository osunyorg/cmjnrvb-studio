class ImageLoadState {
    constructor (img) {
        this.element = img;
        console.log(this.element)
        if (this.element.complete) this.setClass();
        this.element.addEventListener('load', this.setClass.bind(this));
    }
    setClass() {
        console.log('load')
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
