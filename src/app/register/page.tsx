"use client";

import Form from "@/componnent/Form";



export default function RegisterPage() {
  const handleRegister = (values: Record<string, string>) => {
    const { username} = values;
    alert(`Registered successfully! Username: ${username}`);
    window.location.href = "/";
  };

  return (
    <Form
      title="Register"
      fields={[
        { label: "Username", type: "text", name: "username" },
        { label: "Password", type: "password", name: "password" },
      ]}
      onSubmit={handleRegister}
    />
  );
}