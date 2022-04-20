export interface IIntermediary {
    id: string
    creationDate: string 
    name: string
    order: number
    type?: 'Range' | 'Dropdown'
    from?: number
    to?: number
    step?: number
    options?: { option: string; value: string }[]
}