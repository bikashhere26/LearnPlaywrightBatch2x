interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = { x: 10, y: 20 }; // point.x = 5; This is not possible. 
console.log(point.x+point.y);

// ReadonlyArray
interface Data {
    readonly items: readonly number[];
}
const data: Data = {
    items: [1, 2, 3, 4, 5]
};
// data.items.push(6); This is not possible

console.log(data.items);