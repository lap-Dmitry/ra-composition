// Показывает категории поиска

import { nanoid } from "nanoid";

export default function SearchCategoties({ categories }) {
    return (
        <div className="search_categories">
            {categories.map((category) => (
                <a href="/some/valid/uri" className="search_category__link" key={nanoid()}>{category}</a>
            ))}
        </div>
    );
}
