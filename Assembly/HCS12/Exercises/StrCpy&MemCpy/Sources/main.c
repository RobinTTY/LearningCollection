/*  Assemblerunterprogramme: Aufgaben StrCpy, MemCpy, Buffer
    
    Computerarchitektur 3
    (C) 2019 J. Friedrich, W. Zimmermann
    Hochschule Esslingen

    Author:  W.Zimmermann, Feb 4, 2019  
    
    Note: 
    Result are displayed via the CPU's serial communication 
    interface (SCI). In the True Time Simulator open 
    component Terminal before starting the program.
*/

#include <hidef.h>       // common defines and macros
#include <mc9s12dp256.h> // derivative information

#pragma LINK_INFO DERIVATIVE "mc9s12dp256b"

#include <stdio.h>
#include <stdlib.h>

//Some helper function prototypes
int errno;
char temp[100];
void InitTermIO(void);          //Initialize terminal
void PutString(char *str);      //Put string to terminal
void GetString(char *s, int n); //Get string from terminal

//#############################################################################

// --- Prototype of the assembler functions ----------------------------------
int StrCpy(char *dest, const char *src);
void MemCpy(void *dest, const void *src, int n);

// --- Global variables for the test of the functions ------------------------
char zielA[32] = "";
char zielB[32] = "";
char *quelle = "Hallo Welt";
int i;

// --- C-Subroutine for problem Buffer ---------------------------------------
void myTestSubroutine()
{
    char buffer[5];

    (void)strcpy(buffer, "Hallo�f");
    return;
}

void dummyRoutine(void)
{
    PutString("How often will this function be called here ...... ?\n");
}

void main(void)
{
    EnableInterrupts;
    InitTermIO();

    // ----------------------------------------------------------------------------
    PutString("--- Test of StrCpy ---\n");

    i = StrCpy(zielA, quelle);

    (void)sprintf(temp, "Quelle: %s***\nZiel:   %s***\nCopied %d byte\n\n", quelle, zielA, i);
    PutString(temp);

    // ----------------------------------------------------------------------------
    PutString("--- Test of MemCpy ---\n");

    MemCpy(zielB, quelle, i);

    (void)sprintf(temp, "Quelle: %s***\nZiel:   %s***\n\n", quelle, zielB);
    PutString(temp);

    // ----------------------------------------------------------------------------
    dummyRoutine();

    PutString("--- Test of myTestSubroutine ---\n");

    myTestSubroutine();

    PutString("---  Will we ever reach the end of this program? ---\n");

    // ----------------------------------------------------------------------------
    for (;;);
}

//######################################################################################
/* Functions simulating terminal I/O, use with the Terminal component of the Simulator*/

typedef struct
{
    unsigned int SCIxBD;
    unsigned char SCIxCR1;
    unsigned char SCIxCR2;
    unsigned char SCIxSR1;
    unsigned char SCIxSR2;
    unsigned char SCIxDRH;
    unsigned char SCIxDRL;
} SCIStruct;

#ifdef _HCS12_SERIALMON
#define SCI (*((SCIStruct *)(0x00D0))) //On Dragon12 use SCI1 (SCI0 is used for debugger)
#else
#define SCI (*((SCIStruct *)(0x00C8))) //In Simulator use SCI0
#endif

char GetChar(void) //Get character from terminal (no echo)
{
    while (!(SCI.SCIxSR1 & 0x20))
        ; //Wait for input buffer full
    return SCI.SCIxDRL;
}

void PutChar(char ch) //Put character to terminal
{
    while (!(SCI.SCIxSR1 & 0x80))
        ; //Wait for output buffer empty
    SCI.SCIxDRL = ch;
}

char GetCharEcho(void) //Get character from terminal (with echo)
{
    char c;

    c = GetChar();
    PutChar(c);
    return c;
}

void PutString(char *str) //Put string to terminal
{
    while (*str)
    {
        PutChar(*str);
        str++;
    }
}

void GetString(char *s, int n) //Get string from terminal (max. n characters)
{
    int i;

    for (i = 0; i < n; i++)
    {
        s[i] = GetCharEcho();

        if (s[i] == 13) //Check for Enter key
        {
            s[i] = 0;
            break;
        }
    }
}

void InitTermIO(void) //Initialize terminal
{
    SCI.SCIxBD = 13; //115200 bit/sec
    SCI.SCIxCR1 = 0x04;
    SCI.SCIxCR2 = 0x0C; //TE and RE set
}
//######################################################################################
