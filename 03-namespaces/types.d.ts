export interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  eyesColor?: "black" | "brown" | "blue";
}

export interface Pet {
  firstName: string;
  age?: number;
  eyesColor?: "black" | "brown" | "blue";
}

export as namespace types;
