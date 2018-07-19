import { IFighter, Fighter } from "./fighter";
export interface IimprovedFighter extends IFighter {
    doublehit(enemy:Fighter, point:number)
  }
export class improvedFighter extends Fighter implements IimprovedFighter{
    doublehit(enemy:Fighter, point:number) {
      super.hit(enemy, point * 2);
    }
  }
