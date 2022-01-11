// Показывает содержимое блока "Эфир"

import { nanoid } from "nanoid";

export default function EtherArticle({ article }) {
    return (
        <div className="article_content ether">
            {article.content.map((item) => (
                <div className="ether_item" key={nanoid()}>
                    <span></span>
                    <span>{item.programm}</span>
                    <span>{item.channel}</span>
                </div>
            ))}
        </div>
    );
}
