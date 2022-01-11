import style from "./pagination.module.css";

import { range } from "lodash";

const Pagination = ({
  totalData,
  currentPage,
  setCurrentPage,
  perPage,
  onChangePage,
}) => {
  const pageCount = Math.ceil(totalData / perPage);
  console.log(pageCount, totalData);

  const pages = range(1, pageCount + 1);
  return (
    <>
      <div>
        <div className={style.container}>
          <div
            className={style.arrowPagination}
            onClick={() =>
              currentPage === 1 ? null : setCurrentPage(currentPage - 1)
            }
          >
            <i className={`fa fa-angle-left`} />
          </div>
          {pages.map((page) => {
            return (
              <div className={style.pagination}>
                {" "}
                <span
                  className={`${style.pageNum} ${
                    page === currentPage ? `${style.active}` : null
                  }`}
                  onClick={() => onChangePage(page)}
                >
                  {page}
                </span>
              </div>
            );
          })}
          <div
            className={style.arrowPagination}
            onClick={() =>
              pages.length === currentPage
                ? null
                : setCurrentPage(currentPage + 1)
            }
          >
            <i className={`fa fa-angle-right`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
