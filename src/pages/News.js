import NewsList from "../components/NewsList";
import NewsSearch from "../components/NewsSearch";

const News = () => {
  return (
    <main className="news">
      <NewsSearch />
      <NewsList />
    </main>
  );
};

export default News;
