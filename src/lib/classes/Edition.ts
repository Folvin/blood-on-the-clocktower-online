import {characters} from "../constant/characters";
import {Category, Character} from "./Character";

/* !!! DO NOT ADD METHOD to this class because instances of this class should be serializable */
export class Edition {
  meta: Meta;
  townsfolks: Character[] = [];
  outsiders: Character[] = [];
  minions: Character[] = [];
  demons: Character[] = [];
  firstNightOrder: Character[] = [];
  otherNightOrder: Character[] = [];
  constructor({roles, meta}: {roles: string[]; meta?: Partial<Meta>}) {
    this.meta = {
      name: meta?.name ?? "custom script",
      author: meta?.author ?? "",
      image: meta?.image ?? "/images/Logo_custom_script.png",
    };
    const filteredCharacters = characters.filter(c => roles.includes(c.id));
    this.townsfolks = filteredCharacters.filter(v => v.category === Category.TOWNSFOLK);
    this.outsiders = filteredCharacters.filter(v => v.category === Category.OUTSIDER);
    this.minions = filteredCharacters.filter(v => v.category === Category.MINION);
    this.demons = filteredCharacters.filter(v => v.category === Category.DEMON);
    this.firstNightOrder = getFirstNightOrder(filteredCharacters);
    this.otherNightOrder = getOtherNightOrder(filteredCharacters);
  }
}

type Meta = {
  author: string;
  name: string;
  image: string;
};

function getFirstNightOrder(characters: Character[]) {
  return characters
    .filter(v => v.firstNightOrder !== 0)
    .sort((a, b) => a.firstNightOrder - b.firstNightOrder);
}
function getOtherNightOrder(characters: Character[]) {
  return characters
    .filter(v => v.otherNightOrder !== 0)
    .sort((a, b) => a.otherNightOrder - b.otherNightOrder);
}
