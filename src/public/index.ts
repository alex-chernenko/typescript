import { Fighter } from "./fight_all/fighter";
import { improvedFighter } from "./fight_all/improvedFighter";
import { fight } from "./fight_all/fight";
// // create two instances

// // call fight function
let Jack = new Fighter("Jack", 10, 2);
let Nick = new improvedFighter("Nick", 20, 3);
fight(Jack as improvedFighter, Nick, [1,2,3,4]);
