export class Character {
  id: string;
  name: string;
  description: string;
  category: Category;
  alignment: Alignment;
  changeSetup: boolean = false;
  firstNightOrder: number;
  otherNightOrder: number;
  reminders: string[] = [];
  remindersGlobal: string[] = [];
  imageURL: string;
  firstNightReminder: string;
  otherNightReminder: string;

  constructor({
    name,
    description,
    category,
    changeSetup,
    firstNightOrder,
    otherNightOrder,
    reminders,
    remindersGlobal,
    imageURL,
    firstNightReminder,
    otherNightReminder,
  }: {
    name: string;
    description: string;
    category: Category;
    changeSetup?: boolean;
    firstNightOrder?: number;
    otherNightOrder?: number;
    reminders?: string[];
    remindersGlobal?: string[];
    imageURL?: string;
    firstNightReminder?: string;
    otherNightReminder?: string;
  }) {
    this.id = convertNameToId(name);
    this.name = name;
    this.description = description;
    this.category = category;
    this.alignment = getAlignmentFromCategory(category);
    this.changeSetup = changeSetup ?? false;
    this.firstNightOrder = firstNightOrder ?? 0;
    this.otherNightOrder = otherNightOrder ?? 0;
    this.reminders = reminders ?? [];
    this.remindersGlobal = remindersGlobal ?? [];
    this.imageURL = imageURL ?? getDefaultImage(this.alignment);
    this.firstNightReminder = firstNightReminder ?? description;
    this.otherNightReminder = otherNightReminder ?? description;
  }
}

export const enum Alignment {
  GOOD = "good",
  EVIL = "evil",
  TRAVELER = "traveler",
}

export const enum Category {
  TOWNSFOLK = "townsfolk",
  OUTSIDER = "outsider",
  MINION = "minion",
  DEMON = "demon",
  TRAVELER = "traveler",
}

function getAlignmentFromCategory(category: Category) {
  if (category === Category.TOWNSFOLK || category === Category.OUTSIDER) {
    return Alignment.GOOD;
  } else if (category === Category.MINION || category === Category.DEMON) {
    return Alignment.EVIL;
  } else if (category === Category.TRAVELER) {
    return Alignment.TRAVELER;
  } else {
    throw new Error("the passed category has no corresponding alignment");
  }
}

function getDefaultImage(alignment: Alignment) {
  if (alignment === Alignment.GOOD) {
    return "/images/role-icons/good.png";
  } else if (alignment === Alignment.EVIL) {
    return "/images/role-icons/good.png";
  } else {
    return "/images/role-icons/good.png";
  }
}

function convertNameToId(name: string) {
  const spacesRegex = /\s/g;
  const specialCharsRegex = /[^\w-]/g;
  return name.toLowerCase().replaceAll(spacesRegex, "_").replaceAll(specialCharsRegex, "");
}
