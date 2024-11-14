namespace SpriteKind {
    export const MadPerson = SpriteKind.create()
}
function SetDifficulty () {
    if (Difficulty == 0) {
        MaxDogs = 5
        DogVelocity = 25
        MaxDogVelocity = 50
    } else if (Difficulty == 1) {
        MaxDogs = 3
        DogVelocity = 50
        MaxDogVelocity = 75
    } else if (Difficulty == 2) {
        MaxDogs = 1
        DogVelocity = 100
        MaxDogVelocity = 150
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(Turkey)
    game.gameOver(false)
})
function FalseDifficultyInput () {
    if (Difficulty != 0 && (Difficulty != 1 && Difficulty != 2)) {
        game.splash("Please choose a different number")
        game.reset()
    }
}
function SpawnDog () {
    for (let index = 0; index < 3; index++) {
        Dog = sprites.create(img`
            bbbb........bbbb.................
            c44bb......bb44b.................
            c444bb....bb444c.................
            c4b44bccccb44b4c.................
            c4bb44bccb44bb4c.................
            c43b44444444b34c.................
            c43344444444334c.................
            c44344444444344c.................
            c44444441144444c.................
            c444ff41114ff44c........bbbbbb...
            c444ff41111ff44c.......c444444bb.
            c44441111111444c......c44444444b.
            c4441111fff1144c.....c4441114444b
            c444c11fff1144bc.....c4411111444b
            c444cc111111c4bc.....c411dd11144b
            c44444bb33cc44bcc....cbddbbd1144c
            c444444b33c44444bbccccbbdbbb1144c
            c4444444bb4444444444444444bb1444c
            c444411114444444444444444444b444c
            c444111111444444444444444444444c.
            c44411111114444444444444444444cc.
            c44111111114444444444444444444c..
            c44111111111444444444444444444c..
            cb4111111111444444444444444444c..
            .f4111111111444444444444444444c..
            .ff111111111444444444444444444c..
            ..fb11111111444444444444444444c..
            ...fb1111114444444111111444444c..
            ...fbbb11114444441111111144444c..
            ....fbbfffb4444ccccccccccb4444c..
            ....fbbf..f444c.....fbbf.c4444c..
            ....fbbf..f444c.....fbbf.cc4444c.
            ....fbbf..f44c.......fbf..cc444c.
            ....fbbf..f44c.......fbbf..cc44c.
            ....fbbf..f44c.......fbbf...c44c.
            ....fbbf..f44c......fbbbf...c44c.
            ...fbbbf..f44c......ffff....cb4c.
            ...fbbf..f444c.............c444c.
            ...ffff..f44cc.............c444c.
            .........fffc..............cccc..
            `, SpriteKind.Projectile)
        DogCounter += 1
        Turkey.sayText(DogVelocity)
        Dog.setPosition(randint(10, 150), randint(55, 110))
        Dog.scale = 0.53
        Dog.setVelocity(DogVelocity, DogVelocity)
        Dog.setBounceOnWall(true)
    }
}
let DogCounter = 0
let Dog: Sprite = null
let MaxDogVelocity = 0
let DogVelocity = 0
let MaxDogs = 0
let Difficulty = 0
let Turkey: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999939999999999999999933999999999
    999999999999999999999939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993339333399999999999999993393999ccc9
    9999999999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99
    9999999999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99
    9999993399999999993333333999999999999999999999999999999999339999999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b3399ccc9
    9c9933333cc9999999333333399999999999999999999999999999999333339999999999999999999999999999999999999999999999999999999999999993335553339999999999993333553339cc99
    cc93333333399999993335333339999999999999999cc99999cccc99933333399cc9999999999999999999999999999999999cc9999999999cc99999999993335533339999999999999335553339ccc9
    c9c93353333cc999993355533399999cc9999999999cc999999999933355333999999999cc9cc9999999cc99999999c999999cc99999c9999ccc99999999999333333999999c9999993333533c99cccc
    99cc3555339cc99c93333533333c999cc99cc99999999999999999933353333999999999c999c999999999999c9999c9999999999999c9999c9999999cccc93333333cc999ccc99999333333cccccccc
    cc9333333399cc99933333333399999999cc999999c999999cc9999333333399999999c99999999999cc99999cc99999c999c9cc99999cc99999ccc99cccc97333739cc9999cc999999333333cccccc9
    ccc33333339cc99999933333399999cc99999999c9999999999999933333339c9cc999c99c99999999cc9999999c999cc999999999999cc9999999c999cc9977777799c9999cc999cc999979399cc9cc
    cccc977339ccc99997797777c99999cc99999999c9999999a99999993933339999c999999c99c9999999999cc9cc999c999cc999999969999999999999999977777999cc9999c999cc999777799cc9cc
    c997777799c979997779777799999999aa79c9977999777aa99777c797737777799999c9999cc99999997799c9aa997c999779c799996979cc977cc7aa9c9997779997cc9999c99999779777799cc9cc
    779777779777777979777777797c7796a7797c977797777aaaaa777797777777779977c99779997799c977779a6a977779977977999969797c977c779a6c7797797777c77c77999c7a7aa777cc99cccc
    779777779777777979777777797c7796a7797c977797777aaaaa777797777777779977c99779997799c977779a6a977779977977999969797c977c779a6c7797797777c77c77999c7a7aa777cc99cccc
    777977779777a7777c777797797c779aaa777777777777777777777777777777777c77c7777777777777777777aa7777777777777777aa777777777aa7aa777777777777777777997a7a7779979c7797
    779977777777aa7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777777777aa77777777777777777777777777a777777cc7797
    77777777777777777777777777777a7777777777777777777777777777a777777777777777777777aaa7777777777777777777aa77777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777a777777777777777777777777777aa7777777777777777777777777777777777aa777777777777777777777777777777777777777a7777777777777777777777777
    777777777777777777777777777777777777777aa77777777777777777a77777777777777777777777777777777777a777777777777777777777777777777777777777a7777777777777777777777777
    7777777777777777aa777777777777777777777aa77777777aa7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777a7777777777777777aa77777777777777777777777777777777777777777777777777777777777777777777777777777777777aa7777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777777777777aa7777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777aa777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777aa777777777777777777777777777777777
    7777777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777
    77777aa77777777777777777aa777777777a7777777aa7777777777777a777777777777777777777777777777777777777777777a7777777777777777777777777777777777777777777777777777777
    77777aa7777777777777777777777777777a7777777777777777777777aa7777777777777777777777777777777777777777777aa7777777777777777777777777777777777aa7777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777b777777777777777777777777777777777777777777777777777777777777777777aa77777
    77777777777777777777777777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777aa777777777777777777777a77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
