/*  Wrappers for assembler functions in LCD.asm and decToASCII.asm

    Computerarchitektur / Computer Architecture
    (C) 2020 J. Friedrich, W. Zimmermann
    Hochschule Esslingen

    Author:  W.Zimmermann, Jan 30, 2020
*/


#ifndef __wrapper__
#define __wrapper__


// Prototypes and wrapper functions for decToASCII (from lab 1)
void decToASCII(void);

void decToASCII_Wrapper(char *txt, int val)
{   
    asm
    {
        LDX txt
        LDD val
    }

    decToASCII();
}

// Prototypes and wrapper functions for LCD driver (from lab 1)
void initLCD(void);
void delay_10ms(void);
void writeLine(void);

void WriteLine_Wrapper(char *text, char line)
{   asm
    {	
        LDX text
        LDAB line
    }

    writeLine();
}


// Note: initLCD and delay_10ms can be called directly without wrappers, 
//       as they don't have parameters and return values.

// Prototypes and wrapper function for LED driver
void setLED(void);

void setLEDWrapper(char mask){
    asm LDAB mask
    setLED();
}

#endif