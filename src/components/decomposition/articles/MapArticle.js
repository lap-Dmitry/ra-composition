// Показывает содержимое блока "Карта Германии"

export default function MapArticle ({ article }) {
    
    return (
        <div className="article_content map">
            {article.content}
        </div>
    );
}
