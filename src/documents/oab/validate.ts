const UF_LIST = [
    'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA',
    'MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN',
    'RS','RO','RR','SC','SP','SE','TO'
];

export function validateOAB(oab: string): boolean {
    if (!oab) return false;

    const cleaned = oab
        .replace(/\s+/g, '')
        .replace(/[-/]/g, '')
        .toUpperCase();
    
    const match = cleaned.match(/^([A-Z]{2})(\d{1,10})([A-Z]?)$/);
    if (!match) return false;

    const uf = match[1];

    if (!UF_LIST.includes(uf)) return false;

    return true;
}