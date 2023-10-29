import {EditionToParse} from "@/redux/features/edition-slice";

const editions: EditionToParse[] = [
  {
    meta: {
      author: "The Pandemonium Institute",
      name: "Trouble Brewing",
      image: "/images/Logo_trouble_brewing.png",
    },
    roles: [
      "washerwoman",
      "librarian",
      "investigator",
      "chef",
      "empath",
      "fortune_teller",
      "undertaker",
      "monk",
      "slayer",
      "soldier",
      "ravenkeeper",
      "virgin",
      "mayor",
      "butler",
      "saint",
      "recluse",
      "drunk",
      "poisoner",
      "spy",
      "baron",
      "scarlet_woman",
      "imp",
      "scapegoat",
      "gunslinger",
      "beggar",
      "bureaucrat",
      "thief",
    ],
  },
];

export function getExistingEditionByName(name: EditionName): EditionToParse {
  const ed = editions.find(v => v.meta?.name === name);
  if (!ed) throw new Error("inserted edition name doesn't exist on the editions array");
  return ed;
}

export type EditionName =
  | "Trouble Brewing"
  | "Bad Moon Rising"
  | "Sects and Violets"
  | "Laissez un Faire";
