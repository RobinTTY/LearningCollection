; defines
NONE:  EQU     0       ; several immediate constants
ONE:   EQU     1
TWO:   EQU     2

; export symbols, program entry point
        XDEF Entry, main

; import symbols
        XREF __SEG_END_SSTACK   ; End of stack eos
        
; include derivative specific macros
        INCLUDE 'mc9s12dp256.inc'

;##### variable data section (located in RAM, not initialized) ################
.data: SECTION
var1:   DS.W 1          ; one 16bit variable
var2:   DS.B 1          ; one  8bit variable
var3:   DS.B 2          ; two  8bit variables (array)
eVal:   DS.W 1          ; one variable used as enumeration with values NONE, ONE, TWO

;##### constant data (located in ROM, initialized) ############################
.const:SECTION
const1: dc.b  $00, $11, $22, $33; an array of byte constants 

; code section (located in ROM) ###############################################
.init: SECTION

main:                   ; Begin of the program
Entry:                  
        LDS  #__SEG_END_SSTACK
        CLI             ; Enable interrupts, needed for debugger
                        ;                       (addressing mode refers to the explicit operand only) 
  
; ----- Transfer operations and addressing modes -------------------------------
        LDD  #$1234     ; 1: 1234h      --> D   (immediate addressing)
        TFR  D, X       ; 2: D          --> X   (register addressing)
        STD  var1       ; 3: D          --> var1 (direct addressing)
        STAA var2       ; 4: A          --> var2
        STD  var3       ; 5: D          --> var3 (please note: 16bit will be stored, even if var3 is only 8bit!)
       
        LDD  const1     ; 6: const1     --> D   (direct addressing)
        LDD  #const1    ; 7: &const1    --> D   (immediate addressing)
       
        LDY  #$0001     ; 8: 0001h      --> Y   (immediate addressing)
        LDX  D, Y       ; 9: *(D+Y)     --> X   (indexed addressing)
        LDX  const1, Y  ;10: const1[Y]  --> X   (indexed addressing)

        LDY  #const1    ;11: &const1    --> Y   (immediate addressing)
        LDAA 1, Y+      ;12: *(Y++)     --> A   (indirect addressing with post-increment)
        LDAA 2, +Y      ;13: *Y         --> A   (indirect addressing with pre-increment)
                        ;    Y+2        --> Y
        LDAA 1, -Y      ;14: *(--Y)     --> A   (indirect addressing with pre-decrement)
        LDAA 1, Y-      ;15: *(Y++)     --> A   (indirect addressing with post-decrement)
        
        LDD  #const1    ;16: &const1    --> var1
        STD  var1
        LDX  #0000      ;17: 0000h      --> X
        LDD  var1, X    ;17a:var1[X]    --> D   (indexed adressing)
        LDD  [var1, X]  ;18: *(var1+X)  --> D   (indirect indexed addressing)
              
        LDD  #$AAAA     ;19: AAAAh      --> D
        LDX  #$5555     ;20: 5555h      --> X
        LDAA #$7F       ;21: 7Fh        --> A
        TFR  A, X       ;22: 7Fh        --> X (sign extended, i.e. 007Fh --> X)
        LDAA #$80       ;23: 80h        --> A
        TFR  A, X       ;24: 80h        --> X (sign extended, i.e. FF80h --> X
        TFR  X, B       ;25: LSB von X  --> B
        
        MOVW #$5678, var1;26:5678h      --> var1
        MOVW var1,  var2;27: 56h        --> var2, 78h --> var3[0]
        LDX  #var3      ;28: &var3      --> X
        MOVB var1, 0, X ;29: LSB von var1-->*(X)
        MOVB 0, X, 1, X ;30: var3[0]    --> var3[1]
        
        LDD  var1       ;31: var1       --> D
        LDD  var1+1     ;32: (LSByte of var1, MSByte of var2) --> D
        LDD  var1+3     ;33: (var3[0], var3[1]) --> D

; ----- Subroutine call -------------------------------------------------------
        JSR  MySub      ; Call subroutine

; ----- Stack Usage -----------------------------------------------------------                                       
        LDD  #$1122     ; 1: Initialize registers
        LDX  #$3344     ; 2:
        LDY  #$5566     ; 3:
        PSHX            ; 4: Save registers on stack
        PSHA            ; 5:
        PSHB            ; 6:

        LDX #0          ; Clear registers X, Y
        LDY #0
        
        PULD            ; 7: Restore parameters from stack
        PULX            ; 8:
        LDY -2, SP      ; 9: Another way to read a value from stack (does not change SP!)


; ---- Switch Case like code sequence -----------------------------------------
        MOVW #ONE, eVal; Initalize the enumeration eVal
        
        LDD  eVal       ; switch (eVal)
        LSLD
        TFR  D, X
        JMP  [swK, X]
swK:    DC.W caseNONE
swE:    DC.W caseONE
swZ:    DC.W caseTWO
                        ; {
caseNONE: NOP           ;       case NONE:      ...
          BRA endCase   ;                       break
caseONE: NOP           ;       case ONE:      ...
          BRA endCase   ;                       break
caseTWO: NOP           ;       case TWO:      ...
          BRA endCase   ;                       break
endCase:                ; }
        
; -----------------------------------------------------------------------------        
        JMP main        ; Endless loop (starts at main)

; ----- Subroutine ------------------------------------------------------------
MySub:  CLRA            ; Subroutine (just a demo, no useful functionality)
        CLRB
        LDX #0          ; Clear registers X, Y
        LDY #0
        RTS             ; Return to calling program


