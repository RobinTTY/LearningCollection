#include "thermo.h"

extern char line1[17];
unsigned int result; 
unsigned int test[8];
int temperature = 0;

void initThermo(void){
    ATD0CTL2 = 0b11000011;      // default
    ATD0CTL3 = 0b00001000;      // single measurement
    ATD0CTL4 = 0b00000101;      // default
    ATD0CTL5 = 0b10000111;      // channel 7, no multi channel, start first measurement
}

void interrupt 22 adcISR(void){
    result = ATD0DR0;
    ATD0CTL2 = ATD0CTL2 | 0x01;     // reset interrupt flag
}

void updateThermo(void){  
    ATD0CTL5 = 0b10000111;          // start next measurement  
    printTemperature();
}

void printTemperature(void){
    char temp[7];
    
    // calculate temperature from result (32 bit)
    asm{
        PSHD
        PSHY
        PSHX

        ; 100 * result
        LDD #100
        LDY result
        EMULS

        ; / 1022
        LDX #1022
        EDIVS

        STY temperature
        
        PULX
        PULY
        PULD        
    }
    temperature = temperature - 30;
    decToASCII_Wrapper(temp, temperature);

    if(temperature < 0)
        line1[12] = '-';
    else
        line1[12] = ' ';
    line1[13] = temp[4];
    line1[14] = temp[5];
    line1[15] = '°';
    line1[16] = 'C';
}