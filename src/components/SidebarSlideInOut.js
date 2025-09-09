import { useState } from "react";

export function SidebarSlideInOut({ isOpen, onClose }) {

    const body = document.body;

    if(isOpen===true) 
        body.style.overflow ="hidden";
    else
         body.style.overflow ="scroll";

  return (
    <div
      style={{
        position: "fixed",
        top: 60,
        right: isOpen ? 0 : "-50%", // slide in/out
        overflowY: "auto",
        maxHeight: "100vh",
        width: "50%",
        height: "100%",
        background: "#f9fafb",
        boxShadow: "rgba(0,0,0,0.1) -2px 0 8px",
        transition: "right 0.3s ease",
        padding: "20px",
        zIndex:"1000"
      }}
    >
      <h2>Sidebar</h2>
      <p>This is a sliding sidebar.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export function ToggleSidebarButton({ onToggle }) {
  return (
    <button className="btn"
      onClick={onToggle}
    >
        View Outline
    </button>
  );
}
