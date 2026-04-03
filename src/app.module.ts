import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { GroupsModule } from './modules/groups/groups.module';
import { IdeasModule } from './modules/ideas/ideas.module';
import { AuctionsModule } from './modules/auctions/auctions.module';
import { AuthModule } from './modules/auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: './../.env',
          isGlobal: true,
      }),
      UsersModule, GroupsModule, IdeasModule, AuctionsModule, AuthModule,

      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              type: 'postgres',
              host: 'db',
              port: configService.get<number>('DB_PORT', 5432),
              username: configService.get<string>('DB_USERNAME'),
              password: configService.get<string>('DB_PASSWORD'),
              database: configService.get<string>('DB_DATABASE'),
              autoLoadEntities: true,
              synchronize: true,
          })
      })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
