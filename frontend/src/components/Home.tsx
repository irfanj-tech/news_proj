// src/components/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import InArticleAd from "./InArticleAd";

interface NewsProps {
  news: any[];
  search: string;
}

const Home: React.FC<NewsProps> = ({ news, search }) => {
  const searchString = search.toLowerCase();
  const filteredNews = news.filter((data: any) =>
    data.title.toLowerCase().includes(searchString)
  );

  const getImageUrl = (article: any) => {
    if (article.urlToImage) {
      // External articles with 'urlToImage'
      return article.urlToImage;
    } else if (article.cover) {
      // Internal articles with 'cover' object
      const baseUrl = process.env.REACT_APP_STRAPI_URL; // Replace with your actual base URL
      const imageUrl =
        article.cover.formats?.small?.url ||
        article.cover.formats?.thumbnail?.url ||
        article.cover.url;

      return imageUrl ? `${baseUrl}${imageUrl}` : null;
    }
    return "https://thumb.ac-illust.com/01/01eac46286df4cb7141656e2acc61eef_t.jpeg";
  };

  return (
    <div className="container mx-auto px-4">
      <hr className="mt-5" />
      <h1 className="bg-red-600 w-10 h-1 ml-4">.</h1>
      <h1 className="ml-4 font-bold text-sm">MORE TOP STORIES</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {filteredNews.length === 0 ? (
          <p>No news articles available.</p>
        ) : (
          filteredNews.map((data: any, index: number) => (
            <React.Fragment key={data.url || index}>
              {/* Insert In-Article Ad after every 5 articles */}
              {index > 0 && index % 5 === 0 && <InArticleAd />}
              <Link to="/details" state={{ data }}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <img
                    src={getImageUrl(data)}
                    alt={data.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.title}</div>
                    <p className="text-gray-700 text-base">
                      {data.description}
                    </p>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
