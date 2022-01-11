// Показывает содержимое блока "Посещаемое"

import { nanoid } from "nanoid";

export default function VisitedArticle({ article }) {
    const entries = Object.entries(article.content);

    return (
        <div className="article_content visited">
            {entries.map((item) => (
                <div className="visited_item" key={nanoid()}>
                    <span>{item[0]}</span>
                    <span>{`- ${item[1]}`}</span>
                </div>
            ))}
        </div>
    );
}
