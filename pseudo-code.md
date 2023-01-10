# Pseudo code

- Decide the size of grid
- Create a robot
- Set robot initial location
- Robot to receive instructions
- Robot interpretate instructions
- Move the robot
- Robot scent feature
- Set blocking move if previous scent is set and robot might fall from grid

## Decide the size of grid

Starting from the bottom left corner is position `(0,0)`, we receive coordinates for the upper right corner, setting the grdi dimensions.

## Create a robot

We need to create a variable for the robot

## Set robot initial location

We need to receive initial location coordinates as an input, we place the robot in this initial location

## Robot to receive instructions

We need to receive instructions as an input

## Robot interpretate instructions

We need to update it's location by:

## If we need to move forward

### Orientantion is N

It's new position will (X, Y+1)

### Orientantion is E

It's new position will (X+1, Y)

### Orientantion is S

It's new position will (X, Y-1)

### Orientantion is W

It's new position will (X-1, Y)

## How we might set rudder to change orientation

Setting a matrix (array) for orientation

```js
const compass = ['N', 'E', 'S', 'W'];

let compassCurrentLocation = compass[0];
```

## Move robot

Check current position and orintation, interprate next instruction command and execute
