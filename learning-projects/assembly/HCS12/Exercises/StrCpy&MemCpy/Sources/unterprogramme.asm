;   Local variable demo
;   Assembler subroutine
; 
;   Computerarchitektur 3
;   (C) 2019 J. Friedrich, W. Zimmermann
;   Hochschule Esslingen
;
;   Author:  W.Zimmermann, Feb 4, 2019

; export symbols
            XDEF   StrCpy, MemCpy

; import symbols
                                        ; (Not used here)

; include processor definitions (if necessary)
            INCLUDE 'mc9s12dp256.inc'

; RAM: global assembler data in RAM
.data: SECTION                          ; (Not used here)

; ROM: Constant data
.const:SECTION                          ; (Not used here)

; ROM: Assembler program code in RAM
.init: SECTION  

; int  StrCpy(char *dest, const char *src);
StrCpy:                                 ; D contains *src (pointer is 2 Byte), *dest on stack
        TFR D, X                        ; X contains *src
        LDY 2, SP                       ; Y contains *dest
        LDD #0                          ; set D to 0

check:  
        TST 0, X                        ; test if *src == null
        BEQ null

        MOVB 1, X+, 1, Y+               ; copy *src to *dest
        ADDD #1                         ; increment counter
        BRA check

null:   
        MOVB #0, Y
        RTS

; void MemCpy(void *dest, const void *src, int n);
MemCpy:                                 ; D contains n (how many bytes to copy)
        LDX 2, SP                       ; X contains *src
        LDY 4, SP                       ; Y contains *dest

memCheck:  
        CPD #0                          ; compare n to 0
        BEQ memNull

        MOVB 1, X+, 1, Y+               ; copy *src to *dest
        SUBD #1                         ; decrement n
        BRA memCheck

memNull:
        RTS