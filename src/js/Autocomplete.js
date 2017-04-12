import FakeProvider from 'providers/FakeProvider';
import FakeCategoryProvider from 'providers/FakeCategoryProvider';
import SimpleRenderer from 'renderers/SimpleRenderer';
import CategoryRenderer from 'renderers/CategoryRenderer';
import NetProvider from 'providers/NetProvider';
import _ from 'underscore';

class AutoComplete {
    constructor(input, provider, renderer) {
        this.input = input;
        this.provider = provider;
        this.renderer = renderer;

        this._list = $('<div class="list"></div>')[0];
        this._selected = null;


        this._search = '';
        this._storage = null;
        this._gettingMore = false;

        this._init();
    }

    _showMore() {
        if (!this._gettingMore) {
            this._gettingMore = true;
            this._showSpinner();

            this._storage.next()
                .then((chunk) => this.renderer.render(this._storage.search, chunk))
                .then((html) => {
                    $(this._list).append(html);
                    this._gettingMore = false;
                    this._hideSpinner();
                })
                .catch((error) => {
                    this._gettingMore = false;
                    this._hideSpinner();
                    console.error(error);
                });
        }
    }

    _showSpinner() {}

    _hideSpinner() {}

    _selectNext() {
        if (this._selected) {
            this._getNext(this._selected).forEach(node => $(node).trigger('click'));
        } else {
            [this._list.querySelector('[data-value]')].forEach(node => $(node).trigger('click'));
        }
    }

    _getNext(node) {
        let next = node.nextElementSibling;

        while (next) {
            if (next.hasAttribute('data-value')) {
                return [next];
            }

            next = next.nextElementSibling;
        }

        return [];
    }

    _selectPrev() {
        if (this._selected) {
            this._getPrev(this._selected).forEach(node => $(node).trigger('click'));
        } else {
            [this._list.querySelector('[data-value]')].forEach(node => $(node).trigger('click'));
        }
    }

    _getPrev(node) {
        let prev = node.previousElementSibling;

        while (prev) {
            if (prev.hasAttribute('data-value')) {
                return [prev];
            }

            prev = prev.previousElementSibling;
        }

        return [];
    }

    _scrollToSelectedItemIfNeeded(node) {
        if (node.offsetTop + node.clientHeight > this._list.scrollTop + this._list.clientHeight) {
            this._list.scrollTop = node.offsetTop + node.clientHeight - this._list.clientHeight;
        } else if (node.offsetTop < this._list.scrollTop) {
            this._list.scrollTop = node.offsetTop;
        }
    }

    _init() {
        $(window).on('click', (e) => {
            if ($(this._list).is(':visible') && $(e.target).closest(this._list).length === 0) {
                $(this._list).hide();
            }
        });

        $(this.input).on('input', _.debounce((e) => {
            const search = this.input.value;

            if (search) {
                this.provider.find(search).then((storage) => {
                    this._storage = storage;
                    $(this._list).empty().scrollTop(0).show();
                    this._selected = null;
                    this._showMore();
                });
            } else {
                $(this._list).hide().empty();
                this._selected = null;
            }
        }, 500));

        $(this.input).parent().on('keydown', (e) => {
            if (e.key === 'ArrowUp') {
                this._selectPrev();
            } else if (e.key === 'ArrowDown') {
                this._selectNext();
            }
        });

        let scrollTimeout;

        $(this._list)
            .hide()
            .insertAfter(this.input)
            .on('scroll', _.debounce((e) => {
                if (this._list.scrollHeight - this._list.clientHeight - this._list.scrollTop < Math.max(Math.min(200, this._list.clientHeight * 0.2), 50)) {
                    this._showMore();
                }
                this._list.classList.add('__scrolling');
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => this._list.classList.remove('__scrolling'), 100);
            }, 50))
            .on('click', '[data-value]', (e) => {
                (this._selected ? [this._selected] : []).forEach(node => node.classList.remove('__selected'));
                this._selected = e.currentTarget;
                this._selected.classList.add('__selected');
                this.input.value = this._selected.getAttribute('data-value');

                this._scrollToSelectedItemIfNeeded(e.currentTarget);
            });
    }
}

export {AutoComplete, FakeProvider, SimpleRenderer, FakeCategoryProvider, CategoryRenderer, NetProvider};