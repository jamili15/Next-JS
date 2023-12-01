export type Partner = { id: string; name: string; pin: string };

export const partners: Partner[] = [
  { id: "p1", name: "Cebu", pin: "01" },
  { id: "p2", name: "Iligan", pin: "02" },
  { id: "p3", name: "San Carlos", pin: "03" },
  { id: "p4", name: "Danao", pin: "04" },
  { id: "p5", name: "San Isidro", pin: "05" },
];

export function getPartners() {
  return partners;
}

export function getPartnerById(id: string | undefined) {
  return partners.find((partner) => partner.id === id);
}
