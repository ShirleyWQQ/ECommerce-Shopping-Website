import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import ProductCard from "./ProductCard";;

let PageSize = 10;

// props: data(product[])
export default function ProductList(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return props.data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <div className="flex-container" style={{ gap: "15px 20px" }}>
        {currentTableData.map((item, index) => (
          <ProductCard
            key={index}
            name={item.product_name}
            price={item.price}
            description={item.description}
            image={item.picture_source}
            product_id={item.product_id}
            rating={item.product_rating}
          />
        ))}
      </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={props.data.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
    </div>
  );
}
