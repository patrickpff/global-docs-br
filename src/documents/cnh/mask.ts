export function maskCNH(cnh: string): string {
    return cnh.replace(/\D/g, '');
}