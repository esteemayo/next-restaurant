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
  img?: string;
  title: string;
  desc?: string;
  price: number;
}

export interface ProductCardProps {
  id: string;
  price: number;
  title: string;
  img?: string;
}

export type MenuType = {
  id: string;
  img?: string;
  slug: string;
  desc?: string;
  title: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  img?: string;
  desc?: string;
  price: number;
  title: string;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
}[];

export interface OrderType {
  id: string;
  userEmail: string;
  price: number;
  products: object[];
  status: string;
  createdAt: Date;
  intent_id?: string;
}
