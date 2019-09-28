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
            var result = FizzBuzz.Convert(int.Parse(args[0]));
            Console.WriteLine(result);
        }
    }

    public class FizzBuzzTest
    {
        [Fact]
        public void FizzBuzzTest1to1()
        {
            String Expected = "1";
            String Actual = FizzBuzz.Convert(1);
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void FizzBuzzTest2to2()
        {
            String Expected = "2";
            String Actual = FizzBuzz.Convert(2);
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void FizzBuzzTest3toFizz()
        {
            String Expected = "Fizz";
            String Actual = FizzBuzz.Convert(3);
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void FizzBuzzTest6toFizz()
        {
            String Expected = "Fizz";
            String Actual = FizzBuzz.Convert(6);
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void FizzBuzzTest4to4()
        {
            String Expected = "4";
            String Actual = FizzBuzz.Convert(4);
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void FizzBuzzTest5toBuzz()
        {
            String Expected = "Buzz";
            String Actual = FizzBuzz.Convert(5);
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void FizzBuzzTest15toFizzBuzz()
        {
            String Expected = "FizzBuzz";
            String Actual = FizzBuzz.Convert(15);
            Assert.Equal(Expected, Actual);
        }

        [Fact]
        public void FizzBuzzTest30toFizzBuzz()
        {
            String Expected = "FizzBuzz";
            String Actual = FizzBuzz.Convert(30);
            Assert.Equal(Expected, Actual);
        }
    }

    public class FizzBuzz
    {
        public static string Convert(int number)
        {
            if (number % 5 == 0 && number % 3 == 0)
            {
                return "FizzBuzz";
            }
            if (number % 3 == 0)
            {
                return "Fizz";
            }
            if (number % 5 == 0)
            {
                return "Buzz";
            }


            return number.ToString();
        }
    }
}
