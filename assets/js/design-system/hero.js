import { isMobile } from '../theme/utils/breakpoints';

class PagesHero {
    constructor () {
        this.page = document.querySelector('.projects__page');
        if (!this.page || isMobile()) {
            return;
        }
        this.hero = this.page.querySelector('.hero')
        this.listen();
    }

    listen () {
        this.heading = this.hero.querySelector('h1');
        this.hgroup = this.hero.querySelector('hgroup');
        this.date = this.hero.querySelector('.project-infos');
        this.content = this.hero.querySelector('.content');

        this.moveHeading();

        if (this.hgroup) {
            this.removeHgroupTag();
        }
    }

    moveHeading() {
        this.content.prepend(this.heading);
        this.content.prepend(this.date);
    }

    removeHgroupTag() {
        this.hgroup.replaceWith(...this.hgroup.childNodes);
    }
}

export default new PagesHero();