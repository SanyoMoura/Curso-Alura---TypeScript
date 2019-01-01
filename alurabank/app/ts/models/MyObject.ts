import { Printable, Equable } from "./index";

export interface MyObject<T> extends Printable, Equable<T> {
}