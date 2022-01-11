// Отображает нижний блок: Погода, посещаемое, карта, телепрограмма и эфир

import ArticleItem from './ArticleItem';
import WeatherArticle from './WeatherArticle';
import VisitedArticle from './VisitedArticle';
import MapArticle from './MapArticle';
import TVArticle from './TVArticle';
import EtherArticle from './EtherArticle';

export default function ArticlesWidget({ articles }) {
    
    return (
        <div className="articles_box">
            <ArticleItem article={articles[0]}>
                <WeatherArticle article={articles[0]}/>
                </ArticleItem>

                <ArticleItem article={articles[1]}>
                <VisitedArticle article={articles[1]}/>
                </ArticleItem>

                <ArticleItem article={articles[2]}>
                <MapArticle article={articles[2]}/>
                </ArticleItem>

                <ArticleItem article={articles[3]}>
                <TVArticle article={articles[3]}/>
                </ArticleItem>

                <ArticleItem article={articles[4]}>
                <EtherArticle article={articles[4]}/>
                </ArticleItem>
        </div>
    );
}
