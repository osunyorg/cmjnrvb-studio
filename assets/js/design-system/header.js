class Header {
    constructor () {
        this.coverContainer = document.querySelector('.header-cover');
        if (!this.coverContainer) {
            return;
        }
        this.listen();
    }

    listen () {
        this.images = [];

        this.getImagesUrl();
        this.createImage();
    }

    getImagesUrl() {
        let imageIndex = Math.floor(Math.random() * 3) + 1
        let imageUrl = `/assets/images/hover/hover-${imageIndex}.svg`;
        this.images.push(imageUrl);
    }

    createImage () {
        let image = document.createElement('img');
        let url = this.images;

        image.src = url;
        this.coverContainer.appendChild(image);
    }
}

export default new Header();