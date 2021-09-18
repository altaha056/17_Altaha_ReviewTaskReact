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
          <input name="search" type="text" className="searchTerm" placeholder="What are you looking for?" onChange={onChangeHandler} />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="filterGroup">
          <div className="filter">
            <label htmlFor="country">Country</label>
            <select className="selectTerm" name="country" onChange={onChangeHandler}>
              <option value="id" selected>
                Indonesia
              </option>
              <option value="us">United States of America</option>
              <option value="gb">United Kingdom</option>
              <option value="ae">United Arab Emirates</option>
              <option value="ar">Argentina</option>
              <option value="at">Austria</option>
              <option value="au">Australia</option>
              <option value="be">Belgium</option>
              <option value="bg">Bulgaria</option>
              <option value="br">Brazil</option>
              <option value="ca">Canada</option>
              <option value="ch">Switzerland</option>
              <option value="cn">China</option>
              <option value="co">Colombia</option>
              <option value="cu">Cuba</option>
              <option value="cz">Czech Republic</option>
              <option value="de">Germany</option>
              <option value="eg">Egypt</option>
              <option value="fr">France</option>
              <option value="gr">Greece</option>
              <option value="hk">Hong Kong</option>
              <option value="hu">Hungary</option>
              <option value="ie">Ireland</option>
              <option value="il">Israel</option>
              <option value="in">India</option>
              <option value="it">Italy</option>
              <option value="jp">Japan</option>
              <option value="kr">South Korea</option>
              <option value="lt">Lithuania</option>
              <option value="lv">Latvia</option>
              <option value="ma">Morocco</option>
              <option value="mx">Mexico</option>
              <option value="my">Malaysia</option>
              <option value="ng">Nigeria</option>
              <option value="nl">Netherlands</option>
              <option value="no">Norway</option>
              <option value="nz">New Zealand</option>
              <option value="ph">Philippines</option>
              <option value="pl">Poland</option>
              <option value="pt">Portugal</option>
              <option value="ro">Romania</option>
              <option value="rs">Serbia</option>
              <option value="ru">Russian Federation</option>
              <option value="sa">Saudi Arabia</option>
              <option value="se">Sweden</option>
              <option value="sg">Singapore</option>
              <option value="si">Slovenia</option>
              <option value="sk"> Slovakia</option>
              <option value="th">Thailand</option>
              <option value="tr">Turkey</option>
              <option value="tw">Taiwan</option>
              <option value="ua">Ukraine</option>
              <option value="ve"> Venezuela</option>
              <option value="za">Zambia</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="category">Category</label>
            <select className="selectTerm" name="category" onChange={onChangeHandler}>
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
