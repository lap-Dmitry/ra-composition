// Показывает финансовые новости

import { nanoid } from "nanoid";

export default function FinancialNews({ stats }) {
    return (
        <div className="financial_news">
            {stats.map((stat) => (
                <div className="financial_news__new" key={nanoid()}>
                    <span className="fin_title">{stat.title}</span>
                    <span className="fin_cource">{stat.cource}</span>
                    <span className="fin_change">{stat.exchange}</span>
                </div>
            ))}
        </div>
    );
}
