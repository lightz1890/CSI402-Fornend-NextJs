"use client";

import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    const isLoggedIn = true; // เปลี่ยนเป็นการตรวจสอบสถานะจริง
    if (!isLoggedIn) {
      alert("You must be logged in to access this page.");
      window.location.href = "/";
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Homepage</h1>
      <p>Welcome to your homepage! You are now logged in.</p>
    </div>
  );
}
