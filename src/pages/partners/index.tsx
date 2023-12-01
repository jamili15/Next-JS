import React, { useEffect, useState } from "react";
import { getPartners } from "../../stores/partners";

import type { Partner } from "../../stores/partners";

import PartnerListItem from "@/components/partners/PartnerListItem";

function Partners({ partners }: { partners: Partner[] }) {
  return (
    <div>
      <h1>List of Partners</h1>
      {partners.map((partner) => {
        return <PartnerListItem key={partner.id} partner={partner} />;
      })}
    </div>
  );
}

export default Partners;

/*================================================*/

export async function getStaticProps() {
  console.log(">>> getStaticProps");
  const partners = getPartners();

  return {
    props: {
      partners,
    },
  };
}
