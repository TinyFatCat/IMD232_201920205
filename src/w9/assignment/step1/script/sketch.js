let { Engine, Bodies, Composite } = Matter;

let engine = Engine.create();

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  rectMode(CENTER);

  background(255);
}

function draw() {
  Engine.update(engine);
  background(255);
}

// var Engine = Matter.Engine,
//   Render = Matter.Render,
//   Runner = Matter.Runner,
//   Composites = Matter.Composites,
//   Events = Matter.Events,
//   Constraint = Matter.Constraint,
//   MouseConstraint = Matter.MouseConstraint,
//   Mouse = Matter.Mouse,
//   Body = Matter.Body,
//   Composite = Matter.Composite,
//   Bodies = Matter.Bodies;

// var engine = Engine.create(),
//   world = engine.world;

// var runner = Runner.create();
// Runner.run(runner, engine);

// let group;
// let ropeA;
// let ropeB;
// let ropeC;

// function setup() {
//   setCanvasContainer('canvas', 3, 2, true);

//   var group = Body.nextGroup(true);

//   var ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
//     return Bodies.rectangle(x, y, 50, 20, {
//       collisionFilter: { group: group },
//     });
//   });

//   Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
//     stiffness: 0.8,
//     length: 2,
//     render: { type: 'line' },
//   });
//   Composite.add(
//     ropeA,
//     Constraint.create({
//       bodyB: ropeA.bodies[0],
//       pointB: { x: -25, y: 0 },
//       pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
//       stiffness: 0.5,
//     })
//   );

//   group = Body.nextGroup(true);

//   var ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
//     return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
//   });

//   Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
//     stiffness: 0.8,
//     length: 2,
//     render: { type: 'line' },
//   });
//   Composite.add(
//     ropeB,
//     Constraint.create({
//       bodyB: ropeB.bodies[0],
//       pointB: { x: -20, y: 0 },
//       pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
//       stiffness: 0.5,
//     })
//   );
//   group = Body.nextGroup(true);

//   var ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
//     return Bodies.rectangle(x - 20, y, 50, 20, {
//       collisionFilter: { group: group },
//       chamfer: 5,
//     });
//   });

//   Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
//   Composite.add(
//     ropeC,
//     Constraint.create({
//       bodyB: ropeC.bodies[0],
//       pointB: { x: -20, y: 0 },
//       pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
//       stiffness: 0.5,
//     })
//   );

//   Composite.add(world, [
//     ropeA,
//     ropeB,
//     ropeC,
//     Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
//   ]);

//   background('white');
// }

// function draw() {
//   Engine.update(engine);
//   background('white');
// }

// // 마우스 컨트롤
// var mouse = Mouse.create(render.canvas),
//   mouseConstraint = MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//       stiffness: 0.2,
//       render: {
//         visible: false,
//       },
//     },
//   });

// Composite.add(world, mouseConstraint);

// render.mouse = mouse;

// Render.lookAt(render, {
//   min: { x: 0, y: 0 },
//   max: { x: 700, y: 600 },
// });

// return {
//   engine: engine,
//   runner: runner,
//   render: render,
//   canvas: render.canvas,
//   stop: function () {
//     Matter.Render.stop(render);
//     Matter.Runner.stop(runner);
//   },
// };
