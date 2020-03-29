/*  Blinking LEDs on Dragon12 - C version

    Computerarchitektur 3
    (C) 2018-2019 J. Friedrich, W. Zimmermann
    Hochschule Esslingen

    Author:  W.Zimmermann, July 2018  
             (based on code provided by J. Friedrich)
*/

#include <hidef.h>                      //Common defines
#include <mc9s12dp256.h>                //CPU specific defines


#pragma LINK_INFO DERIVATIVE "mc9s12dp256b"


//#define PORTB (*(char*) 0x0001)       //Already defined in mc9s12dp256.h
//#define DDRB  (*(char*) 0x0003)
//#define DDRJ  (*(char*) 0x0268)
//#define PTJ   (*(char*) 0x026A)

//#define SEVEN_SEGS_OFF                //Uncomment this to turn seven segment display off

#define IMAX  512L*1024L                //Delay count
                                        //For visualization in the simulator choose the IO_LED component
                                        //... and set PORT=1, DDR=3

long i;                                 //Counter variable
int lit_leds = 0;


void main(void) 
{   EnableInterrupts;                   //Allow interrupts for debugger

    DDRJ_DDRJ1 = 1;                     //Port J.1 as output
    PTJ_PTJ1   = 0;                     //J.1=0 --> Activate LEDs

#ifdef SEVEN_SEGS_OFF    
    DDRP = DDRP | 0x0F;                 //Port P.3..0 as outputs (seven segment display control)
    PTP  = PTP  | 0x0F;                 //Turn off seven segment display
#endif    
    
    DDRB  = 0xFF;                       //Port B.7...0 as outputs (LEDs)
    PORTB = 0x00;                       //Turn on every second LED
    
    for(;;)             
    {   
        for (i=IMAX; i > 0; i--)        //Delay loop to control toggle frequency
        {
        }
        
        if(lit_leds > 0){
          PORTB >>= 1;                // Shift 1 bit to the right until all LEDs are OFF
          lit_leds -= 1;
        }
        
        if(lit_leds == 0){          
          PORTB <<= 1;                // Shift 1 bit to the left and add 0x01 until all LEDs are ON
          PORTB += 0x01;
        }
        
        if(PORTB == 0xFF)
          lit_leds = 9;       
        
    }
}

