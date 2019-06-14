![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | FlappyBirds

## Introduction

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_6706fdbfdce80220b94fc6c04e2c990d.jpg)

The famous FlappyBird is a game developed by Vietnamese video game artist and programmer Dong Nguyen, under his game development company [dotGEARS](https://en.wikipedia.org/wiki/DotGEARS).

The objective is to direct a flying bird, named "Faby", who moves continuously to the right, between sets of pipes. If the player touches the pipes, they lose. Faby briefly flaps upward each time that the player clicks on the spacebar; if the screen is not tapped, Faby falls because of gravity.

If you want to understand better the game, go ahead and play a bit [here](http://flappybird.io/)

### Requirements

- [Fork this repo]()
- Clone this repo into your `~/code/labs`
- The images are also included in the repository

## First iteration: Let's create our board

Add a scrolling `background` using the file in the `assets` folder.

You should draw it from your `Game` class.

## Second Iteration: Create our Player

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5279ab3427a72a2fbf77cbc9e2b32664.png)

We have the `canvas` with our beautiful background. Now we need to add `Faby`.

Example of properties your `Bird` could have:

- `x`
- `y`
- `gravity`
- `img`

Make sure you display your Bird using the image in the `assets` folder.

Everytime the user clicks, the `gravity` should decrease, and increase otherwise, so you can make Faby jump!

## Third Iteration: Creating the obstacles

<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_032b5d79ab1c7412e747473b679f0b59.png" alt="" style="width:450px; float:right; margin-left: 50px"/>

You need to add some obstacles to make this fun. If you notice, an obstacle is composed of two pipes, position one at the top, and the other at the bottom, and of course make a gap between them where 'Faby' could pass.

It might be a good idea to create an array to store all our obstacles. This will help us later to move them, and check if 'Faby' collided with one of them.

For now, just push them into the array.

You can start creating your obstacle using 2 rectangles, an upper and a lower one. This way, you "only" have to replace the rectangles by the images in the `assets` folder.

Your obstacles should be moving on the `x-axis` so you might want to update their `x` property and have them moving towards Faby.

💡 You can use the frameCount to create your obstacles.

## Fourth Iteration: Checking crashes

When 'Faby' crashes in one of the obstacles, or goes out of the `canvas` the game should stop.

In this iteration, you need to create a function that checks if 'Faby' have not crush to any obstacle.

In your `Obstacle` class, add a method that checks whether one of your rectangles have collided with the Bird or not.

To help you, create a `rect` in your Bird so that you can compare if your Bird overlaps with any of the obstacle's `rectangles`

[Rectangle Intersection](https://silentmatt.com/rectangle-intersection/)

### BONUS: Adding points

If we want to challenge somebody, we need to know who makes more points. Go ahead and add it to the game.

Oh! And when you lose, show how much they get!
