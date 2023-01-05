namespace SpriteKind {
    export const LUISI = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.player1.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.LUISI, assets.tile`myTile0`, function (sprite, location) {
    info.player2.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.player1.changeLifeBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (LUISI.isHittingTile(CollisionDirection.Bottom)) {
        LUISI.vy = -130
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.isHittingTile(CollisionDirection.Bottom)) {
        mario.vy = -130
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.splatter)
})
scene.onOverlapTile(SpriteKind.LUISI, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.confetti)
})
info.player1.onLifeZero(function () {
    mario.destroy()
    scene.cameraFollowSprite(LUISI)
    marioMuerto = 1
    if (luigiMuerto == 1 && marioMuerto == 1) {
        game.over(false, effects.smiles)
    }
})
info.player2.onLifeZero(function () {
    LUISI.destroy()
    luigiMuerto = 1
    if (luigiMuerto == 1 && marioMuerto == 1) {
        game.over(false, effects.smiles)
    }
})
scene.onOverlapTile(SpriteKind.LUISI, assets.tile`myTile3`, function (sprite, location) {
    info.player2.changeLifeBy(-1)
})
let luigiMuerto = 0
let marioMuerto = 0
let mario: Sprite = null
let LUISI: Sprite = null
info.player2.setLife(1)
info.player1.setLife(1)
LUISI = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 f 7 7 f f f . . . 
    . . f f f 7 7 f f 7 7 f f f . . 
    . . f f 7 7 7 7 7 7 7 7 7 f . . 
    . . f 7 7 7 f f f f 7 7 7 f . . 
    . . f f f f 7 7 7 7 f f f f . . 
    . f f 7 f b f 7 7 f b f 7 f f . 
    . f 7 7 7 1 f 7 7 f 1 4 7 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 f . . 
    . . . 7 7 7 7 7 7 7 7 7 f . . . 
    . . e 4 f 7 7 7 7 7 7 f 4 e . . 
    . . 4 d f 7 7 7 7 7 7 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.LUISI)
animation.runImageAnimation(
LUISI,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f 7 7 7 7 f f f . . . 
    . . . f f 7 7 7 7 f f f f f . . 
    . . . f 7 7 7 f f 7 7 7 7 f . . 
    . . . f f f f f 7 7 7 7 7 7 f . 
    . . . f f f f f f f f f 7 7 f . 
    . . f f f f f f f 7 7 7 f f f . 
    . . f f f 7 7 7 b f 4 4 7 7 f . 
    . . f f f 7 7 7 1 f d d 7 f . . 
    . . . f 7 7 7 7 d d d d f . . . 
    . . . . f 7 7 7 7 7 7 7 f . . . 
    . . . . . 7 7 7 7 7 7 7 f . . . 
    . . . . . 7 7 7 7 7 7 7 f . . . 
    . . . . . f 7 7 7 7 7 7 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f 7 7 7 7 f f f . . . 
    . . . f f 7 7 7 7 f f f f f . . 
    . . . f 7 7 7 f f 7 7 7 7 f . . 
    . . . f f f f f f 7 7 7 7 7 f . 
    . . . f f f f f f f f f 7 7 f . 
    . . f f f f f f f 7 7 f f f f . 
    . . f f 7 7 7 7 b f 4 4 f f f . 
    . . f 7 7 7 7 7 1 f d d 7 f . . 
    . . . f 7 7 7 7 7 d d d f . . . 
    . . . . . f 7 7 7 7 7 7 f . . . 
    . . . . . f 7 7 7 7 7 7 f . . . 
    . . . . f f f 7 7 f 7 7 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f 7 7 7 7 f f f . . . 
    . . . f f 7 7 7 7 f f f f f . . 
    . . . f 7 7 7 f f 7 7 7 7 f . . 
    . . . f f f f f f 7 7 7 7 7 f . 
    . . . f f f f f f f f f 7 7 f . 
    . . f f f f f f f 7 7 7 f f f . 
    . . f f 7 7 7 7 b f 4 4 7 7 f . 
    . . f 7 7 7 7 7 1 f d d 7 f . . 
    . . . f 7 7 7 7 d d d d f . . . 
    . . . . f f 7 7 7 7 7 7 f . . . 
    . . . . . 7 7 7 7 7 7 7 f . . . 
    . . . . . 7 7 7 7 7 7 7 f . . . 
    . . . . . f 7 7 7 7 7 7 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f 7 7 7 7 f f f . . . 
    . . . f f 7 7 7 7 f f f f f . . 
    . . . f 7 7 7 f f 7 7 7 7 f . . 
    . . . f f f f f 7 7 7 7 7 7 f . 
    . . . f f f f f f f f f 7 7 f . 
    . . f f f f f f f 7 7 7 f f f . 
    . . f f 7 7 7 7 b f 4 4 7 7 f . 
    . . f 7 7 7 7 7 1 f d d 7 f . . 
    . . . f 7 7 7 7 d d d d f . . . 
    . . . . 7 7 7 7 7 7 7 7 f . . . 
    . . . . 7 7 7 7 7 7 7 7 f . . . 
    . . . . f 7 7 f 7 7 7 7 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
100,
true
)
LUISI.ay = 170
controller.player2.moveSprite(LUISI, 50, 0)
LUISI.setPosition(39, 550)
tiles.setCurrentTilemap(tilemap`nivel1`)
mario = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mario,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
100,
true
)
mario.setPosition(28, 550)
controller.moveSprite(mario, 50, 0)
mario.ay = 170
scene.cameraFollowSprite(mario)
marioMuerto = 0
luigiMuerto = 0
