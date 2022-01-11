// Показывает блок с новостями

import NewsTitles from './NewsTitles';
import NewsDate from './NewsDate';
import NewsList from './NewsList';
import FinancialNews from './FinancialNews';
import { financialNews } from '../../../models/Content';

export default function NewWidget(props) {
    const { news } = props;
    const titles = Object.keys(news);
    const newsList = news['Сейчас в СМИ'];

    return (
        <div className="news_box">
            <div className="news_box__header">
                <NewsTitles titles={titles} />
                <NewsDate />                
                </div>
                <NewsList news={newsList} />
                <FinancialNews stats={financialNews} />
                </div>
    );
}
