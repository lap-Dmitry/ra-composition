// Показывает поисковое поле

export default function SearchInput() {
    return (
        <div className="search_input">
            <a href="/some/valid/uri" className="logo">Яндекс</a>
            <input type="text" className="search_input__field "/>
            <button className="search_btn">Найти</button>
        </div>
    );
}
