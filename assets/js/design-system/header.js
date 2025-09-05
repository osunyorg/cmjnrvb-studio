class FooterImages {
    constructor () {
        this.imagesContainer = document.querySelector('.header-cover');
        if (!this.imagesContainer) {
            return;
        }
        this.images = this.imagesContainer.querySelectorAll('picture');
        this.total = this.images.length;
        this.listen();
    }

    listen () {
        this.hideImages();
        this.displayImage();
    }

    hideImages() {
        for (var i = 0, len = this.images.length; i < len; i++) {
            this.images[i].style.display = 'none';
        }
    }

    displayImage () {
        let image = this.images[Math.floor(Math.random() * this.total)];
        console.log(Math.floor(Math.random() * this.total))
        image.style.display = 'block';
    }
}

export default new FooterImages();