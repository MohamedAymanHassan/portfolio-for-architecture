import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "prj-001",
    title: "Apex Tower",
    category: "Commercial High-Rise",
    location: "Tokyo, JP",
    year: 2025,
    specs: {
      area: "120,000 sqm",
      materials: ["Reinforced Concrete", "High-Tensile Steel", "Low-E Glass"],
      structuralType: "Diagrid System",
    },
    description:
      "A 65-story commercial skyscraper utilizing an advanced diagrid structural framework, optimizing both lateral stiffness against seismic activity and interior spatial freedom. The perimeter frame carries lateral loads, eliminating the need for interior columns.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "prj-002",
    title: "Lumina Art Museum",
    category: "Cultural Institution",
    location: "Oslo, NO",
    year: 2024,
    specs: {
      area: "24,500 sqm",
      materials: ["Glulam Timber", "Titanium Zinc", "Exposed Concrete"],
      structuralType: "Cantilevered Truss",
    },
    description:
      "Engineered to appear as a floating volume above the fjord. The structural challenge involved massive 40-meter cantilevers supported by a concealed deep steel truss system anchored into the bedrock.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "prj-003",
    title: "Bridge 42",
    category: "Infrastructure",
    location: "Rotterdam, NL",
    year: 2023,
    specs: {
      area: "1.2 km span",
      materials: ["Ultra-High Performance Concrete", "Carbon Fiber Stay Cables"],
      structuralType: "Cable-Stayed Bridge",
    },
    description:
      "A pedestrian and light-rail bridge featuring asymmetrical pylons. We employed non-linear finite element analysis to model wind-induced dynamic responses, resulting in a streamlined, aerodynamic deck profile.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "prj-004",
    title: "Echo Valley Research Lab",
    category: "Specialized Facility",
    location: "Geneva, CH",
    year: 2026,
    specs: {
      area: "45,000 sqm",
      materials: ["Mass Timber", "Seismic Isolators", "Rammed Earth"],
      structuralType: "Base-Isolated Rigid Frame",
    },
    description:
      "Housing highly sensitive particle physics equipment, this structure required zero-tolerance vibration engineering. The entire foundation rests on custom-engineered elastomeric base isolators to decouple it from ground frequencies.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  },
];
