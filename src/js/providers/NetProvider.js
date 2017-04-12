export default class NetProvider {

    constructor(generateUrlFn) {
        this._generateUrlFn = generateUrlFn;
    }

    find(search) {
        let storage = {
            _requestWasMade: false,
            _url: this._generateUrlFn(search),
            search: search,
            next: function() {
                if (this._requestWasMade) {
                    return Promise.reject('no next items');
                } else {
                    this._requestWasMade = true;

                    return $.get(this._url);
                }
            }
        };

        return Promise.resolve(storage);
    }
}
