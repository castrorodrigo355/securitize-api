import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { AddressesModule } from './addresses/addresses.module';
import { SeedAddressesModule } from './seed-addresses/seed-addresses.module';
import { SeedConversionsModule } from './seed-conversions/seed-conversions.module';
import { ConversionsModule } from './conversions/conversions.module';
import { EnvConfig } from './configuration/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    CommonModule,
    AddressesModule,
    SeedAddressesModule,
    ConversionsModule,
    SeedConversionsModule,
  ],
})
export class AppModule {}
