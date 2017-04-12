# dromru
test assignment

<h2>Test App</h2>

```html

/dist/index.html
```

<h2>Example</h2>

```html

<div class="form-group">
    <label class="form-control-label" for="simple-search">Simple Search: </label>
    <input type="text" class="form-control" id="simple-search">
</div>
```

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="AutoComplete.js" type="text/javascript"></script>

<script type="text/javascript">
    var input = document.getElementById('simple-search');
    var provider = new AutoComplete.NetProvider(function(searchingString) {
        return '/ajax/getAutoCompleteData?search=' + searchingString;
    });
    var renderer = new AutoComplete.SimpleRenderer();

    new AutoComplete.AutoComplete(input, provider, renderer);
</script>
```

<h2>Some Description</h2>

`AutoComplete.AutoComplete` - занимается обработкой событий от поля ввода; скрытием, показом списка с подсказками; выбором
значения из списка; скроллингом; решает, когда можно было бы подгрузить еще данных. В конструктор нужно передать:
- `input` - элемент поля ввода
- `provider` - поставщик данных (берет данные из кэша / просит данные у сервера / другое). Может быть любой объект, реализующий
метод `find(search: string): Promise<Storage>`. Storage должен реализовывать метод `next():Promise<Array<T>>`, возвращающий
данные подсказки, которые отдаются в renderer, либо ошибку, если данных нет. + Storage должен иметь поле `search` со значением
переданным в provider.find. (Зачем next, зачем так сложно? Допустим, чтобы грузить с сервера и показывать результаты 
поиска порциями, а не все 1.000.000 за раз)

```js
class PageNetProvider {
    constructor(url) {
        this.url = url;
    }
    
    find(search) {
        let storage = {
            url: this.url,
            page: 0,
            search: search,
            next: function() {
                return $.get(`${this.url}?search=${this.search}&page=${++this.page}`)
            }
        };

        return Promise.resolve(storage);
    }
}
```

- `renderer` - формирует разметку - то, что будет отображаться в списке подсказок. Может быть любой объект, 
реализующий метод `render(search: string, chunk: Array<T>): Promise<string|Element|Array<Element>|jQuery>`. Promise 
должен отдавать либо html, либо Element, либо Array<Element>, либо jQuery. На созданные элементы списка 
накладывается ограничение: элементы списка должны иметь аттрибут `data-value`, где хранится то, что будет показано 
в поле ввода при выборе этого элемента.

```js
class SimpleRenderer {
    render(search, chunk) {
        return Promise.resolve(chunk.map((value) => this._renderItem(search, value)));
    }

    _renderItem(search, value) {
        let label = value.replace(search, `<span class="list_item_intersection">${search}</span>`);

        return `<div class="list_item" data-value="${value}">${label}</div>`;
    }
}
```

<h3>Some Thoughts</h3>
В принципе, подменяя provider'ы и рендерер'ы, можно добиться покрытия достаточного количества usecase'ов
