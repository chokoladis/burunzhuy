import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './modules/groups/groups.module';
import { IdeasModule } from './modules/ideas/ideas.module';
import { AutionsModule } from './modules/autions/autions.module';
import { AuctionsModule } from './modules/auctions/auctions.module';

@Module({
  imports: [UsersModule, GroupsModule, IdeasModule, AutionsModule, AuctionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
