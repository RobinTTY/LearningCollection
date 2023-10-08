;   Blinking LEDs on Dragon12 - ASM version
;
;   Computerarchitektur 3
;   (C) 2019 J. Friedrich, W. Zimmermann
;   Hochschule Esslingen
;
;   Author:  W.Zimmermann, Feb 4, 2019
;            (based on code provided by J. Friedrich)
;


; export symbols
        XDEF Entry, main

; import symbols
        XREF __SEG_END_SSTACK           ; End of stack

; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

IMAX: EQU 2048                          ; Symbolic constant
SEVEN_SEGS_OFF  EQU 1                   ; Uncomment this to turn seven segment display off

; RAM: Variable data section
.data: SECTION                          ; (Not used here, count variable i is put in register)
counter: DS.B 1

; ROM: Constant data
.const:SECTION                          ; (Not used here)

.vect:  SECTION
        ORG $FFF0
        DC.W isr7

; ROM: Code section
.init: SECTION  

main:                                   ; Begin of the program
Entry:                  
        LDS  #__SEG_END_SSTACK          ; Initialize stack pointer
        CLI                             ; Enable interrupts, needed for debugger

        BSET DDRJ, #2                   ; Bit Set:   Port J.1 as output
        BCLR PTJ,  #2                   ; Bit Clear: J.1=0 --> Activate LEDs

  ifdef SEVEN_SEGS_OFF        
        MOVB #$0F, DDRP                 ; Port P.3..0 as outputs (seven segment display control)
        MOVB #$0F, PTP                  ; Turn off seven segment display
  endif

        MOVB #$FF, DDRB                 ; $FF -> DDRB:  Port B.7...0 as outputs (LEDs)
        MOVB #$55, PORTB                ; $55 -> PORTB: Turn on every other LED
        
        MOVB #0, counter
        MOVB #$7F, RTICTL               ; X=7, Y=15
        BSET CRGINT, #$80               ; Enable RTI interrupt

loop:   BRA loop                        ; Branch to loop

isr7:   LDAB counter
        CMPB #3
        BLT noChange
        COM  PORTB
        MOVB #-1, counter

noChange:
        INC counter
        BSET CRGFLG, #$80
        RTI
