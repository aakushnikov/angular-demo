import { IToggle } from "../types/toggle.types";

export const RESET_TOGGLES = 'Показать все';

export const TOGGLES_DATA: Array<IToggle> = [
{
    type: 1,
    label: 'В наличии',
    checked: false,
},
{
    type: 2,
    label: 'Со скидкой',
    checked: false,
}];