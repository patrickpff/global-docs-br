export function makeValidGOIE(): string {
    const prefixes = ["10", "11", "15"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

    // Remaining digits to complete 8-digit base
    const remainingDigits = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base = prefix + remainingDigits; // 8 digits

    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < 8; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;

    let dv: number;

    if (mod === 0) {
        dv = 0;
    } else if (mod === 1) {
        const baseNumber = Number(base);
        dv =
            baseNumber >= 10103105 && baseNumber <= 10119997
                ? 1
                : 0;
    } else {
        dv = 11 - mod;
    }

    return base + dv;
}

export function makeValidGOIEWithMod1(
    forceSpecialRange = false
): string {
    let attempts = 0;

    while (attempts < 2000) {
        attempts++;

        const prefixes = ["10", "11", "15"];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

        const remainingDigits = Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 10)
        ).join("");

        const base = prefix + remainingDigits;
        const baseNumber = Number(base);

        const weights = [9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;

        for (let i = 0; i < 8; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;

        if (mod !== 1) continue;

        const isSpecialRange =
            baseNumber >= 10103105 && baseNumber <= 10119997;

        if (forceSpecialRange && !isSpecialRange) continue;
        if (!forceSpecialRange && isSpecialRange) continue;

        const dv = isSpecialRange ? 1 : 0;

        return base + dv;
    }

    throw new Error("Could not generate GO IE for desired mod === 1 condition");
}

export function makeValidGOIESpecialRange(): string {
    let attempts = 0;

    while (attempts < 2000) {
        attempts++;

        const baseNumber =
            Math.floor(Math.random() * (10119997 - 10103105 + 1)) +
            10103105;

        const base = baseNumber.toString();

        const weights = [9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;

        for (let i = 0; i < 8; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;

        if (mod === 1) {
            return base + "1";
        }
    }

    throw new Error("Could not generate GO IE in special range");
}