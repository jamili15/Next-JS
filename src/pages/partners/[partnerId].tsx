import React from "react";
import { useRouter } from "next/router";
import PartnerDetail from "@/components/partners/PartnerDetails";

function Partner({ partner }: { partner: Partner }) {
  if (!partner) {
    return <div>Invalid Partner ID</div>;
  }
  return (
    <div>
      <h1>Partner Detail</h1>
      <PartnerDetail partner={partner} />
    </div>
  );
}

export default Partner;

/* =============================================
 * server side code ==================== */
import { getPartnerById } from "../../stores/partners";
import type { Partner } from "../../stores/partners";

import { GetStaticPaths, GetStaticProps } from "next";

type PartnerProps = {
  partner?: Partner;
};

type Params = {
  partnerId: string | undefined;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const partnerIds = ["p1", "p2", "p3"];
  const paths = partnerIds.map((partnerId) => ({
    params: {
      partnerId,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PartnerProps, Params> = async ({
  params,
}) => {
  const partnerId = params?.partnerId;
  const partner = getPartnerById(partnerId);

  if (!partner) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      partner,
    },
    revalidate: 10,
  };
};
