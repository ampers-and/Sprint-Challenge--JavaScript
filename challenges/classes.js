// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(c){
        this.length = c.length;
        this.width = c.width;
        this.height = c.height;
    };

    volume(){
        return this.length * this.width * this.height;
    };

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      };
  }

  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height:5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(c){
        super(c);
        this.length = c.length;
        this.width = c.length;
        this.height = c.length;
    }
}

const cube = new CubeMaker({length:2});

console.log(cube.volume()); // V = l^3 = 8
console.log(cube.surfaceArea()); // SA = 6*l^2 = 24
