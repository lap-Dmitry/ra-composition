// Показывает заголовки новостей

import { nanoid } from "nanoid";

export default function NewsTitles({ titles }) {
    return (
        <div className="new_box__titles">
            {titles.map((title) => (
                <span className="news_box__title" key={nanoid()} title={title} href="#">{title}</span>
            ))}
        </div>
    );
}
