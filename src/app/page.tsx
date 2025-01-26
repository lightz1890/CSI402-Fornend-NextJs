"use client";

import Form from "@/componnent/Form";



export default function HomePage() {
  const handleLogin = (values: Record<string, string>) => {
    const { username, password } = values;
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location.href = "/homepage";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the App</h1>
      <p>Please log in to access your homepage.</p>

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
