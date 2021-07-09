export class Livre {
    uuid: string
    titre: string
    description: string
    autheur: string

    constructor(vUuid:string, vTitre:string, vDescription:string, vAutheur:string) {
        this.uuid = vUuid
        this.titre = vTitre
        this.description = vDescription
        this.autheur = vAutheur
    }

}
