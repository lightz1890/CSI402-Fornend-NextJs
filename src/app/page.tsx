"use client";

import Form from "@/componnent/Form";



export default function HomePage() {
  const handleLogin = (values: Record<string, string>) => {
    const { username, password } = values;
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location.href = "/homepage";
    } else {
      alert("กรุณาลงทะเบียนเพื่อใช้สิทธิ์ชั่วคราว(30 นาที)");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <Form
        title="Login"
        fields={[
          { label: "Username", type: "text", name: "username" },
          { label: "Password", type: "password", name: "password" },
        ]}
        onSubmit={handleLogin}
      />
    </div>
  );
}
