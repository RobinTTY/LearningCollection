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
        XREF decToASCII

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

        LDD #32767
        LDX #string
        JSR decToASCII

        LDD #-32768
        JSR decToASCII

        LDD #9001
        JSR decToASCII

        LDD #255
        JSR decToASCII

        LDD #256
        JSR decToASCII

        LDD #-256
        JSR decToASCII

        LDD #100
        JSR decToASCII

        LDD #-99
        JSR decToASCII

        LDD #0
        JSR decToASCII
        
loop:   BRA loop

