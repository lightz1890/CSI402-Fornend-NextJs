"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "10px", backgroundColor: "#ddd" }}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/register">Register</Link>
      </nav>
    </header>
  );
}
