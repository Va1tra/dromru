export default class CategoryRenderer {

    constructor() {
        this._prevCategory = '';
    }

    render(search, chunk) {
        return Promise.resolve(chunk.map((value) => this._renderItem(search, value)));
    }

    _renderItem(search, {name, category}) {
        let out = '';

        if (this._prevCategory !== category) {
            out += `<div class="list_category">${category}</div>`;
            this._prevCategory = category;
        }

        let label = name.replace(search, `<span class="list_item_intersection">${search}</span>`);

        out += `<div class="list_item" data-value="${name}">${label}</div>`;

        return out;
    }
}
