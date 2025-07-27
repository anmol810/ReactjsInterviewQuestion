import { useEffect, useRef, useState } from "react";
const InfiniteScrollList = () => {
  const [items, setItems] = useState([...Array(10).keys()]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  const loadMore = () => {
    const newItems = [...Array(10).keys()].map((i) => i + page * 10);
    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 1.0,
      }
    );
    if (loaderRef?.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef?.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef.current]);
  return (
    <>
      {items?.map((i) => {
        return (
          <div
            style={{
              padding: "16px",
              margin: "8px 0",
              backgroundColor: "#eee",
              borderRadius: "8px",
            }}
            key={i}
          >{`Key-${i + 1}`}</div>
        );
      })}
      <p ref={loaderRef}>Loading...</p>
    </>
  );
};
export default InfiniteScrollList;
