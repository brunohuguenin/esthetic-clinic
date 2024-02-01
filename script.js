import SlideNav from './js/slide.js';
import initScrollSuave from './js/scroll.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
initScrollSuave();
