import Button from "@/components/ui/Button";
import { createFetch } from "@/libs/fetch";
import { getClassification } from "@/services/classifications";
import { useState } from "react";

export default function Home() {
  const [processing, setProcessing] = useState(false);

  const { value: classifications, execute } = createFetch(getClassification);

  async function helloHandler() {
    const res = await fetch("/api/hello");
    const data = await res.json();
    console.log("data", data);
  }

  function classificationHandler() {
    execute();
  }

  return (
    <main>
      <h1 className="bg-red-300">Home Page</h1>
      <Button text="View Partners" href="/partners" />
      <Button text={"Say hello"} onClick={helloHandler} />
      <Button text="Classifications" onClick={classificationHandler} />

      <pre>{JSON.stringify(classifications)}</pre>
    </main>
  );
}
