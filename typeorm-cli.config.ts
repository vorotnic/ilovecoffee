import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1690062346583 } from 'src/migrations/1690062346583-CoffeeRefactor';
import { SchemaSync1690064320974 } from 'src/migrations/1690064320974-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1690062346583,SchemaSync1690064320974 ],
});
