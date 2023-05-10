export interface TxApiResponse {
  status: string;
  message: string;
  result: Transaction[];
}

export interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: From;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: Input;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: MethodID;
  functionName: string;
}

export enum From {
  Genesis = 'GENESIS',
  The0X1A56A50C378D21D0Aa544Ed9A482300C7F6E78Ec = '0x1a56a50c378d21d0aa544ed9a482300c7f6e78ec',
  The0Xddbd2B932C763Ba5B1B7Ae3B362Eac3E8D40121A = '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
}

export enum Input {
  Empty = '',
  The0X = '0x',
  The0X454E34354139455138 = '0x454e34354139455138',
}

export enum MethodID {
  Empty = '',
  The0X = '0x',
  The0X454E3435 = '0x454e3435',
}
