; export symbols
        XDEF decToASCII

; Defines

; Defines

; RAM: Variable data section
.data: SECTION
multiplier: DS.W 1
remainder: DS.W 1
i: DS.B 1
rightPadding: DS.B 1

; ROM: Constant data
.const: SECTION

; ROM: Code section
.init: SECTION

decToASCII:
    	PSHD                ; save registers
        PSHX
        PSHY

        MOVB #0, 6,X        ; save 0 Byte
        CPD #0
        BLT negative
        MOVB #$20, 1,X+     ; first index is space if positive
        BRA conversion

negative:
        MOVB #$2D, 1,X+     ; first index is minus-sign if negative
        LDY #-1             ; multiply val by -1 to get positive value
        EMULS               ; lower byte is all we need and gets stored in D by EMULS

conversion:
        MOVW #10000, multiplier
        STD remainder
        TFR X, Y            ; string pointer now in Y

        CLR i               ; initialize variables (with 0)
        CLR rightPadding
        BRA condition

        ; for loop start
body:   LDD remainder
        LDX multiplier
        IDIV                ; result in X, remainder in D
        EXG X, D            ; result in D, remainder in X

        TST rightPadding    ; test for 0 (has number begun?)
        BNE nonNull
        CPD #0              ; check if result is null, if yes insert space
        BNE nonNull
        MOVB #$20, 1,Y+
        BRA multi

nonNull:
        ADDD #$30           ; $30 = '0'
        STAB 1,Y+
        MOVB #1, rightPadding

        ; divide multiplier by 10
multi:  STX remainder        ; save remainder
        LDD multiplier
        LDX #10
        IDIV
        STX multiplier

        INC i

condition:
        LDAB i
        CMPB #4
        BLT body

        ; last step take remainder + '0'
        LDD remainder
        ADDB #$30
        STAB Y

        PULY                ; restore registers
        PULX
        PULD
        RTS