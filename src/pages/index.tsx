import Button from "@/components/ui/Button";
import { createFetch } from "@/libs/fetch";
import { getClassifications } from "@/services/rpt";

export default function Home() {
  const { value: classifications, execute } = createFetch(getClassifications);

  function classificationHandler() {
    execute();
  }

  return (
    <main>
      <h1 className="bg-orange-300">Home Page</h1>
      <Button text="View Partners" href="/partners" />
      <Button text="Classifications" onClick={classificationHandler} />

      <pre>{JSON.stringify(classifications)}</pre>
    </main>
  );
}
