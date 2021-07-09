import { MonHero } from "./mon-hero.model";

export class Organisation {
nom:string;
quartierGeneral: string;
leader: MonHero;
members: MonHero[];
constructor(pNom: string, pQuartierGeneral: string, pLeader: MonHero)
{
    this.nom=pNom;
    this.quartierGeneral=pQuartierGeneral;
    this.leader=pLeader;
    this.members=[pLeader];
    
}


}
 



