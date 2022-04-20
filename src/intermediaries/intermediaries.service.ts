import { CreateIntermediaryDto } from './dto/create-intermediary.dto'
import { v1 as uuid } from 'uuid'
import { Injectable, NotFoundException } from '@nestjs/common'
import { IIntermediary } from './intermediary.model'

@Injectable()
export class IntermediariesService {
    private intermediaries: IIntermediary[] = [
        {
            id: '1',
            creationDate: '05 May 2021 13:25 CEST',
            name: 'Distributor: US Foods',
            order: 1,
        },
        {
            id: '2',
            creationDate: '29 Apr 2021 11:25 CEST',
            name: 'Retailer: Whole Foods',
            order: 4,
        },
        {
            id: '3',
            creationDate: '02 Mai 2021 16:12 CEST',
            name: 'Amazon',
            order: 2,
        },
    ]

    getAllIntermediaries(): IIntermediary[] {
        return this.intermediaries.sort((i1, i2) => i1.order - i2.order)
    }

    getIntermediaryToUpdateIndex(intermediaryId: string): number {
        const foundIndex = this.intermediaries.findIndex(
            ({ id }) => id === intermediaryId
        )
        if (!foundIndex) {
            throw new NotFoundException(
                `Intermediary with ${intermediaryId} was not found !`
            )
        }
        return foundIndex
    }

    createIntermediary(createIntermediaryDto: CreateIntermediaryDto): void {
        const intermediary: IIntermediary = {
            id: uuid(),
            ...createIntermediaryDto,
        }
        this.intermediaries.push(intermediary)
    }

    updateIntermediary(id: string, intermediary: IIntermediary): void {
        const intermediaryToUpdateIndex = this.getIntermediaryToUpdateIndex(id)
        this.intermediaries[intermediaryToUpdateIndex] = intermediary
    }

    deleteIntermediary(intermediaryId: string): void {
        this.intermediaries = this.intermediaries.filter(
            ({ id }) => id !== intermediaryId
        )
    }
}
