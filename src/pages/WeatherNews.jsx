import React, { useEffect, useState } from 'react';
import '../styles/WeatherNews.css';

const WeatherNews = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `http://api.mediastack.com/v1/news?access_key=e37d11bcbefa0df5caf8f57d4d1c3792&languages=en&keywords=weather,climate,environment&limit=8`
                );
                const data = await response.json();
                if (data.data) {
                    setArticles(data.data);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news:", error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="weather-news">
            <h2>Latest Weather & Climate News</h2>
            {loading ? (
                <p>Loading news...</p>
            ) : articles.length ? (
                <div className="news-cards">
                    {articles.map((article, idx) => (
                        <div key={idx} className="news-card">
                            {article.image && <img src={article.image} alt="news" />}
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No weather news available right now.</p>
            )}
        </div>
    );
};

export default WeatherNews;
