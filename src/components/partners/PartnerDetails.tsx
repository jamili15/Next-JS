import { Partner } from "../../stores/partners";

function PartnerDetail({ partner }: { partner: Partner }) {
  return (
    <div className="p-10 m-5 border border-black">
      <h2>ID: {partner.id}</h2>
      <p>PIN: {partner.pin}</p>
      <p>NAME: {partner.name}</p>
    </div>
  );
}

export default PartnerDetail;
