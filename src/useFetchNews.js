import axios from "axios";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNews } from "./store/actions";

const useFetchNews = () => {
  const { news } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setNews = useCallback(
    async (search, country, category) => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?apiKey=e2c33fa4d8af42bf8273a226d28060e6&q=${search}&category=${category}&country=${country}`
        );
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
