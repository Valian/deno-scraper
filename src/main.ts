import { bgBlue, red, bold } from "https://deno.land/std/colors/mod.ts";

const sayHello = (name: string = "world") => {
  console.log(bgBlue(red(bold(`Hello ${name}!`))));
};


sayHello();

sayHello("Conlin");
