import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [ CoffeesModule,
    DatabaseModule.register({ 
      type: 'postgres',
      host: 'localhost',
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    })
  ],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}
