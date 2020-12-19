export const CSS_PREFIX: string = 'mon'

export enum CellType {
    NAME = 1,
    MULTIPLE_PERSON = 2,
    STATUS = 3
}

export enum CellClassname {
    name = CellType.NAME,
    'multiple-person' = CellType.MULTIPLE_PERSON,
    color = CellType.STATUS
}