export interface Beleg {
    id: number,
    vorgangsID: number,
    bezeichnung: string,
    datumErfasst: Date,
    userIDErfasst: number,
    datumZuletztGespeichert?: string,
    userIDZuletztGespeichert?: number,
    status: string,
    url: string
}
