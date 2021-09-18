import axios from "axios";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNews } from "./store/actions";

const useFetchNews = () => {
  const { news } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setNews = useCallback(
    async (q, country, category) => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=5aebab0194654838bee351d4ba314fe3&q=${q}&category=${category}&country=${country}`);
        const updatedNews = response.data.articles.map((article) => {
          return {
            title: article.title,
            description: article.description,
            content: article.content,
            source: article.url,
            publishedAt: article.publishedAt,
            author: article.source.name,
            image: article.urlToImage,
          };
        });
        dispatch(updateNews(updatedNews));
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch]
  );
  return [news, setNews];
};

export default useFetchNews;
