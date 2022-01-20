import {Film} from "./Film";

const films: Film[] = [];
let film1 = new Film("1", "Władca Pierścieni");
let film2 = new Film("2", "Spiderman");
films.push(film1, film2);

export const Films = films;
