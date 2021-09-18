import { useEffect } from "react";
import useFetchNews from "../useFetchNews";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [news, setNews] = useFetchNews();
  useEffect(() => {
    setNews();
  }, [setNews]);

  return (
    <div className="blog-cards">
      {news.map((e, i) => (
        <NewsItem key={i} title={e.title} author={e.author} content={e.content} image={e.image} description={e.description} source={e.source} publishedAt={e.publishedAt} />
      ))}
    </div>
  );
};

export default NewsList;
