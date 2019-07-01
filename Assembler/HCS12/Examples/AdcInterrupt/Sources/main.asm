; export symbols	   
        XDEF Entry, main

; import symbols
        XREF __SEG_END_SSTACK           ; End of stack

; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

; RAM: Variable data section
.data: SECTION
value: DS.W  1                          ; Measurement value

; ROM: Constant data
.const:SECTION                          ; (Not used here)

; ROM: Interrupt vector entries
.vect: SECTION
        ORG $FFD2
int22:  DC.W adcIsr                     ; Interruptvector for interrupt 22 (ATD0)

; ROM: Code section
.init: SECTION

main:                                   ; Begin of the program
Entry:
        LDS  #__SEG_END_SSTACK          ; Initialize stack pointer
        CLI                             ; Enable interrupts, needed for debugger

        BSET DDRJ, #2                   ; Bit Set:   Port J.1 as output
        BCLR PTJ,  #2                   ; Bit Clear: J.1=0 --> Activate LEDs

        MOVB #$0F, DDRP                 ; Port P.3..0 as outputs (seven segment display control)
        MOVB #$0F, PTP                  ; Turn off seven segment display

        MOVB #$FF, DDRB                 ; $FF -> DDRB:  Port B.7...0 as outputs (LEDs)

        MOVW #$01, value

        ; --- Initialize ATD0 -------------------------------------------------
        MOVB #%11000010, ATD0CTL2       ; Enable ATD0, enable interrupt
        MOVB #%00100000, ATD0CTL3       ; Sequence: 4 measurements
        MOVB #%00000101, ATD0CTL4       ; 10bit, 2MHz ATD0 clock

        MOVB #%10000111, ATD0CTL5       ; Start first measurement on single channel 7

loop:   LDD  value                      ; Show upper 8bits of the 10bit measurement value on LEDs 7...0
        LSRD
        LSRD

        STAB PORTB
        BRA  loop

        ; --- Interrupt Service Routine for interrupt 7 -----------------------
adcIsr: LDD  ATD0DR0                    ; Read the result registers,
        ADDD ATD0DR1                    ; ... compute average of 4 measurements
        ADDD ATD0DR2
        ADDD ATD0DR3
        LSRD
        LSRD
        STD  value                      ; ... and store the result

        BSET ATD0CTL2, #$01             ; Reset interrupt flag (bit 0 in ATD0CTL2)

        MOVB #%10000111, ATD0CTL5       ; Start next measurement on single channel 7

        RTI                             ; Return from interrupt service routine
