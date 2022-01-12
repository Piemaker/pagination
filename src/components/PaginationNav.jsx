import React from 'react'
import { useGlobalContext } from '../context'
import { Pagination } from 'react-bootstrap';
export default function PaginationNav() {
    const {isLoading, maxPages, currentPage, setCurrentPage} = useGlobalContext();
    let out;
    if(!isLoading){
      let pagesArr = Array.from({length: maxPages}, (v, i) => (i + 1))
      out = pagesArr.map(pageNum => {
        return (
          <Pagination.Item key={pageNum} active={pageNum === currentPage} onClick = {()=>{setCurrentPage(pageNum)}}>
            {pageNum}
          </Pagination.Item>
        );
      })
    }

    return (
      <Pagination className="justify-content-center flex-wrap" size="sm">
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        />
        {out}
        <Pagination.Next
          onClick={() => currentPage < maxPages && setCurrentPage(currentPage + 1)}
        />
        <Pagination.Last onClick={() => setCurrentPage(maxPages)} />
      </Pagination>
    );
}