Turkey = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ........ccccc...................
    ......ccbbbbbc..................
    ....ccddbbbbbbf.................
    ...cbbbddbbffbf.................
    ....ffffdbbffbff................
    .......fbbbbbbbf................
    .......fbbbbbbbff...............
    ......ffbbbbbbbbfff.............
    ......f6bbbbbb663ddcc...........
    .....cc66bbbb666dddddc..........
    .....cd36666663dddddddc.........
    .....cddd3333dbddddddbcc........
    .....cddddddddbdddddbbddc.......
    .....cddddddddbbdddbbdddbc......
    ......cddddddddbbdbbddddbbccc...
    ......ccddddddddbbbbcccccbbbcc..
    .......ccddddddddddddddbccffff..
    ........cccbddccbddddbbfff......
    ........c333bb333cbbfff.........
    ........c33cc33cc3fff...........
    `, SpriteKind.Player)
Turkey.setPosition(randint(10, 150), randint(10, 150))
Turkey.scale = 0.62
Turkey.setVelocity(75, 75)
info.setScore(0)
controller.moveSprite(Turkey)
Difficulty = 3
Difficulty = game.askForNumber("Choose your difficulty: 0 to 2", 1)
FalseDifficultyInput()
SetDifficulty()
Turkey.setBounceOnWall(true)
game.onUpdateInterval(850, function () {
    if (MaxDogs > DogCounter) {
        SpawnDog()
    }
})
game.onUpdateInterval(500, function () {
    info.changeScoreBy(1)
})
