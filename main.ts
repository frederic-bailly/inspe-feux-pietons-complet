input.onButtonPressed(Button.A, function () {
    appel_pieton += 1
})
input.onButtonPressed(Button.B, function () {
    appel_pieton += 1
})
let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Red))
for (let index = 0; index < 5; index++) {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(500)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(500)
    strip.show()
}
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
strip.show()
let appel_pieton = 0
basic.forever(function () {
    if (appel_pieton == 1) {
        basic.pause(1000)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(3000)
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(2000)
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(8000)
        for (let index = 0; index < 4; index++) {
            strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Black))
            strip.show()
            basic.pause(500)
            strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(500)
        }
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(1000)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        appel_pieton = 0
    }
})
