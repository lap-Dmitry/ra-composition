// Показывает содержимое блока с погодой

export default function WeatherArticle({ article }) {

    return (
        <div className="article_content weather">
            <span className="weather_preview"></span>
            <span className="weather_temp">{`${article.temperature}C`}</span>
            <span className="weather_period">
            <span className="start_temp">{`Утром ${article.periodTemperature["Утром"]}`}</span>
            <span className="end_temp">{`Днём ${article.periodTemperature["Днём"]}`}</span>
            </span>
        </div>
    );
}
