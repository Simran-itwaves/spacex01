import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import {
  fetchQueryLaunchesData,
  searchQuery,
  filterDateQuery,
  filterStatusQuery,
  filterUpcomingQuery,
} from "../../Redux/Reducer/Launches/launchesSlice";
import SearchBar from "../../Launches/SearchBar";
import FilterPanel from "../../Launches/FilterPanel";
import ListLaunchData from "../../Launches/ListLaunchData";
import Loader from "../../Component/Loader";

export default function Launches() {
  const [check, setCheck] = useState("all");
  const { loading, query } = useSelector((state) => state.launches);
  const dispatch = useDispatch();
  const handleSearchData = debounce((value) => {
    dispatch(searchQuery(value));
  }, 500);
  const handleLaunchDate = (value) => {
    setCheck(value);
    dispatch(filterDateQuery(value));
  };
  const handleLaunchStatus = (value) => {
    dispatch(filterStatusQuery(value));
  };
  const handleLaunchUpcoming = (checked) => {
    dispatch(filterUpcomingQuery(checked));
  };
  const handleClearFilter = () => {
    setCheck("all");
  };
  useEffect(() => {
    dispatch(
      fetchQueryLaunchesData({
        query,
        options: {},
      })
    );
  }, [dispatch, query]);
  return (
    <>
      <SearchBar handleSearchData={handleSearchData} />
      <div className="d-flex">
        <div className="p-4 mt-4 border" style={{ width: "20%" }}>
          <FilterPanel
            check={check}
            handleLaunchDate={handleLaunchDate}
            handleLaunchStatus={handleLaunchStatus}
            handleLaunchUpcoming={handleLaunchUpcoming}
            handleClearFilter={handleClearFilter}
          />
        </div>
        <div className="mx-auto w-auto">
          {loading ? <Loader /> : <ListLaunchData query={query} />}
        </div>
      </div>
    </>
  );
}
