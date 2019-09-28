using System;
using System.Linq;

namespace FizzBuzz
{
    class Program
    {
        static void Main(string[] args)
        {
            string output = null;
            var zahl = int.Parse(args.FirstOrDefault());
            if (zahl % 3 == 0) output = "Fizz";
            if (zahl % 5 == 0) output += "Buzz";

            Console.WriteLine(output ?? zahl.ToString());
        }

    }
}
