// Показывает список избранных новостей

import { nanoid } from "nanoid";

export default function NewsList({ news }) {
    return (
        <div className="news_list">
            {news.map((item) => (
                <div className="news_list__new" key={nanoid()}>
                    <a href="/some/valid/uri" className="new_link">
                        <span className="new_img"></span>
                        <span className="new_title">{item}</span>
                    </a>
                </div>
            ))}
        </div>
    );
}
