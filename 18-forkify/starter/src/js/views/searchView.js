class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.clearInput();
    return query;
  }

  addHandlerRender(handle) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });
  }

  clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
