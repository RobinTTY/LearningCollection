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
        XREF toLower, strCpy

; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

; Defines

; RAM: Variable data section
.data:  SECTION
ramTxt:  DS.B    80                      ; String array (in RAM)

; ROM: Constant data
.const: SECTION
romTxt:  DC.B  "Test 12345 *!? ABCDE abcde zZ", 0

; ROM: Code section
.init:  SECTION

main:                                   ; Begin of the program
Entry:
        LDS  #__SEG_END_SSTACK          ; Initialize stack pointer
        CLI                             ; Enable interrupts, needed for debugger

        LDX #romTxt                     ; copy pointer to rom/ramtxt into registers
        LDY #ramTxt
        JSR strCpy                      ; jump to subroutine strCpy

        LDD #ramTxt                     ; copy pointer to text
        JSR toLower                     ; jump to subroutine toLower

loop:   BRA loop                        ; do nothing loop (should always be at end of program)

