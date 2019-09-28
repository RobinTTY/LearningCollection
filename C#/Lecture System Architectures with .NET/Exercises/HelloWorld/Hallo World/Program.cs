using System;

namespace Hallo_World
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Name? ");
            var name = Console.ReadLine();
            Console.WriteLine("Hallo, {0}!", name);

            // ------

            Console.WriteLine("{0}: Hallo schöner Tag heute!",
                name);

            Console.WriteLine("Hallo " + name + " schöner Tag heute!");

            Console.WriteLine($"Hallo {name} schöner Tag heute!");


            Console.WriteLine(@"C:\Windows");

            Console.WriteLine(@"<root>
  <entity/>
</root>");
        }
    }
}
