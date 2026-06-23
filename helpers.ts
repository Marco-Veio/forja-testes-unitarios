// Biblioteca que gera dados aleatórios
import { faker } from "@faker-js/faker";

export function gerarInteiro() {
  return faker.number.int();
}

export function gerarPar() {
  return faker.number.int({ multipleOf: 2 });
}

export function gerarImpar() {
  return gerarPar() + 1;
}

export function gerarNegativo() {
  return faker.number.int({ multipleOf: -1 });
}

export function gerarLimite(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER,
) {
  return faker.number.float({ min, max });
}

export function gerarLimiteInteiro(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER,
) {
  return faker.number.int({ min, max });
}

export function gerarString(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER,
) {
  return faker.string.alphanumeric({ length: { min, max } });
}
