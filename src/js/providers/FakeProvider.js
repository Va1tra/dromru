const letters = 'abcdefghijklmnopqrstyxwz -|';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generate(search) {
    const n1 = getRandomInt(0, Math.floor(letters.length / 3));
    const n2 = getRandomInt(0, Math.floor(letters.length / 3));

    let name = '';

    for (let i = 0; i < n1; i++) {
        name += letters[getRandomInt(0, letters.length)];
    }

    name += search;

    for (let i = 0; i < n2; i++) {
        name += letters[getRandomInt(0, letters.length)];
    }

    return name;
}

export default class FakeProvider {
    find(search) {
        let n = getRandomInt(0, 100);

        let storage = {
            i: 0,
            search: search,
            next: function() {
                if (this.i > n) {
                    return Promise.reject('no next items');
                } else {
                    let out = [];

                    for (let j = 0; j < 20; ++j) {
                        out.push(generate(search));
                    }

                    this.i += out.length;

                    return Promise.resolve(out);
                }
            }
        };

        return Promise.resolve(storage);
    }
}
