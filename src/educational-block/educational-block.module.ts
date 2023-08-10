import { Module } from '@nestjs/common';
import { EducationalBlockController } from './educational-block.controller';
import { EducationalBlockService } from './educational-block.service';
import { User } from 'src/user/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { EducationalBlock } from './educational-block.model';

@Module({
  controllers: [EducationalBlockController],
  providers: [EducationalBlockService],
  imports: [
    SequelizeModule.forFeature([User, EducationalBlock]),
  ],
})
export class EducationalBlockModule {}
