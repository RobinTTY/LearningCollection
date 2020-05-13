; export symbols
        XDEF initLED, setLED, getLED, toggleLED

; import symbols
        XREF __SEG_END_SSTACK           ; End of stack

; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

; DEFINES

; RAM: Variable data section
.data: SECTION

; ROM: Constant data
.const:SECTION

; ROM: Code section
.init: SECTION

initLED:
            BSET DDRJ, #2                   ; Bit Set:   Port J.1 as output
            BCLR PTJ,  #2                   ; Bit Clear: J.1=0 --> Activate LEDs
            MOVB #$FF, DDRB                 ; $FF -> DDRB:  Port B.7...0 as outputs (LEDs)
            MOVB #$00, PORTB                ; turn off all LEDs
            RTS

setLED:
            STAB PORTB                      ; set LEDs as requested from reg B
            RTS

getLED:
            LDAB PORTB
            RTS

toggleLED:
            ANDB PORTB                      ; bitwise AND -> saved to reg B
            STAB PORTB
            RTS
