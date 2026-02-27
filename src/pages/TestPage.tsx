import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";

export function TestPage() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Test UI Components</h2>

      <Input
        value={name}
        onChange={setName}
        placeholder="Enter your name"
      />

      <br /><br />

      <Button onClick={() => alert(name)}>
        Submit
      </Button>
    </div>
  );
}