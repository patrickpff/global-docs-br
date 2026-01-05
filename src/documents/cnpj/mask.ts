export function maskCNPJ(cnpj: string): string {
    const cleaned = cnpj.replace(/\D/g, "");
    const part1 = cleaned.slice(0, 2);
    const part2 = cleaned.slice(2, 5);
    const part3 = cleaned.slice(5, 8);
    const part4 = cleaned.slice(8, 12);
    const part5 = cleaned.slice(12, 14);
    let masked = "";

    if (part1) masked += part1;
    if (part2) masked += `.${part2}`;
    if (part3) masked += `.${part3}`;
    if (part4) masked += `/${part4}`;
    if (part5) masked += `-${part5}`;
    return masked;
}