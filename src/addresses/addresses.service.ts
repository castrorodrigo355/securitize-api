import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Error, isValidObjectId, Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { TxApiResponse } from 'src/seed-addresses/interfaces/transaction-response.interface';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectModel(Address.name)
    private readonly addressModel: Model<Address>,
    private readonly http: AxiosAdapter,
  ) {}

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return await this.addressModel.find().limit(limit).skip(offset).sort({
      favorite: -1,
    });
  }

  async findOne(_id: string) {
    let address: Address;
    if (!isValidObjectId(_id)) throw new Error(`ID not valid.`);

    address = await this.addressModel.findOne({ _id });
    if (!address) throw new NotFoundException(`Account with: ${_id} not found`);
    return address;
  }

  async update(id: string) {
    let address = await this.findOne(id);
    address.favorite = !address.favorite;
    try {
      await address.save();
      return address;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findFirstTransaction(id: string) {
    let address = await this.findOne(id);
    try {
      if (!address.firstTx) {
        const txApiResponse = await this.http.get<TxApiResponse>(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${address.account}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=NSZCD6S4TKVWRS13PMQFMVTNP6H7NAGHUY`,
        );
        address.firstTx = Number(txApiResponse.result[0].timeStamp);
        await address.save();
      }
      return address;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Address exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Address - Check server logs`,
    );
  }
}
