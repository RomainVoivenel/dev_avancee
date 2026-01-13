import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
