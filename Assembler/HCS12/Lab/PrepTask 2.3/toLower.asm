;   Lab 1 - toLower
;   Convert a zero-terminated ASCIIZ string to lower characters
;   Subroutine toLower
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
        XDEF toLower, strCpy

; Defines

; Defines

; RAM: Variable data section
.data: SECTION

; ROM: Constant data
.const: SECTION

; ROM: Code section
.init: SECTION

toLower:    PSHD            ; save register state
            PSHX

            TFR D, X        ; move string-pointer to X
next:       LDAB 0, X       ; move first character to B

            TSTB            ; test for string end (TST tests against 0 and negative)
            BEQ end         ; if equal branch to end

            CMPB #'A'       ; compare B against 'A' (without hash would be interpreted as memory address)
            BLO continue    ; continue with next char if compared char is 'smaller' than a
            CMPB #'Z'       ; compare B against 'Z'
            BHI continue    ; continue if 'higher'

            ADDB #32        ; if we get here the char is uppercase and is now made lowercase
            STAB X          ; copy lowered char to RAM

continue:   INX             ; continue with next char in input string (increment pointer)
            BRA next        ; next iteration

end:        PULX            ; restore registers and return from subroutine
            PULD
            RTS

strCpy: PSHX                            ; save registers
        PSHY

nextC:  MOVB 1,X+ , 0,Y                 ; copy one character and increment X by one
        TST 1,Y+                        ; check for string end (zero) and increment Y
        BNE nextC                       ; branch not equal -> repeat

        PULY                            ; restore register and return
        PULX
        RTS