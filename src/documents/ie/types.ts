export interface IEStateValidator {
    validate(value: string): boolean;
}

export interface IEStateMask {
    mask(value: string): string;
}