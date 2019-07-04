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
        
		LDD con1         ; moves $3210 into D
		LDX con2         ; moves $0123 into X
		LDY con3         ; moves $1020 into Y
		
		MOVW $2456, v1   ; moves value at address 0x2456 into v1
		MOVW #$2456, v1  ; moves $2456 into v1
		
		MOVW #v1, v2     ; moves address of v1 into v2
		MOVW v1,v2       ; moves value of v1 into v2 = $2456
		
		STX 2,-SP        ; store X on stack (through stack pointer) -> same as PSHX
		STY 2,-SP        ; store Y on stack (through stack pointer) -> same as PSHY
		STAA 1,-SP       ; store A on stack (through stack pointer) -> same as PSHA
		STAB 1,-SP       ; store B on stack (through stack pointer) -> same as PSHB
		PULX             ; X=$1032 (B & A)
		PULD             ; D=$1020 (Y)
		LDY 2,SP+        ; Y=$0123 (X)
		
		LDX #con1        ; load address of con1 into X
		LDY #con2        ; load address of con2 into Y
		LDAA 4, +X       ; Load value, the address saved in X ($800) + 4 points to, into A = $BA
		LDAB 1, Y-       ; Load value, the address saved in Y ($808) and decrement by 1 after = $01
		MOVB #0, v2      ; Load 0 into v2[0]
		STD v1+2         ; Store D at address of v1 + 2 = v2 -> v2[0] = ba; v2[1] = 01
		LDX #$D800       ; Load $D800 into X
		LDX $D800        ; Load value at address $D800
		
		LDD #1234		 ; Load decimal value 1234 into D (0x4D2)


