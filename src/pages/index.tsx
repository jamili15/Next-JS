import Button from "@/components/ui/Button";

export default function Home() {
  async function helloHandler() {
    const res = await fetch("/api/hello");
    const data = await res.json();
    console.log("data", data);
  }

  return (
    <main>
      <h1 className="bg-red-300">Home Page</h1>
      <Button text="View Partners" href="/partners" />
      <Button text={"Say hello"} onClick={helloHandler} />
    </main>
  );
}
