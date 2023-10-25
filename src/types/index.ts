export interface LayoutProps {
  children: React.ReactNode;
}

export interface ClientOnlyProps {
  children: React.ReactNode;
}

export interface NavItemProps {
  url: string;
  label: string;
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

export interface CartItem {
  id: number;
  title: string;
  img: string;
  price: number;
  options: {
    title: string;
    additionalPrice: number;
  };
}

export type CartItems = CartItem[];

export interface FeaturedCardProps {
  id: number;
  img?: string;
  title: string;
  desc: string;
  price: number;
}
