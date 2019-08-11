export interface Point {
    x: number;
    y: number;
}

export interface BoundResult {
    xInBound: boolean;
    yInBound: boolean;
}

export const isInbounds = (point: Point) => {
    const { x, y } = point;

    const xInbound = window.innerWidth > x;
    const yInbound = window.innerHeight > y;

    return {
        xInbound,
        yInbound,
    };
};

export const addPoints = (a: Point, b: Point) => {
    const { x: x1, y: y1 } = a;
    const { x: x2, y: y2 } = b;

    return {
        x: x1 + x2,
        y: y1 + y2,
    };
};
