export const projects = [
  {
    slug: "project-1",
    title: "TATA MULSHI",
    image: "/images/projects/TATA/tata-1.jpg",
    description: "TATA Project Discription",
    fullDescription:
      "Mulshi IB, situated about 40 km from Pune, is a storage dam for Bhira hydro power station of Tata Power Company Limited. The Bungalow is located near dam and dam constructed across the rivers Mula & Nila near village Mulshi during the years 1921-26 is a gravity dam constructed in rubble masonry.We have renovated the Mulshi IB with new design and concepts IN Year 2018-19. By keeping Bungalow’s vintage look in mind we have design this beautiful stone structure from scarp.This is Tata power’s oldest property among all. Bungalow home plans share a common style with Craftsman, Rustic and Cottage home designs. A great porch for your rocker, typically one level and over-hanging eaves are some of the classic features.",
    tagLine: "Project information",
    reraNumber: "P52000011751",
    highlights: [
      { icon: "Building2", description: "TOWNSHIP IN 3 ACRES" },
      { icon: "Home", description: "13 RESIDENTIAL BUILDINGS OF STILT + 4 STOREY WITH LIFT" },
      { icon: "Banknote", description: "LUXURIOUS AND AFFORDABLE 1BHK AND 2BHK RESIDENCES" },
      { icon: "FileCheck", description: "PROJECT APPROVED BY NAINA CIDCO" },
      { icon: "CheckSquare", description: "OC RECEIVED code" },
    ],
    configuration: [
      { flat: "1500 sqft", carpet: "135 Days" },
    ],

    galleryImages: [
      { image: "/images/projects/TATA/tata-1.jpg", alt: "tata-1" },
      { image: "/images/projects/TATA/tata-2.jpg", alt: "tata-2" },
      { image: "/images/projects/TATA/tata-3.jpg", alt: "tata-3" },
      { image: "/images/projects/TATA/tata-4.jpg", alt: "tata-4" },
      { image: "/images/projects/TATA/tata-5.jpg", alt: "tata-5" },
      { image: "/images/projects/TATA/tata-6.jpg", alt: "tata-6" },
      { image: "/images/projects/TATA/tata-7.jpg", alt: "tata-7" },
      { image: "/images/projects/TATA/tata-8.jpg", alt: "tata-8" },
      { image: "/images/projects/TATA/tata-9.jpg", alt: "tata-9" },
      { image: "/images/projects/TATA/tata-10.jpg", alt: "tata-10" },
    ],
  },
  {
    slug: "project-2",
    title: "TATA Excellence Center",
    image: "/images/projects/ATLANTAS/atlantas-3.jpg",
    description: "Short description of Project 2",
    fullDescription:
      "Mulshi IB, situated about 40 km from Pune, is a storage dam for Bhira hydro power station of Tata Power Company Limited. The Bungalow is located near dam and dam constructed across the rivers Mula & Nila near village Mulshi during the years 1921-26 is a gravity dam constructed in rubble masonry.We have renovated the Mulshi IB with new design and concepts IN Year 2018-19. By keeping Bungalow’s vintage look in mind we have design this beautiful stone structure from scarp.This is Tata power’s oldest property among all. Bungalow home plans share a common style with Craftsman, Rustic and Cottage home designs. A great porch for your rocker, typically one level and over-hanging eaves are some of the classic features.",
    Client: "Tata Power",
    ApproxArea: "1500",
    ProjectDuration: "135 Days"
  },
  {
    slug: "project-3",
    title: "TATA Mulshi",
    image: "/images/projects/ATLANTAS/atlantas-3.jpg",
    description: "Short description of Project 3",
    fullDescription:
      "Mulshi IB, situated about 40 km from Pune, is a storage dam for Bhira hydro power station of Tata Power Company Limited. The Bungalow is located near dam and dam constructed across the rivers Mula & Nila near village Mulshi during the years 1921-26 is a gravity dam constructed in rubble masonry.We have renovated the Mulshi IB with new design and concepts IN Year 2018-19. By keeping Bungalow’s vintage look in mind we have design this beautiful stone structure from scarp.This is Tata power’s oldest property among all. Bungalow home plans share a common style with Craftsman, Rustic and Cottage home designs. A great porch for your rocker, typically one level and over-hanging eaves are some of the classic features.",
    Client: "Tata Power",
    ApproxArea: "1500",
    ProjectDuration: "135 Days"
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};