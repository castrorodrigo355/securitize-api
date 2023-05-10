import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from 'src/addresses/entities/address.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { IAddress } from './interfaces/address.interface';
import { ApiResponse } from './interfaces/addresses-response.interface';

@Injectable()
export class SeedAddressesService {
  private url =
    'https://api.etherscan.io/api?module=account&action=balancemulti&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a,0x63a9975ba31b0b9626b34300f7f627147df1f526,0x198ef1ec325a96cc354c7266a038be8b5c558f67,0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae,0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC,0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3&tag=latest&apikey=NSZCD6S4TKVWRS13PMQFMVTNP6H7NAGHUY';
  constructor(
    @InjectModel(Address.name)
    private readonly addressModel: Model<Address>,
    private readonly http: AxiosAdapter,
  ) {}

  async addressesSeed() {
    await this.addressModel.deleteMany({});
    const response = await this.http.get<ApiResponse>(this.url);
    const addressList: IAddress[] = [];
    response.result.forEach(async ({ account, balance }) => {
      addressList.push({ account, balance, firstTx: null });
    });
    await this.addressModel.insertMany(addressList);
    return 'Addresses saved.';
  }
}
