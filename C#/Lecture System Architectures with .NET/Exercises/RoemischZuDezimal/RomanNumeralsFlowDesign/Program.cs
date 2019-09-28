using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace RomanNumeralsFlowDesign
{
    class Program
    {
        static void Main(string[] args)
        {
        }
    }

    class RomanNumerals
    {
        public int Convert(string romanNumber)
        {
            var chars = ConvertRomanNumberToDigits(romanNumber);
            var digits = ConvertSymbol(chars);
            var correctedDigits = ApplySubstractionRule(digits);
            return correctedDigits.Sum();
        }

        private int[] ApplySubstractionRule(int[] digits)
        {
            var result = new int[digits.Length];
            for (int i = 0; i < digits.Length; i++)
            {
                if (i < digits.Length - 1 && digits[i + 1] > digits[i])
                {
                    result[i] = -digits[i];
                }
                else
                {
                    result[i] = digits[i];
                }
            }

            return result;
        }

        private int[] ConvertSymbol(char[] chars)
        {
            Dictionary<char, int> Map = new Dictionary<char, int>
                {{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};

            //var testArr = new int[chars.Length];
            //for (int i = 0; i < chars.Length; i++)
            //    testArr[i] = Map[chars[i]];


            //var test = (from x in chars select Map[x]).ToArray();

            return chars.Select(x => Map[x]).ToArray();
        }

        private char[] ConvertRomanNumberToDigits(string romanNumber)
        {
            return romanNumber.ToCharArray();
        }
    }
}
