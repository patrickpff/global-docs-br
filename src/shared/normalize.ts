export function onlyDigits(input: string): string {
    return input.replace(/\D/g, '');
}

export function normalizeUppercase(input: string): string {
    return input.trim().toUpperCase();
}

export function removeSeparators(input: string): string {
    return input.replace(/[\s\-.\/]/g, '');
}