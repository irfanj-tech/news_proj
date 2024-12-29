// src/components/Main.tsx
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Menubar from "./Menubar";
import Breaking from "./Breaking";
import Footer from "./Footer";
import AdBanner from "./AdBanner";
import PopupAd from "./PopupAd";
import "../App.css"; // Ensure this import exists

const Main: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [menu, setMenu] = useState<string>("Politics");
  const [search, setSearch] = useState<string>("");

  const searchRef = useRef<HTMLInputElement | null>(null);

  const getNews = async () => {
    try {
      const strapiResponse = await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/api/articles?populate=*`
      );
      const strapiData = await strapiResponse.json();

      const strapiArticles = strapiData.data.map((item: any) => {
        const attributes = item || {};
        const blocks = attributes.blocks
          .map((block: any) => {
            if (block.__component === "shared.quote") {
              return { type: "quote", title: block.title, body: block.body };
            } else if (block.__component === "shared.rich-text") {
              return { type: "rich-text", body: block.body };
            } else if (block.__component === "shared.you-tube-video") {
              return {
                type: "you-tube-video",
                url: block.URL,
                description: block.Description,
              };
            }

            return null;
          })
          .filter(Boolean); // Remove any null values

        return {
          id: attributes.id,
          title: attributes.title || "No title available",
          description: attributes.description || "No description available",
          slug: attributes.slug || "No slug available",
          cover: attributes.cover,
          blocks: blocks,
        };
      });

      const externalResponse = await fetch(
        `https://newsapi.org/v2/everything?q=${
          menu ? menu : "politics"
        }&sortBy=popularity&apiKey=7c73bb31409f4f66958cadb605ae0bce`
      );
      const externalData = await externalResponse.json();
      const externalArticles = externalData.articles || [];

      // Filter out articles where title is "[Removed]"
      const filteredExternalArticles = externalArticles.filter(
        (article: any) => article.title !== "[Removed]"
      );

      setNews([...strapiArticles, ...filteredExternalArticles]);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  useEffect(() => {
    getNews();
  }, [menu]);

  return (
    <>
      <Navbar setMenu={setMenu} setSearch={setSearch} searchRef={searchRef} />
      <Menubar news={news} />
      {/* Main Content with margins on large screens */}
      <div className="main-content">
        <div className="px-4">
          <Breaking news={news} menu={menu} />
          <Home news={news} search={search} />
        </div>
      </div>

      <Footer setMenu={setMenu} />
    </>
  );
};

export default Main;
