namespace SpriteKind {
    export const bounce = SpriteKind.create()
}
function create_s (bounceBall: Sprite) {
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 5 2 . . . . . . 
        . . . . . . 2 5 2 5 . . . . . . 
        . . . . . . 2 4 2 2 . . . . . . 
        . . . . . . 2 5 2 2 . . . . . . 
        . . . . . 2 4 5 2 2 2 . . . . . 
        . . . . . 2 2 4 5 5 2 . . . . . 
        . . . . . 2 2 4 2 5 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 7, -101)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bounce, function (sprite, otherSprite) {
    sprites.destroy(sprite)
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
