export default interface Product {
  id: number;
  barcode: string;
  name: { en: string; ar: string };
  branch_id: number;
  branch_name: string;
  branch_code: string;
  pricing_details: {
    id: number;
    price: number;
    tag_price: number;
    cost: number;
    tax_percentage: number;
    currency: string;
  };
  category: { en: string; ar: string };
  material: { en: string; ar: string };
  brand: { en: string; ar: string };
  gemstones: { en: string; ar: string };
  weight: string;
  stock_status: string;
  images: string[];
  created_at: string;
}

export interface CartItem {
  id: number;
  barcode: string;
  name: { en: string; ar: string };
  branch_id: number;
  branch_name: string;
  branch_code: string;
  pricing_details: {
    id: number;
    price: number;
    tag_price: number;
    cost: number;
    tax_percentage: number;
    currency: string;
  };
  category: { en: string; ar: string };
  material: { en: string; ar: string };
  brand: { en: string; ar: string };
  gemstones: { en: string; ar: string };
  weight: string;
  stock_status: string;
  images: string[];
  created_at: string;
  quantity: number;
}
