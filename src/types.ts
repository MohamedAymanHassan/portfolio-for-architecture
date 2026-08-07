export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: number;
  specs: {
    area: string;
    materials: string[];
    structuralType: string;
  };
  description: string;
  image: string;
}
