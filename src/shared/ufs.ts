export const UF_LIST = [
    'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA',
    'MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN',
    'RS','RO','RR','SC','SP','SE','TO'
] as const;

export type UF = typeof UF_LIST[number];

export function isValidUF(uf: string): uf is UF {
    return UF_LIST.includes(uf as UF);
}
