import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'No results were found';

  addHandlerRender(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      if (btn.classList.contains('pagination__btn--next')) return handler(1);
      if (btn.classList.contains('pagination__btn--prev')) return handler(-1);
    });
  }
  generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    let markup = '';

    if (numPages === 1) return markup;

    if (this.hasPreviousPage()) {
      markup = `
          <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
        </button>
        `;
    }

    if (this.hasNextPage(numPages)) {
      markup += `
        <button class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button> 
    `;
    }
    return markup;
  }

  hasPreviousPage() {
    return this._data.page !== 1;
  }

  hasNextPage(numPages) {
    return numPages !== this._data.page;
  }
}

export default new PaginationView();
