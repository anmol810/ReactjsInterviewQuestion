import React, { useRef, useState, useEffect } from "react";

const VirtualizedList = ({ items, itemHeight = 50, containerHeight = 400 }) => {
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const endIndex = startIndex + visibleCount;

  const visibleItems = items.slice(startIndex, endIndex);

  // padding to simulate full scrollable space
  const topPaddingHeight = startIndex * itemHeight;
  const bottomPaddingHeight = (items.length - endIndex) * itemHeight;

  useEffect(() => {
    const container = containerRef.current;
    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const newStartIndex = Math.floor(scrollTop / itemHeight);
      setStartIndex(newStartIndex);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [itemHeight]);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${containerHeight}px`,
        overflowY: "auto",
        border: "1px solid #ccc",
      }}
    >
      <div
        className="topPaddingHeight"
        style={{ height: `${topPaddingHeight}px` }}
      />
      {visibleItems.map((item, i) => (
        <div
          key={startIndex + i}
          style={{
            height: `${itemHeight}px`,
          }}
        >
          {item}
        </div>
      ))}
      <div
        className="bottomPaddingHeight"
        style={{ height: `${bottomPaddingHeight}px` }}
      />
    </div>
  );
};
export default VirtualizedList;
