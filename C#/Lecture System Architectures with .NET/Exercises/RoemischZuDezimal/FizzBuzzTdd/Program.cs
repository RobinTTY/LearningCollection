using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FizzBuzzTdd
{
    class Program
    {
        static void Main(string[] args)
        {
        }
    }

    public class RomanNumeralsTest
    {
        [Fact]
        public void TestIo1()
        {
            int Expected = 1;
            int Actual = RomanNumerals.Convert("I");
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void TestMMXIIto2012()
        {
            int Expected = 2012;
            int Actual = RomanNumerals.Convert("MMXII");
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void TestIVto4()
        {
            int Expected = 4;
            int Actual = RomanNumerals.Convert("IV");
            Assert.Equal(Expected, Actual);
        }
    }

    public class RomanNumerals
    {
        private static Dictionary<char, int> Map = new Dictionary<char, int>
            {{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};

        public static int Convert(string romanDigits)
        {
            var number = 0;

            for (var i = 0; i < romanDigits.Length; i++)
            {
                if (i == romanDigits.Length - 1)
                {
                    number += Map[romanDigits[i]];
                    return number;
                }

                if (Map[romanDigits[i]] < Map[romanDigits[i + 1]])
                {
                    number -= Map[romanDigits[i]];
                }
                else
                {
                    number += Map[romanDigits[i]];
                }


            }

            return number;
        }
    }
}