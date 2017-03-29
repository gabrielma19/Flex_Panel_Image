const selectors = '.panel';

expandableCards(selectors);


/**
 * Create expandable cards.
 * @param {string} selectors
 */
function expandableCards(selectors) {
  let cards = document.querySelectorAll(selectors);

  Array
    .from(cards)
    .forEach((card, index, cards) => {
      card.addEventListener('transitionend', toggleOpen);
      card.addEventListener('click', () => {
        const classy = 'open';

        cards.forEach(card => card.classList.remove(classy));
        card.classList.add(classy);
      });
    });

  /**
   * Toggle class based on flex transition property.
   * @param {TransitionEvent} event
   */
  function toggleOpen(event){
    /**
     * Executed on element event scope.
     * @this {HTMLElement}
     **/

    if (event.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
}
