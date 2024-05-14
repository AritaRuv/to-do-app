import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_todoapp',
      password: 'todoapp',
      database: 'db_todoapp',
      autoLoadEntities: true,
      synchronize: true

    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
