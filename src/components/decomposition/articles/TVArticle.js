// Показывает содержимое блока "Телепрограмма" 

import { nanoid } from "nanoid";

export default function TVArticle({ article }) {
    return (
        <div className="article_content tv">
            {article.content.map((item) => (
                <div className="tv_item" key={nanoid()}>
                    <span>{item.time}</span>
                    <span>{item.programm}</span>
                    <span>{item.channel}</span>
                </div>
            ))}
        </div>
    );
}
