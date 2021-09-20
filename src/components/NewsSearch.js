import { useEffect, useState } from "react";
import useFetchNews from "../useFetchNews";
import "./NewsSearch.css";

const NewsSearch = () => {
  const [news, setNews] = useFetchNews();
  const [searchFilter, setSearchFilter] = useState({
    search: "",
    country: "id",
    category: "general",
  });

  const onChangeHandler = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setSearchFilter((searchFilter) => {
      return {
        ...searchFilter,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setNews(searchFilter.search, searchFilter.country, searchFilter.category);
  }, [searchFilter, setNews]);

  const onSubmitHandler = () => {};
  return (
    <div className="newsSearch">
      <form onSubmit={onSubmitHandler}>
        <div className="search">
          <input
            name="search"
            type="text"
            className="searchTerm"
            placeholder="Mau cari berita apa hari ini?"
            onChange={onChangeHandler}
          />
        </div>
        <div className="filterGroup">
          <div className="filter">
            <label htmlFor="country">Negara</label>
            <select
              className="selectTerm"
              name="country"
              onChange={onChangeHandler}
            >
              <option value="id" selected>
                Indonesia
              </option>
              <option value="us">United States of America</option>
              <option value="gb">United Kingdom</option>
              <option value="cn">China</option>
              <option value="hk">Hong Kong</option>
              <option value="in">India</option>
              <option value="jp">Japan</option>
              <option value="kr">South Korea</option>
              <option value="my">Malaysia</option>
              <option value="sg">Singapore</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="category">Kategori</label>
            <select
              className="selectTerm"
              name="category"
              onChange={onChangeHandler}
            >
              <option value="general" selected>
                General
              </option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsSearch;
