import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OfferModule } from './offer/offer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './offer/entities/offer.entity';

@Module({
  imports: [
    ConfigModule.forRoot(/* {
      // envFilePath: ['.env'],
    } */),
    OfferModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'jobScrappy',
      synchronize: true,
      entities: [Offer],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
