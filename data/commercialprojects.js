export const projects = [
  {
    slug: "project-1",
    title: "TATA Mulshi",
    image: "/images/projects/ATLANTAS/atlantas-3.jpg",
    description: "Short description of Project 1",
    fullDescription:
      "Mulshi IB, situated about 40 km from Pune, is a storage dam for Bhira hydro power station of Tata Power Company Limited. The Bungalow is located near dam and dam constructed across the rivers Mula & Nila near village Mulshi during the years 1921-26 is a gravity dam constructed in rubble masonry.We have renovated the Mulshi IB with new design and concepts IN Year 2018-19. By keeping Bungalow’s vintage look in mind we have design this beautiful stone structure from scarp.This is Tata power’s oldest property among all. Bungalow home plans share a common style with Craftsman, Rustic and Cottage home designs. A great porch for your rocker, typically one level and over-hanging eaves are some of the classic features.",
    Client:"Tata Power",
    ApproxArea:"1500",
    ProjectDuration:"135 Days"
  },
  {
    slug: "project-2",
    title: "TATA Excellence Center",
    image: "/images/projects/ATLANTAS/atlantas-3.jpg",
    description: "Short description of Project 2",
    fullDescription:
      "Mulshi IB, situated about 40 km from Pune, is a storage dam for Bhira hydro power station of Tata Power Company Limited. The Bungalow is located near dam and dam constructed across the rivers Mula & Nila near village Mulshi during the years 1921-26 is a gravity dam constructed in rubble masonry.We have renovated the Mulshi IB with new design and concepts IN Year 2018-19. By keeping Bungalow’s vintage look in mind we have design this beautiful stone structure from scarp.This is Tata power’s oldest property among all. Bungalow home plans share a common style with Craftsman, Rustic and Cottage home designs. A great porch for your rocker, typically one level and over-hanging eaves are some of the classic features.",
    Client:"Tata Power",
    ApproxArea:"1500",
    ProjectDuration:"135 Days"
  },
  {
    slug: "project-3",
    title: "TATA Mulshi",
    image: "/images/projects/ATLANTAS/atlantas-3.jpg",
    description: "Short description of Project 3",
    fullDescription:
      "Mulshi IB, situated about 40 km from Pune, is a storage dam for Bhira hydro power station of Tata Power Company Limited. The Bungalow is located near dam and dam constructed across the rivers Mula & Nila near village Mulshi during the years 1921-26 is a gravity dam constructed in rubble masonry.We have renovated the Mulshi IB with new design and concepts IN Year 2018-19. By keeping Bungalow’s vintage look in mind we have design this beautiful stone structure from scarp.This is Tata power’s oldest property among all. Bungalow home plans share a common style with Craftsman, Rustic and Cottage home designs. A great porch for your rocker, typically one level and over-hanging eaves are some of the classic features.",
    Client:"Tata Power",
    ApproxArea:"1500",
    ProjectDuration:"135 Days"
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};