#include "clock.h"
#include "wrapper.h"

//// Time variables
unsigned char hour = 11;
unsigned char minute = 59;
unsigned char second = 45;
//// Time variables

//// other variables
extern char line1[17];
char tmp[7];
char setMode = 0;
char twelveHourMode = 0;
//// other variables


void tickClock(void){
    second++;

    if(second == 60){
        second = 0;
        minute++;
    }

    if(minute == 60){
        minute = 0;
        hour++;
    }

    if(hour == 24){
        hour = 0;
    }

    printTime();
}

void printTime(void){
    char i;    
    // print hours
    if(twelveHourMode && hour > 12)
        if(hour == 0)
            decToASCII_Wrapper(tmp, 12);
        else
            decToASCII_Wrapper(tmp, hour - 12);
    else
        if(hour == 0)
            decToASCII_Wrapper(tmp, 12);
        else
            decToASCII_Wrapper(tmp, hour);
    line1[0] = (tmp[4] == ' ' ? '0' : tmp[4]);
    line1[1] = tmp[5];
    line1[2] = ':';

    // print minutes
    decToASCII_Wrapper(tmp, minute);
    line1[3] = (tmp[4] == ' ' ? '0' : tmp[4]);
    line1[4] = tmp[5];
    line1[5] = ':';

    // print hours
    decToASCII_Wrapper(tmp, second);
    line1[6] = (tmp[4] == ' ' ? '0' : tmp[4]);
    line1[7] = tmp[5];

    if(twelveHourMode){
        if(hour > 11)
            line1[8] = 'p';
        else
            line1[8] = 'a';
        line1[9] = 'm';
    }
    else
        for(i = 8; i < 12; i++)
            line1[i] = ' ';         // add space between time and temperature

}

void clockInitButton(void) 
{
    DDRH = 0x00;	   // Port H as input
}

int checkSetMode(void){
    if((PTH & 0x08) != 0)
        return 1;
    else
        return 0;    
}

void checkTwelveHourMode(void){
    if((PTH & 0x80) != 0){
        if(twelveHourMode == 1)
            twelveHourMode = 0;
        else
            twelveHourMode = 1;
    }
        
}

char handleSetButtons(void){
    char changed = 0;
    if((PTH & 0x01) != 0){
        second++;
        if(second > 59)
            second = 0;
        delayHelper(100);
        changed = 1;
    }
    
    if((PTH & 0x02) != 0){
        minute++;
        if(minute > 59)
            minute = 0;
        delayHelper(100);
        changed = 1;
    }

    if((PTH & 0x04) != 0){
        hour++;
        if(hour > 23)
            hour = 0;
        delayHelper(50);
        changed = 1;
    }

    printTime();
    return changed;
}

void modeCheck(void){
    if(checkSetMode()){
            setMode = 1;
            setLEDWrapper(0x80);                
            delayHelper(100);

            while (setMode)
            {             
                if(handleSetButtons())
                    WriteLine_Wrapper(line1, 0);

                if(checkSetMode()){      // check if return was requested
                    setLEDWrapper(0x00);
                    setMode = 0;
                    delayHelper(50);
                }
            }            
        }
    
    checkTwelveHourMode();
}

void delayHelper(int intervals){
    char k;
    for(k = 0; k < intervals; k++)
        delay_10ms();
}