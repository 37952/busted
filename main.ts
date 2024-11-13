namespace SpriteKind {
    export const bounce = SpriteKind.create()
    export const s = SpriteKind.create()
    export const m = SpriteKind.create()
}
function create_s (bounceBall: Sprite, goLeft: boolean) {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . 
        . . 3 2 2 2 2 2 2 2 3 . . . . 
        . . 3 2 2 2 2 2 2 2 3 . . . . 
        . . 3 2 2 2 2 2 2 2 3 . . . . 
        . . 3 2 2 2 2 2 2 2 3 . . . . 
        . . 3 2 2 2 2 2 2 2 3 . . . . 
        . . 3 2 2 2 2 2 2 2 3 . . . . 
        . . 3 2 2 2 2 2 2 2 3 . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.s)
    ball.setPosition(bounceBall.x, bounceBall.y)
    ball.setBounceOnWall(true)
    ball.ay = 100
    ball.vy = -24
    if (goLeft) {
        ball.vx = -80
    } else {
        ball.vx = 80
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ...
        ...
        ...
        ...
        ...
        ...
        .f.
        fff
        fff
        f1f
        .2.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        ..1
        `, mySprite, 7, -101)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bounce, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    create_s(otherSprite, true)
    create_s(otherSprite, false)
    sprites.destroy(otherSprite)
})
function create_bounce () {
    ball = sprites.create(img`
        . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 3 3 3 3 3 3 3 2 . . . 
        . . 2 3 3 3 3 3 3 3 3 3 2 . . 
        . 2 3 3 3 3 3 3 3 3 3 3 3 2 . 
        . 2 3 3 3 3 3 3 3 3 3 3 3 2 . 
        . 2 3 3 3 3 2 2 2 3 3 3 3 2 . 
        . 2 3 3 3 3 2 3 2 3 3 3 3 2 . 
        . 2 3 3 3 3 2 2 2 3 3 3 3 2 . 
        . 2 3 3 3 3 3 3 3 3 3 3 3 2 . 
        . 2 3 3 3 3 3 3 3 3 3 3 3 2 . 
        . . 2 3 3 3 3 3 3 3 3 3 2 . . 
        . . . 2 3 3 3 3 3 3 3 2 . . . 
        . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.bounce)
    ball.setPosition(randint(50, 120), 24)
    ball.setBounceOnWall(true)
    ball.ay = 100
    ball.vx = 89
}
function create_m (sBall: Sprite, goLeft: boolean) {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 2 2 2 2 2 3 . . . . . 
        . . . 3 2 5 5 5 2 3 . . . . . 
        . . . 3 2 5 5 5 2 3 . . . . . 
        . . . 3 2 5 5 5 2 3 . . . . . 
        . . . 3 2 2 2 2 2 3 . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.m)
    ball.setPosition(sBall.x, sBall.y)
    ball.setBounceOnWall(true)
    ball.ay = 100
    ball.vy = -24
    if (goLeft) {
        ball.vx = -80
    } else {
        ball.vx = 80
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.s, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    create_m(otherSprite, true)
    create_m(otherSprite, false)
    sprites.destroy(otherSprite)
})
let projectile: Sprite = null
let ball: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(2)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 . 8 8 . . . . . 
    . . . . 8 8 . 8 . 8 8 . . . . . 
    . . . . 8 . . 8 8 . 8 8 . . . . 
    . . . . 8 . . . . . 8 8 . . . . 
    . . . . 8 8 . . 8 8 8 . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . 8 8 . . . 8 . . . . . . 
    . . . . 8 . . . . 8 . . . . . . 
    . . . 8 8 . . . . 8 . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    `, SpriteKind.Player)
mySprite.bottom = 100
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 0)
create_bounce()
