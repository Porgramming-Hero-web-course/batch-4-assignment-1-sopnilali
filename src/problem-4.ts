

// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Define Circle and Rectangle types

type Circle = {
    shape: 'circle';
    radius: number;
};

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

// Calculate shape area function

function calculateShapeArea(shape: Shape): number {
    if (shape.shape === 'circle') {
        return Math.PI * shape.radius ** 2;
    } else if (shape.shape === 'rectangle') {
        return shape.width * shape.height;
    } else {
        throw new Error('Invalid shape type');
    }
}

const circle: Circle = { shape: 'circle', radius: 5 };
const circleResult = calculateShapeArea(circle).toFixed(2)
// console.log(circleResult) // output : 78.54


const rectangle: Rectangle = { shape: 'rectangle', width: 4, height: 6 };
const rectangleResult = calculateShapeArea(rectangle);
// console.log(rectangleResult) // output : 24

