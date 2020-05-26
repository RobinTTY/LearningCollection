;
;   Lab 1 - Test program for LCD driver
;
;   Computerarchitektur / Computer Architecture
;   (C) 2020 J. Friedrich, W. Zimmermann
;   Hochschule Esslingen
;
;   Author:   J.Friedrich
;   Last Modified: W.Zimmermann, Mar 24, 2020

; Export symbols
        XDEF Entry, main

; Import symbols
        XREF __SEG_END_SSTACK                   ; End of stack
        XREF initLCD, writeLine, delay_10ms     ; LCD functions
        XREF decToASCII, hexToASCII, toLower    ; helper functions
        XREF initLED, setLED, getLED, toggleLED
        XREF delay_0_5sec

; Include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

; Defines

; RAM: Variable data section
.data:  SECTION
i: DS.W 1
decimal: DS.B 6
hex: DS.B 6

; ROM: Constant data
.const: SECTION

; ROM: Code section
.init:  SECTION

main:
Entry:
        LDS  #__SEG_END_SSTACK          ; Initialize stack pointer
        CLI                             ; Enable interrupts, needed for debugger

        JSR delay_10ms                  ; Delay 20ms during power up
        JSR delay_10ms

        JSR initLCD                     ; Initialize the LCD and LEDs
        JSR initLED

        LDD #0                          ; initialize counter variable
        STD i

loop:   LDX #decimal                    ; print decimal value on first line
        LDD i
        JSR decToASCII
        LDAB #0
        JSR writeLine

        LDX #hex                        ; print hex value on second line
        LDD i
        JSR hexToASCII
        LDAB #1
        JSR writeLine

        LDD i                           ; output to leds
        JSR setLED

        BRSET PTH, #$01, inc_sixteen    ; check buttons
        BRSET PTH, #$02, inc_ten
        BRSET PTH, #$04, dec_ten
        BRSET PTH, #$08, dec_one
        
        ADDD #1                         ; increment i
        STD i
        BRA wait
inc_sixteen:
        ADDD #16
        STD i
        BRA wait
inc_ten:
        ADDD #10
        STD i
        BRA wait
dec_ten:
        SUBD #10
        STD i
        BRA wait
dec_one:
        SUBD #1
        STD i
        BRA wait

wait:   JSR delay_0_5sec
        BRA loop






