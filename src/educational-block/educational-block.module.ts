import { Module } from '@nestjs/common';
import { EducationalBlockController } from './educational-block.controller';
import { EducationalBlockService } from './educational-block.service';

@Module({
  controllers: [EducationalBlockController],
  providers: [EducationalBlockService]
})
export class EducationalBlockModule {}
