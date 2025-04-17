"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="hidden touch:block"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "24px",
        height: "24px",
        backgroundColor: "#F85B93",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        transition: "top 0.05s ease, left 0.05s ease",
      }}
    />
  );
};

export default CustomCursor;
