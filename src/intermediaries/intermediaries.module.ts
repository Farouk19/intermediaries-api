import { Module } from '@nestjs/common'
import { IntermediariesController } from './intermediaries.controller'
import { IntermediariesService } from './intermediaries.service'

@Module({
    controllers: [IntermediariesController],
    providers: [IntermediariesService],
})
export class IntermediariesModule {}
