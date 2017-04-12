const letters = 'abcdefghijklmnopqrstyxwz -|';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generate(search, category) {
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

    return {name, category};
}

export default class FakeCategoryProvider {
    find(search) {
        let n = getRandomInt(0, 100);
        // let n = getRandomInt(500, 3000);
        let data = [];

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < 5; j++) {
                data.push(generate(search, `category ${i}`));
            }
        }


        let storage = {
            search: search,
            next: function() {
                if (data.length === 0) {
                    return Promise.reject('no next items');
                } else {
                    // return Promise.resolve(data);
                    let out = [];

                    for (let i = 0; i < 13 && data.length !== 0; ++i) {
                        out.push(data.shift());
                    }

                    return Promise.resolve(out);
                }
            }
        };

        return Promise.resolve(storage);
    }
}
