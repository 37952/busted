namespace SpriteKind {
    export const bounce = SpriteKind.create()
    export const s = SpriteKind.create()
    export const m = SpriteKind.create()
    export const all = SpriteKind.create()
}
function create_all (mBall: Sprite, go_left: boolean) {
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
        `, SpriteKind.all)
    ball.setPosition(mBall.x, mBall.y)
    ball.setBounceOnWall(true)
    ball.ay = 100
    ball.vy = -99
    if (go_left) {
        ball.vx = 80
    } else {
        ball.vx = -80
    }
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
    ball.vy = 99
    if (goLeft) {
        ball.vx = 80
    } else {
        ball.vx = -80
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    list = sprites.allOfKind(SpriteKind.Projectile)
    for (let value of list) {
        sprites.destroy(value, effects.fire, 200)
    }
    projectile = sprites.createProjectileFromSprite(img`
        ...
        ...
        ...
        ...
        ...
        ...
        ...
        .f.
        fff
        fff
        .8.
        .f.
        ..2
        .f.
        .f.
        .f.
        2..
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        ..2
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        2..
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        ..2
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        2..
        .8.
        .8.
        .8.
        .8.
        ..2
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        2..
        .8.
        .8.
        .8.
        .8.
        .8.
        ..2
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        2..
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        .8.
        ..2
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        2..
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .f.
        .8.
        .8.
        .f.
        ...
        ...
        ...
        ...
        ..1
        `, mySprite, 0, -101)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bounce, function (sprite, otherSprite) {
    create_bounce()
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bounce, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    create_s(otherSprite, true)
    create_s(otherSprite, false)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.s, function (sprite, otherSprite) {
    create_bounce()
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.m, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    create_all(otherSprite, true)
    create_all(otherSprite, true)
    sprites.destroy(otherSprite)
})
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
    ball.vy = -99
    if (goLeft) {
        ball.vx = 80
    } else {
        ball.vx = -80
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.s, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    create_m(otherSprite, true)
    create_m(otherSprite, false)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.all, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.hearts, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.m, function (sprite, otherSprite) {
    create_bounce()
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let list: Sprite[] = []
let ball: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
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
game.onUpdate(function () {
    list = sprites.allOfKind(SpriteKind.Projectile)
    for (let value of list) {
        if (value.top <= 0) {
            projectile.vy = 0
            projectile.top = 0
        }
    }
})
