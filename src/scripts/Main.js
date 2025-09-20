import ComponentFactory from './ComponentFactory';
import Icons from './utils/Icons';

class Main {
  constructor() {
    this.alerte = document.querySelector('.js-alerte');
    this.btnCloseAlerte = document.querySelector('.js-alerte-btn');

    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    Icons.load();
    new ComponentFactory();

    if(this.btnCloseAlerte){
      this.btnCloseAlerte.addEventListener('click', this.closeAlerte.bind(this));
    }
  }

  closeAlerte(){
    this.alerte.classList.toggle('is-closed');
  }
}
new Main();
