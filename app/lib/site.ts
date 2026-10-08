// Central brand details. Update phone, email and address here and they
// change everywhere on the site.
export const site = {
  name: "Makkhan Gold",
  hindiName: "मक्खन गोल्ड चाय",
  tagline: "Har ghoont mein makkhan jaisi mithaas",
  description:
    "Makkhan Gold Chai — premium, strong and aromatic CTC tea crafted for the perfect kadak cup of Indian chai.",
  instagram: "https://www.instagram.com/makkhangoldchai/",
  threads: "https://www.threads.net/@makkhangoldchai",
  // TODO: replace with the real business details
  phone: "+91 00000 00000",
  whatsapp: "910000000000", // country code + number, digits only
  email: "hello@makkhangold.in",
  address: "Your factory / office address, City, State, India",
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
