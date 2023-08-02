import { Module } from '@nestjs/common';
import { EducationalModuleController } from './educational-module.controller';
import { EducationalModuleService } from './educational-module.service';

@Module({
  controllers: [EducationalModuleController],
  providers: [EducationalModuleService]
})
export class EducationalModuleModule {}
