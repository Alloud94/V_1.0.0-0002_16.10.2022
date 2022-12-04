export interface Angebot {
    id: number,
    vorgansArt: string,
    kundenID: string,
    rechnungsadressenID: string,
    ansprechpartnerID: string,
    zahlungsArtenID: string,
    zahlungsKonditionenID: string,
    datumErfasst: Date,
    userIDErfasst: number,
    datumZuletztGespeichert?: string,
    userIDZuletztGespeichert?: number,
    status: string,
    notizen: string
}
