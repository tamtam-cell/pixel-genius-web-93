export type SiteType = "E-commerce" | "Vitrine" | "Digital";

export interface CardData {
  imgUrl: string;
  type: SiteType;
  story: string;
  title: string;
  websiteUrl: string;
}