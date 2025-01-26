"use client";

import { useState } from "react";

interface FormProps {
  title: string;
  fields: { label: string; type: string; name: string }[];
  onSubmit: (values: Record<string, string>) => void;
}

export default function Form({ title, fields, onSubmit }: FormProps) {
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", maxWidth: "400px", margin: "0 auto" }}>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <label>{field.label}:</label>
            <input
              type={field.type}
              style={{ display: "block", width: "100%", padding: "5px", marginTop: "5px" }}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          </div>
        ))}
        <button type="submit" style={{ padding: "10px 15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
