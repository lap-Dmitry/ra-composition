// Показывает рекламный блок Яндекса

export default function AdvWidget() {
    return (
        <div className="adv_box">
            <span className="adv_preview"></span>
            <a href="/some/valid/uri" className="adv_link">Работа над ошибками</a>
            <span>Смотрите на Яндексе и запоминайте</span>
        </div>
    );
}
