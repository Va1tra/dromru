export default class NetProvider {

    constructor(generateUrlFn) {
        this._generateUrlFn = generateUrlFn;
    }

    find(search) {
        let storage = {
            _requestPromise: '',
            next: function() {
                if (this._requestPromise) {
                    return Promise.reject('no next items');
                } else {
                    this._requestPromise = $.get(this.generateUrlFn(search));

                    return this._requestPromise;
                }
            }
        };

        return Promise.resolve(storage);
    }
}
