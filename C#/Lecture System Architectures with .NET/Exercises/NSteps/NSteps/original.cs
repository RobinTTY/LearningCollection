using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NSteps
{
    class Program
    {
        static void Main(string[] args)
        {
            ProcessNsteps(args);
        }

        private static void ProcessNsteps(string[] args)
        {
            ParseArguments(args, out var x, out var y);
            //ValidateCoordinate(x, y,
            //    onValid: () => PrintNumber(CalculateNumber(x, y)),
            //    onInvalid: PrintInvalidNumber);

            switch (ValidateCoordinate(x, y))
            {
                case ValidationResult.Valid:
                    PrintNumber(CalculateNumber(x, y));
                    break;
                case ValidationResult.Invalid:
                    PrintInvalidNumber();
                    break;
            }
        }

        private static void ParseArguments(string[] args, out int x, out int y)
        {
            x = int.Parse(args[0]);
            y = int.Parse(args[1]);
        }

        enum ValidationResult
        {
            Valid, Invalid
        }

        private static ValidationResult ValidateCoordinate(int x, int y)
        {
            if ((x + y) % 2 == 0) return ValidationResult.Valid;
            else return ValidationResult.Invalid;
        }

        //private static void ValidateCoordinate(int x, int y, Action onValid, Action onInvalid)
        //{
        //    if ((x + y) % 2 == 0) onValid();
        //    else onInvalid();
        //}

        private static int CalculateNumber(int x, int y)
        {
            return x + y; // TODO: Fixme please
        }

        private static void PrintNumber(int nr)
        {
            Console.WriteLine(nr.ToString());
        }

        private static void PrintInvalidNumber()
        {
            Console.WriteLine("No number");
        }
    }
}
