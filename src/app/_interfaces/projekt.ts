export interface Projekt {
    id: number,
    vorgangsID: number,
    vorgangszeichen: string, 
    vorgangsArt: string,
    kundenID: number,
    kundenName: string,
    rechnungsadressenID: number,
    ansprechpartnerID: number,
    zahlungsArtenID: number,
    zahlungsKonditionenID: number,
    datumErfasst: string,
    userIDErfasst: number,
    datumZuletztGespeichert?: string,
    userIDZuletztGespeichert?: number,
    status: string,
    notizen: string
}
