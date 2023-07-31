import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Public } from 'src/common/decorators/public.decorator';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import coffeesConfig from './config/coffees.config';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

class ConfigService {}
class DevelopmentConfigService {} 
class ProductionConfigService {}
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]),
  ConfigModule.forFeature(coffeesConfig)],
  controllers: [CoffeesController],
  providers: [CoffeesService ,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },

    { provide: COFFEE_BRANDS , useFactory:  () =>  ['buddy brew', 'nescafe'] }],
  exports: [CoffeesService],

})
export class CoffeesModule {}


