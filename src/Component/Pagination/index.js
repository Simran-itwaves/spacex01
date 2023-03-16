import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import classes from "./pagination.module.css";
import { fetchQueryLaunchesData } from "../../Redux/Reducer/Launches/launchesSlice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Pagination({ query }) {
  const { totalPages, page } = useSelector((state) => state.launches);
  const dispatch = useDispatch();
  function handlePageClick(e) {
    dispatch(
      fetchQueryLaunchesData({
        query,
        options: {
          page: e.selected + 1,
        },
      })
    );
  }
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="<<"
        nextLabel=">>"
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={5}
        forcePage={page - 1}
        pageCount={totalPages}
        disableInitialCallback={true}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName={classes.pagination}
        breakLinkClassName={classes.page_link}
        pageLinkClassName={classes.page_link}
        previousLinkClassName={classes.page_link}
        nextLinkClassName={classes.page_link}
        activeClassName={classes.active}
        disabledClassName={classes.disable}
      />
    </div>
  );
}
