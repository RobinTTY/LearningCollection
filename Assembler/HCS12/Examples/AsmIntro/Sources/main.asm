; defines
NONE:   EQU     0       ; several immediate constants
ONE:    EQU     1
TWO:    EQU     2

; export symbols, program entry point
        XDEF Entry, main

; import symbols
        XREF __SEG_END_SSTACK   ; End of stack eos
        
; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

;##### variable data section (located in RAM, not initialized) ################
.data: SECTION
	ORG  $2800
v1: DS.W 1
v2: DS.B 2

;##### constant data (located in ROM, initialized) ############################
.const:SECTION
	  ORG $800
con1: dc.w  $3210, $7654, $BA98, $FEDC; an array of byte constants 
con2: dc.b  $01, $23, $45, $67, $89, $AB, $CD, $EF
con3: dc.l  $10203040, $50607080 

; code section (located in ROM) ###############################################
.init: SECTION

main:                   ; Begin of the program
Entry:                  
        LDS  #__SEG_END_SSTACK
        CLI             ; Enable interrupts, needed for debugger
                        ; (addressing mode refers to the explicit operand only) 
  
; ----- Transfer operations and addressing modes -------------------------------
        
		LDD con1
		LDX con2
		LDY con3
		MOVW #$2456, v1
		MOVW #v1, v2
		
		STX 2,-SP
		STY 2,-SP
		STAA 1,-SP
		STAB 1,-SP
		PULX
		PULD
		LDY 2,SP+
		
		LDX #con1
		LDY #con2
		LDAA 4, +X
		LDAB 1, Y-
		MOVB #0, v2
		STD v1+2
		LDX #$D800
		LDX $D800


