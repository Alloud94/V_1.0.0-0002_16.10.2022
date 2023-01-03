export interface Position {
    id: number;
    projektID: number,
    artikelID: number,
    bezeichnung: string,
    untertext: string,
    einheitsID: number,
    positionsNummer: number,
    menge: number,
    ePBrutto: number,
    rabatt1: number,
    rabatt2: number,
    ePNetto: number,
    vPBrutto: number,
    kundenRabatt: number,
    spezialRabatt: number,
    vPNetto: number,
    marge: number,
}
