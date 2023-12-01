import React from "react";
import { Partner } from "../../stores/partners";
import Button from "../ui/Button";
import { useRouter } from "next/router";

function PartnerDetail({ partner }: { partner: Partner }) {
  const router = useRouter();

  //programmatic routing
  function viewParnterHandler() {
    router.push(`/partners/${partner.id}`);
  }

  return (
    <div className="p-10 m-5 border border-black">
      <h2>{partner.id}</h2>
      <p>{partner.name}</p>
      <Button text={"View Partner"} onClick={viewParnterHandler} />
    </div>
  );
}

export default PartnerDetail;
