/*  Lab 2 - Main C file for Clock program

    Computerarchitektur / Computer Architecture
    (C) 2020 J. Friedrich, W. Zimmermann
    Hochschule Esslingen

    Author:  W.Zimmermann, Apr 15, 2020
*/

#include <hidef.h>                              // Common defines
#include <mc9s12dp256.h>                        // CPU specific defines
#include "wrapper.h"
#include "clock.c"
#include "thermo.c"

#pragma LINK_INFO DERIVATIVE "mc9s12dp256b"


// ****************************************************************************
// Global variables
unsigned char clockEvent = 0;
char counter = 0;
char testValueCycler = 0;
char line1[17];
char line2[17];

// ****************************************************************************

void initTicker(void);
void tickClock(void);
char* getLineTwo(void);

void initLED_C(void)
{   
    DDRJ_DDRJ1  = 1;	  	// Port J.1 as output
    PTIJ_PTIJ1  = 0;		
    DDRB        = 0xFF;		// Port B as output
    PORTB       = 0x00;
}

void main(void) 
{   
    EnableInterrupts;                           // Global interrupt enable

    // initialization
    initLED_C();
    initLCD();   
    initTicker();
    initThermo();

    for(;;)
    {
        if (clockEvent)
    	{   
            clockEvent = 0;                     // reset clock event
            tickClock();
            updateThermo();

            // print lines
            WriteLine_Wrapper(line1, 0);
            WriteLine_Wrapper(getLineTwo(), 1);

            // check if set mode requested
            modeCheck();
    	}
    }
}

char* getLineTwo(){
    if(counter == 19)
        counter = 0;

    if(counter < 10){
        counter++;
        return "Robin Mueller";
    }
        
    else{
        counter++;
        return "(C) IT 2020";
    }
}
