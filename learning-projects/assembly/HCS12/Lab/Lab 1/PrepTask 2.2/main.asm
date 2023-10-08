;   Lab 1 - Problem 2.1
;   Incrementing a value once per second and binary output to LEDs
;
;   Computerarchitektur / Computer Architecture
;   (C) 2020 J. Friedrich, W. Zimmermann
;   Hochschule Esslingen
;
;   Author:   W.Zimmermann, Mar 24, 2020
;            (based on code provided by J. Friedrich)
;   Modified: Robin Müller
;

; export symbols
        XDEF Entry, main
        XREF delay_0_5sec
        XREF initLED, setLED, getLED, toggleLED

; import symbols
        XREF __SEG_END_SSTACK           ; End of stack

; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

; Defines


; RAM: Variable data section
.data: SECTION

; ROM: Constant data
.const:SECTION

; ROM: Code section
.init: SECTION

main:                                   ; Begin of the program
Entry:
        LDS  #__SEG_END_SSTACK          ; Initialize stack pointer
        CLI                             ; Enable interrupts, needed for debugger

        JSR initLED
        BRA zero

zero:   LDD #0                          ; initialize counter
        JSR delay_0_5sec
        
loop:   JSR setLED                      ; this should call setLED
        ADDD #2        
        CPD #64                         ; compare D with 64
        BEQ one
        CPD #65                         ; compare D with 65
        BEQ two
        JSR delay_0_5sec
        BRA loop

one:    LDD #1
        JSR delay_0_5sec
        BRA loop
two:    LDD #2
        JSR delay_0_5sec
        BRA loop