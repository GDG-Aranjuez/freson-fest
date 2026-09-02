import React, { useState, useEffect, useRef } from "react";

export const BackgroundRippleEffect = () => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState({ rows: 12, cols: 20, cellWidth: 0 });

  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      let cols = 20;
      if (width < 640)
        cols = 8; // Móvil: 8 celdas de ancho
      else if (width < 1024) cols = 14; // Tablet: 14 celdas

      const cellWidth = width / cols;
      const rows = Math.ceil(height / cellWidth);

      setGrid({ rows, cols, cellWidth });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const { rows, cols, cellWidth } = grid;

  const handleCellClick = (row: number, col: number) => {
    setClickedCell({ row, col });
  };

  return (
    <div
      ref={containerRef}
      className="relative z-0 h-full w-full opacity-35 select-none overflow-hidden grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {cellWidth > 0 &&
        Array.from({ length: rows }).map((_, rIdx) =>
          Array.from({ length: cols }).map((_, cIdx) => {
            let distance = 0;
            if (clickedCell) {
              distance = Math.sqrt(
                Math.pow(rIdx - clickedCell.row, 2) +
                  Math.pow(cIdx - clickedCell.col, 2)
              );
            }

            const isRippling = clickedCell !== null;
            const delay = distance * 35;

            return (
              <div
                key={`${rIdx}-${cIdx}`}
                onClick={() => handleCellClick(rIdx, cIdx)}
                style={{
                  height: `${cellWidth}px`,
                  animationDelay: isRippling ? `${delay}ms` : "0ms",
                }}
                className={`border-r border-b border-[#272421] w-full cursor-pointer transition-colors duration-200 hover:bg-orange-500/20 ${
                  isRippling ? "animate-ripple" : ""
                }`}
                onAnimationEnd={() => {
                  if (rIdx === rows - 1 && cIdx === cols - 1) {
                    setClickedCell(null);
                  }
                }}
              />
            );
          })
        )}
    </div>
  );
};

export default BackgroundRippleEffect;
