export interface Projekt {
    id: number,
    vorgangsID: number,
    vorgangsArt: string,
    kundenID: number,
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
