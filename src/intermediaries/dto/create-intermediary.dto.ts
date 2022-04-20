import { IsNotEmpty } from "class-validator"

export class CreateIntermediaryDto {
    @IsNotEmpty()
    creationDate: string 
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    order: number
    type?: 'Range' | 'Dropdown'
    from?: number
    to?: number
    step?: number
    options?: { option: string; value: string }[]
}