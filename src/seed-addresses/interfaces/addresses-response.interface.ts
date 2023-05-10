export interface ApiResponse {
  status: string;
  message: string;
  result: Address[];
}

export interface Address {
  account: string;
  balance: string;
}
