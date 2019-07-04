#include <hidef.h>              // common defines and macros
#include <mc9s12dp256.h>        // derivative information

#pragma LINK_INFO DERIVATIVE "mc9s12dp256b"

#include <stdio.h>
#include <stdlib.h>

//Some helper function prototypes
int errno;
void InitTermIO(void);          //Initialize terminal
void PutString(char *str);      //Put string to terminal
void GetString(char *s, int n); //Get string from terminal

//############################################################################# 
char temp[64];
char s1, s2, flag;              // Global variables

void main(void) 
{   char r;                     // Local variable

    EnableInterrupts;
    InitTermIO();
    PutString("Add 2 numbers s1 and s2 - Exit if s1==0\n\r");

    for(;;)                     
    {   PutString("\n\rs1 = ");   // Enter s1 via terminal as ASCII string
        GetString(temp, sizeof(temp));
        s1 = (char) atoi(temp); // Convert ASCII string to number


        if (s1==0)              // Break loop if 0 entered
            break;
        
        PutString("\n\rs2 = ");   // Enter s2 (same as for s1)
        GetString(temp, sizeof(temp));
        s2 = (char) atoi(temp);
        
        PutString("\n\rComputation using inline assembly\n\r");
        flag = 0;
        
        asm // r = s1 + s2, if overflow occurs, set flag=1
        {       LDAA s1         // s1 --> Register A
                ADDA s2         // s1 + s2 --> Register A
                BVC  noov       // Check for overflow
                COM  flag       // ... and set flag if overflow occured
          noov: STAA r          // r = s1 + s2
        }
        
        (void) sprintf(temp, "\n\rc =%d + %d = %d   %s\n\r", s1, s2, r, flag ? "Overflow" : "No overflow");
        PutString(temp);        // Output result to terminal
    }
    asm SWI;                    // Exit program (stop simulator, return to monitor program)
}


//######################################################################################
/* Functions simulating terminal I/O, use with the Terminal component of the Simulator*/

typedef struct { 
   unsigned int  SCIxBD; 
   unsigned char SCIxCR1; 
   unsigned char SCIxCR2; 
   unsigned char SCIxSR1;
   unsigned char SCIxSR2;
   unsigned char SCIxDRH; 
   unsigned char SCIxDRL;    
} SCIStruct; 

#ifdef _HCS12_SERIALMON
  #define  SCI (*((SCIStruct*)(0x00D0)))//On Dragon12 use SCI1 (SCI0 is used for debugger)
#else
  #define  SCI (*((SCIStruct*)(0x00C8)))//In Simulator use SCI0
#endif

char GetChar(void)                      //Get character from terminal (no echo)
{ 
   while (!(SCI.SCIxSR1 & 0x20));       //Wait for input buffer full
   return SCI.SCIxDRL;  
} 
 
void PutChar(char ch)                   //Put character to terminal
{ 
   while (!(SCI.SCIxSR1 & 0x80));       //Wait for output buffer empty
   SCI.SCIxDRL = ch;    
} 
 
char GetCharEcho(void)                  //Get character from terminal (with echo)
{  char c;
   c = GetChar();
   PutChar(c);
   return c;
}

void PutString(char *str)               //Put string to terminal
{ 
   while (*str) { 
   PutChar(*str); 
   str++; 
   }        
} 

void GetString(char *s, int n)          //Get string from terminal (max. n characters)
{  int i;
   for (i=0; i<n; i++)
   {    s[i] = GetCharEcho();
        if (s[i]==13)                   //Check for Enter key
        {   s[i]=0;
            break;
        }
   }
}
 
void InitTermIO(void)                   //Initialize terminal
{ 
   SCI.SCIxBD  = 13;                    //115200 bit/sec
   SCI.SCIxCR1 = 0x04;
   SCI.SCIxCR2 = 0x0C;                  //TE and RE set
} 
//######################################################################################
