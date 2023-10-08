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
StrCpy: TFR   D,  X                     ; Pointer *src  -> X
        LDY   +2, SP                    ; Pointer *dest -> Y
        CLRA                            ; Initialize counter for copied bytes in D
        CLRB
        
SCpy:   MOVB  1, X+, 0, Y               ; Copy byte
        TST   1, Y+                     ; If end of string, ...
        BEQ   ESCpy                     ; ... goto to return
	      ADDD  #1
        BRA   SCpy

ESCpy:  RTS                             ; Return to caller


; void MemCpy(void *dest, const void *src, int n);
MemCpy: LDX   +2, SP                    ; Pointer *src  -> X
        LDY   +4, SP                    ; Pointer *dest -> Y

        CPD   #0                        ; Just in case someone calls the function with n=0      
        BEQ   ECpy

MCpy:   MOVB  1, X+, 1, Y+              ; Copy byte
        SUBD  #1                        ; If not all bytes copied, ...
        BNE   MCpy                      ; ... goto next byte
        
ECpy:   RTS                             ; Return to caller
