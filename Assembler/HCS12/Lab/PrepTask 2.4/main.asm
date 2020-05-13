;   Lab 1 - Test program for toLower
;   Convert a zero-terminated ASCIIZ string to lower characters
;   Main program
;
;   Computerarchitektur / Computer Architecture
;   (C) 2020 J. Friedrich, W. Zimmermann
;   Hochschule Esslingen
;
;   Author:   W.Zimmermann, Jan 30, 2020
;            (based on code provided by J. Friedrich)
;   Modified: -
;

; export symbols
        XDEF Entry, main

; import symbols
        XREF __SEG_END_SSTACK           ; End of stack
        XREF hexToASCII

; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

; Defines

; RAM: Variable data section
.data:  SECTION
string: DS.B 80

; ROM: Constant data
.const: SECTION

; ROM: Code section
.init:  SECTION

main:                                   ; Begin of the program
Entry:
        LDS  #__SEG_END_SSTACK          ; Initialize stack pointer
        CLI                             ; Enable interrupts, needed for debugger

        LDD #4660                       ; parameter val -> D
        LDX #string                     ; parameter string -> X (pointer)
        JSR hexToASCII

        LDD #0                          ; parameter val -> D
        JSR hexToASCII
        LDD #1                          ; parameter val -> D
        JSR hexToASCII
        LDD #15                         ; parameter val -> D
        JSR hexToASCII
        LDD #16                         ; parameter val -> D
        JSR hexToASCII
        LDD #255                        ; parameter val -> D
        JSR hexToASCII
        LDD #256                        ; parameter val -> D
        JSR hexToASCII
        LDD #257                        ; parameter val -> D
        JSR hexToASCII
        LDD #4095                       ; parameter val -> D
        JSR hexToASCII
        LDD #4096                       ; parameter val -> D
        JSR hexToASCII
        LDD #65535                      ; parameter val -> D
        JSR hexToASCII





        LDY #$0                         ;counter which is incremented also val

loop1:
        TFR Y, D                        ;counter (val) in reg D
        JSR hexToASCII
        INY                             ;increment counter
        BEQ loopend                     ;end on rollover (65 536)
        BRA loop1

loopend:
        BRA loopend



