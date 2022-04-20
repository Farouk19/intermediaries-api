import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { CreateIntermediaryDto } from './dto/create-intermediary.dto'
import { IntermediariesService } from './intermediaries.service'
import { IIntermediary } from './intermediary.model'

@Controller('intermediaries')
export class IntermediariesController {
    constructor(private intermediariesService: IntermediariesService) {}

    @Get()
    getIntermediaries(): IIntermediary[] {
        return this.intermediariesService.getAllIntermediaries()
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createIntermediaryDto: CreateIntermediaryDto): void {
        this.intermediariesService.createIntermediary(createIntermediaryDto)
    }

    @Put('/:id')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('intermediary') intermediary: IIntermediary
    ): void {
        this.intermediariesService.updateIntermediary(id, intermediary)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string): void {
        this.intermediariesService.deleteIntermediary(id)
    }
}
