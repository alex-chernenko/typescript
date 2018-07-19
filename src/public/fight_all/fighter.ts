export interface IFighter {
    readonly name: string;
    health: number;
    
    setDamage(damage: number): void;
    hit(enemy: Fighter, point: number): void;
    knockout: () => Promise<any>;
}
 
export class Fighter implements IFighter{
 
    readonly name: string;
    health: number;
    private power: number;
    constructor(fighterName: string = "Unknown", fighterHealth: number = 100, fighterPower: number = 10) {
 
        this.name = fighterName;
        this.health = fighterHealth;
        this.power = fighterPower;
    }
    public knockout():Promise<any> {
        let prom = new Promise(function(resolve, reject){
          setTimeout(()=> {
            console.log("time is over");
            resolve("result");
          }, 500);
        });
        prom.then(
          () => {
            console.log("knockout");
          },
          error => {

            return "Rejected: " + error;
          }
        );
        return prom;
      }
      public setDamage(damage:number) {
              this.health -= damage;
              console.log(`${this.name} health is ${this.health}`);
            }
      public hit(enemy:Fighter, point:number) {
              let damage = point * this.power;
              return enemy.setDamage(damage);
            }
    
   
}
 
