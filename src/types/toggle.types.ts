import { TOGGLES_DATA } from "src/data/toggle.data";
import { IProduct } from "./product.types";

export interface IToggle
{
    type: ToggleTypes,
    label: string,
    checked: boolean,
}

export enum ToggleTypes
{
    InStore = 1,
    Discounted = 2,
}

export class Toggler
{
    private myFilters: Array<IToggle>;
    public get filters() : Array<IToggle> {
        return this.myFilters;
    }

    constructor() {
        this.myFilters = TOGGLES_DATA;
        this.myFilters.forEach(t => {
            switch(t.type)
            {
                case ToggleTypes.InStore: break;
                case ToggleTypes.Discounted: break;
                default: throw new Error("Constraint error. Types values must be equals with ToggleTypes enum");
            }
        });
    }

    containsFilter(item: IToggle) : boolean {
        let contains: boolean = false;
        this.myFilters.forEach(t => {
            if (t.type == item.type && !t.checked) contains = true;
        });
        return contains;
    }

    checkedFilter(item: IToggle) : boolean {
        let contains: boolean = false;
        this.myFilters.forEach(t => {
            if (t.type == item.type && t.checked) contains = true;
        });
        return contains;
    }

    setFilter(item: IToggle): void {
        this.myFilters.forEach(t => {
            if (t.type == item.type && !t.checked) t.checked = true;
        });
    }

    resetFilter() : void {
        this.myFilters.forEach(t => {
            t.checked = false;
        });
    }

    allFiltersReseted() : boolean {
        let result: boolean = true;
        this.myFilters.forEach(t => {
            if (t.checked) result = false;
        });
        return result;
    }

    isVisible(item: IProduct) : boolean {
        let result: boolean = true;
        this.myFilters.forEach(t => {
            switch(t.type)
            {
                case ToggleTypes.Discounted:
                    if (!t.checked) break;
                    if (item.price.discount == null) result = false;
                    if (result && item.price.discount == 0) result = false;
                    break;
                case ToggleTypes.InStore:
                    if (!t.checked) break;
                    if (item.deliveryOptions.available == 0) result = false;
                    break;
                default:
                    break;
            }
        });
        return result;
    }

}