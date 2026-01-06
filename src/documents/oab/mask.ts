export function maskOAB(oab: string): string {
    if (!oab) return '';

    return oab
        .replace(/\s+/g, '')
        .replace(/[-/]/g, '')
        .toUpperCase();
}