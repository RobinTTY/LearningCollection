; export symbols
        XDEF delay_0_5sec

; DEFINES
SPEED:  EQU     2048                   ; Change this number to change counting speed

; RAM: Variable data section
.data: SECTION

; ROM: Constant data
.const:SECTION

; ROM: Code section
.init: SECTION

delay_0_5sec:
        LDX  #SPEED                     ; Delay loop to control toggle Frequency 
waitO:  LDY  #SPEED                     ; (Uses two nested counter loops with registers X and Y)
waitI:  DBNE Y, waitI                   ; --- Decrement Y and branch to waitI if not equal to 0
        DBNE X, waitO                   ; --- Decrement X and branch to waitO if not equal to 0
        
        RTS