; export symbols
        XDEF Entry, main

; import symbols
        XREF __SEG_END_SSTACK           ; End of stack

; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

IMAX: EQU 2048                          ; Symbolic constant
SEVEN_SEGS_OFF  EQU 1                   ; Uncomment this to turn seven segment display off

; RAM: Variable data section
.data: SECTION                          ; (Not used here, count variable i is put in register)

; ROM: Constant data
.const:SECTION                          ; (Not used here)

; ROM: Code section
.init: SECTION  

main:                                   ; Begin of the program
Entry:                  
        LDS  #__SEG_END_SSTACK          ; Initialize stack pointer
        CLI                             ; Enable interrupts, needed for debugger

        BSET DDRJ, #2                   ; Bit Set:   Port J.1 as output
        BCLR PTJ,  #2                   ; Bit Clear: J.1=0 --> Activate LEDs

  ifdef SEVEN_SEGS_OFF        
        MOVB #$0F, DDRP                 ; Port P.3..0 as outputs (seven segment display control)
        MOVB #$0F, PTP                  ; Turn off seven segment display
  endif

        MOVB #$FF, DDRB                 ; $FF -> DDRB:  Port B.7...0 as outputs (LEDs)
        MOVB #$55, PORTB                ; $55 -> PORTB: Turn on every other LED
        
loop:   COM  PORTB                      ; Complement Port B: Toggle LEDs (Loop takes approx. 12 Mio CPU cycles => 0,5sec)

        LDX  #IMAX                      ; Delay loop to control toggle Frequency 
waitO:  LDY  #IMAX                      ; (Uses two nested counter loops with registers X and Y)
waitI:  DBNE Y, waitI                   ; --- Decrement Y and branch to waitI if not equal to 0
        DBNE X, waitO                   ; --- Decrement X and branch to waitO if not equal to 0
        
        BRA loop                        ; Branch to loop

