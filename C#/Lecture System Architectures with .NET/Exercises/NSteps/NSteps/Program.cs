using System;

namespace NSteps
{
    class Program
    {
        static void Main(string[] args) => ProcessNsteps(args);

        private static void ProcessNsteps(string[] args)
        {
            ParseArguments(args, out var x, out var y);
            ValidateCoordinate(x, y, () => PrintNumber(CalculateNumber(x, y)), PrintInvalidNumber);
        }

        private static void ParseArguments(string[] args, out int x, out int y)
        {
            x = int.Parse(args[0]);
            y = int.Parse(args[1]);
        }

        private static void ValidateCoordinate(int x, int y, Action onValid, Action onInvalid)
        {
            if ((x + y) % 2 == 0) onValid();
            else onInvalid();
        }

        private static int CalculateNumber(int x, int y) => x % 2 != 0 ? x + y - 1 : x + y;

        private static void PrintNumber(int nr) => Console.WriteLine(nr.ToString());

        private static void PrintInvalidNumber() => Console.WriteLine("No number");
    }
}
