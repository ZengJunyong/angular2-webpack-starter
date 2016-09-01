export interface Plan {
  id?: string;
  tokenId?: string;
  email?: string;
  amount: number;
  itemName: string;
  currencyCode?: string;
  count?: number;
}
