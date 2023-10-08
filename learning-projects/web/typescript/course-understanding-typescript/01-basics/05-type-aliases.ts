type Point = {
  x: number;
  y: number;
};

/**
 * Adds two points together.
 * @param {Point} p1 - The first point
 * @param {Point} p2 - The second point
 * @returns The sum of the two points
 * @example add({ x: 1, y: 2 }, { x: 3, y: 4 }) // { x: 4, y: 6 }
 */
function add(p1: Point, p2: Point) {
  return { x: p1.x + p2.x, y: p1.y + p2.y };
}
