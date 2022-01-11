// Отображает название блока и сам блок

export default function ArticleItem(props) {
    const { article } = props;

    return (
        <div className="article_item">
            <h3 className="article_title">
                {article.title}
            </h3>
            {props.children}
        </div>
    );
}
