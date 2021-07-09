export class MonHero {
    pseudo: string; 
  indentiteSecrete: string;
  superVilain: boolean;
  constructor(pPseudo:string,pIndentiteSecrete:string,pSuperVilain:boolean)
  {
    this.pseudo=pPseudo; this.indentiteSecrete= pIndentiteSecrete; this.superVilain=pSuperVilain;
    
  }
  afficherInfo()
  {
    return "Mon "+this.pseudo+" s'appelle "+this.superVilain;
  }

}

