export default class Cell {
    id: number;
    row: number;
    column: number;
    options: Array<number>;
    value: number;
    collapsed: boolean;

    constructor(id: number, value: number) {
        this.id = id;
        this.row = Math.floor(id / 9);
        this.column = id % 9;
        this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.value = 0;
        this.collapsed = false;
        if (value != 0) {
            this.options = [value];
            this.value = value;
            this.collapsed = true;
        }
    }

    get_entropy(): number {
        return this.collapsed ? 10 : this.options.length;
    }
}
