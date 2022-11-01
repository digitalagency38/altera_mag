import $ from 'jquery';

const Card = class Card {
    constructor() {}
    TabsProd() {
      $(function () {
        setTimeout(function() {
          $('#responsiveTabsDemo').responsiveTabs({
            startCollapsed: 'accordion'
          });
        }, 100)
      });
    }
    init() {
        this.TabsProd();
    }
}

export default Card;