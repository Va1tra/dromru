export default class SimpleRenderer {
    render(search, chunk) {
        return Promise.resolve(chunk.map((value) => this._renderItem(search, value)));
    }

    _renderItem(search, value) {
        let label = value.replace(search, `<span class="list_item_intersection">${search}</span>`);

        return `<div class="list_item" data-value="${value}">${label}</div>`;
    }
}
