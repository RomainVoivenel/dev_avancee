import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RankModule } from './rank/rank.module';

@Module({
  imports: [
      RouterModule.register([
        {
          path: '/rank',
          module: RankModule,
        },
      ]),
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
