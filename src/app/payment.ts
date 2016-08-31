export interface Payment {
  id?: string;
  tokenId?: string;
  amount: number;
  itemName: string;
  currencyCode?: string;
}
