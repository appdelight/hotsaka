import { Subject } from "rxjs";
import { IDrawerProps } from "../HOC/DrawerHoc";
import { IDrawersNames } from "./types";


export const DrawerOpen = new Subject<IDrawerProps>();
export const DrawerClose = new Subject<IDrawersNames>();



