namespace SpriteKind {
    export const bounce = SpriteKind.create()
}
function create_ball () {
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
}
let ball: Sprite = null
let mySprite = sprites.create(img`
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
