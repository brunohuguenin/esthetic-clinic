import SlideNav from './js/slide.js';
import initScrollSuave from './js/scroll.js';
import InitMenuMobile from './js/menu-mobile.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
initScrollSuave();
InitMenuMobile();
