// Enum (not a type)
const enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [Role, string];
} = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [Role.AUTHOR, "author"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
