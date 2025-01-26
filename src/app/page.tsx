"use client";

import Form from "@/componnent/Form";



export default function HomePage() {
  const handleLogin = (values: Record<string, string>) => {
    const { username, password } = values;
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location.href = "/homepage";
    } else {
      alert("ผู้ใช้งานต้องทำการลงทะเบียนเพื่อใช้งานชั่วคราว สิทธิ์ใช้งานจะสามารถใช้ได้30นาที");
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
