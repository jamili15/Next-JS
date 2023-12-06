import Button from "@/components/ui/Button";
import { createFetch } from "@/libs/fetch";
import { getClassifications, saveClassifications } from "@/services/rpt";

export default function Home() {
  const { value, processing, error, execute } =
    createFetch(saveClassifications);

  function classificationHandler() {
    execute();
  }
  function saveClassificationHandler() {
    const classification = {
      code: "TEST1234",
      name: "TEST 234",
      special: true,
      orderno: 5,
    };
    execute(classification);
  }

  return (
    <main>
      <h1 className="bg-orange-300">Home Page</h1>
      <div className="flex gap-2">
        <Button text="View Partners" href="/partners" />
        <Button
          text="Classifications"
          onClick={classificationHandler}
          disabled={processing}
        />
        <Button
          text={"Save Classification"}
          onClick={saveClassificationHandler}
          disabled={processing}
        />
      </div>
      {error && <p>ERROR: {error}</p>}
      <pre>{JSON.stringify(value)}</pre>
    </main>
  );
}
