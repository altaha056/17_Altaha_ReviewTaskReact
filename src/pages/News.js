import NewsList from "../components/NewsList";
import NewsSearch from "../components/NewsSearch";

const News = () => {
  return (
    <>
      <NewsSearch />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <NewsList />
      </div>
    </>
  );
};

export default News;
