export interface LayoutProps {
  children: React.ReactNode;
}

export interface ClientOnlyProps {
  children: React.ReactNode;
}

export interface Product {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
}

export type Products = Product[];

export type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export interface PriceProps {
  id: number;
  price: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
}

export interface CartItems {
  id: number;
  title: string;
  img?: string;
  price: number;
  options?: {
    title: string;
    additionalPrice: number;
  };
}
