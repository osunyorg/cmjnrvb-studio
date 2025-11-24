class PagesHero {
    constructor () {
        this.home = document.querySelector('.page__home');

        if (this.home) {
            this.setup();
        }
    }

    setup () {
        this.hero = document.querySelector('.hero');
        this.title = this.hero.querySelector('h1');
        this.heading = this.hero.querySelector('hgroup');

        if (this.home) {
            this.reorderButton();
        }
    }

    reorderButton() {
        this.button = this.hero.querySelector('.hero-actions');
        this.lead = this.heading.querySelector('p:last-of-type');

        if (this.button) {
            this.lead.append(this.button);
            this.removeParentTag(this.button);
        }
    }

    removeParentTag(element) {
        element.replaceWith(...element.childNodes);
    }
}

export default new PagesHero();