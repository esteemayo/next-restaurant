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
  product: SingleProductType;
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

export type SingleProductType = {
  id: string;
  img?: string;
  desc?: string;
  price: number;
  title: string;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

export type ProductType = SingleProductType[];

export interface OrderType {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: string;
}

export interface CartItemType {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
}

export interface CartStore {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
}

export interface ActionType {
  reset(): void;
  addToCart(payload: CartItemType): void;
  removeFromCart(payload: CartItemType): void;
}

export interface Inputs {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
}

export interface Option {
  title: string;
  additionalPrice: number;
}

export interface NewProduct {
  options: Option[];
  img?: string;
  title: string;
  desc: string;
  price: number;
  catSlug: string;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
}

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  icon: string;
  label: string;
}

export interface DeleteButtonProps {
  id: string;
  swal: any;
}

export interface SwalResult {
  isConfirmed: boolean;
  isDenied: boolean;
  isDismissed: boolean;
  value: boolean;
}

export interface HeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
}
