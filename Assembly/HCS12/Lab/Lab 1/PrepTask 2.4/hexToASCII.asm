; export symbols
        XDEF hexToASCII

; Defines

; Defines

; RAM: Variable data section
.data: SECTION
i: DS.B 1

; ROM: Constant data
.const: SECTION

; ROM: Code section
.init: SECTION
H2A:  DC.B  "0123456789ABCDEF", 0

hexToASCII:
        PSHD
        PSHX
        PSHY

        MOVB #0, 6,X    ; save 0 Byte
        MOVB #$0, X
        MOVB #$78, 1,X  ; 78 hex = 'x'

        INX             ; increment string pointer to second to last index
        INX
        INX
        INX
        INX

        CLR i        
        BRA cond

body:
        TST i           ; check if X is 0
        BNE shift
body2:  PSHD            ; save val before AND

        ANDB #$0F
        TFR B, Y        ; register indirect addressing only works with X and Y -> move from B to Y
        LDAB H2A, Y     ; get value from H2A with index Y
        STAB X          ; store result from B into X (address)
        DEX             ; decrement string pointer
        PULD

inc:    INC i

cond:   PSHB
        LDAB i          ; load counter into B
        CMPB #4         ; compare counter to for loop limit
        PULB
        BLT body

        PULY
        PULX
        PULD
        RTS

shift:
        LSRD            ; shift val 4 times right
        LSRD
        LSRD
        LSRD
        BRA body2