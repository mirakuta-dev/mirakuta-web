export type ProductStatus = "active" | "beta" | "archived" | "coming-soon";

export interface Product {
  name: string;
  description: string;
  status: ProductStatus;
  tags: string[];
  url: string;
  github: string;
}

export const products: Product[] = [
  {
    name: "mirakuta CLI",
    description: "Modern dev environment for Windows, one line away.",
    status: "active",
    tags: ["Go", "CLI", "Windows"],
    url: "https://mirakuta.dev",
    github: "https://github.com/mirakuta-dev/mirakuta",
  },
];
