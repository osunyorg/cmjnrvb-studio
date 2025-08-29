import { isMobile } from '../theme/utils/breakpoints';

class PagesHero {
    constructor () {
        this.page = document.querySelector('.projects__page');
        this.home = document.querySelector('.page__home');

        if ((this.page || this.home) && !isMobile()) {
            this.listen();
        }
    }
    
    listen () {
        this.hero = document.querySelector('.hero');
        this.title = this.hero.querySelector('h1');
        this.heading = this.hero.querySelector('hgroup');

        if (this.page) {
            this.moveHeading();
        }
        if (this.home) {
            this.moveButton();
        }
    }

    moveHeading() {
        this.date = this.hero.querySelector('.project-infos');
        this.content = this.hero.querySelector('.content');

        this.content.prepend(this.title);
        this.content.prepend(this.date);

        if (this.heading) {
            this.removeParentTag(this.heading);
        }
    }

    moveButton() {
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