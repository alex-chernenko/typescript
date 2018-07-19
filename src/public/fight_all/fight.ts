import { Fighter } from "./fighter";
import { improvedFighter } from "./improvedFighter";
export { fight };
async function fight(Fighter:Fighter, ImprovedFighter: improvedFighter, rest: number[]):Promise<any>{
  let arr = rest;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      Fighter.hit(ImprovedFighter, arr[i]);
      if (ImprovedFighter.health <= 0) {
        console.log(`${ImprovedFighter.name} in knockdown`);
        let k = await ImprovedFighter.knockout();
        console.log(k + ` ${Fighter.name} won`);
      }
    } else {
      ImprovedFighter.hit(Fighter, arr[i]);
      if (Fighter.health <= 0) {
        console.log(`${Fighter.name} in knockdown`);
        let j = await Fighter.knockout();
        console.log(j + ` ${ImprovedFighter.name} won`);
      }
    }
  }
  if (ImprovedFighter.health > 0 && Fighter.health > 0) {
    console.log("It`s a tie");
  }
}