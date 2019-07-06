;   Serial Interface Demo on Dragon12 (uses polling)
;
;   Computerarchitektur 3
;   (C) 2018-2019 J. Friedrich, W. Zimmermann
;   Hochschule Esslingen
;
;   Author:  W.Zimmermann, Jul 4, 2018
;


; export symbols
        XDEF Entry, main

; import symbols
        XREF __SEG_END_SSTACK           ; End of stack

; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

; Defines
; This data structure defines all registers of the serial interface so that the program can use
; SCI0 or SCI1 without changing the program code
  IFDEF _HCS12_SERIALMON
    SCIxBD: EQU  SCI1BD                 ; On Dragon12 we use SCI1
  ELSE
    SCIxBD: EQU  SCI0BD                 ; In the simulator we use SCI0 (because the simulator does not simulate SCI1)
  ENDIF
    SCIxCR1:EQU (SCIxBD+2)              ; SCI control register 1
    SCIxCR2:EQU (SCIxBD+3)              ; SCI control register 2
    SCIxSR1:EQU (SCIxBD+4)              ; SCI status register 1
    SCIxSR2:EQU (SCIxBD+5)              ; SCI status register 2
    SCIxDRH:EQU (SCIxBD+6)              ; SCI data register high byte (not used)
    SCIxDRL:EQU (SCIxBD+7)              ; SCI data register low byte

CR: EQU  13                             ; ASCII code for Carriage Return
LF: EQU  10                             ; ASCII code for Line Feed

; RAM: Variable data section
.data: SECTION                          

; ROM: Constant data
.const:SECTION
message1: DC.B  "Please enter a character", CR, LF, "LEDs on the Dragon12 will display its ASCII code", CR, LF, 0
message2: DC.B  "Ok - I got: ' ", 0
message3: DC.B  " '", CR, LF, "Enter next character please", CR, LF, 0

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
        MOVB #$55, PORTB                ; $55 -> PORTB: Turn on every other LED
 
        ; Initalize the serial interface       
        MOVW #(24000000/(16*115200)), SCIxBD    ; Set baud rate 115200 bit/sec
        MOVB #0,   SCIxCR1              ; Default format 8N1 (8 data bits, no parity, 1 stop bit)
        MOVB #$0C, SCIxCR2              ; Enable receiver and transmitter, no interrupts (-> polling)
        
        LDX  #message1                  ; Send welcome message to terminal
        JSR  puts

loop:   JSR  getch                      ; Read a character from the terminal
        PSHB                            ; Save character
        STAB PORTB                      ; Turn on LEDs to show the character's ASCII code in binary
        
        LDX  #message2                  ; Send another message
        JSR  puts

        PULB                            ; Send one character
        JSR  putch
        
        LDX  #message3                  ; Send another message
        JSR  puts
        
        BRA  loop                       ; Go to receive the next character

; --- Get a character from the terminal (character must be returned in B)
getch:  BRCLR SCIxSR1, #$20, getch      ; Check 'Receive Data Flag' and wait, till a character is received
        LDAB SCIxDRL                    ; Read received character
        RTS
        
; --- Send a character to the terminal (B must contain the character) ---
putch:  BRCLR SCIxSR1, #$80, putch      ; Check 'Transmit Register Empty' and wait, till it is free             
        STAB SCIxDRL                    ; Echo back received character
        RTS
        
; --- Send a string to the terminal (X is a pointer to the string) ------
puts:   TST  0, X                       ; Check for end of the string   
        BEQ  sendDone
waitTxd:BRCLR SCIxSR1, #$80, waitTxd    ; Check 'Transmit Register Empty' and wait, till it is free             
        MOVB 1, X+, SCIxDRL             ; Send the character
        BRA  puts                       ; Goto to the next character
sendDone:
        RTS
        
                