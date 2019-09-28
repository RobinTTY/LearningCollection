using System;
using Ui;

namespace Stranger
{
    public class Application : IApplication
    {
        public void Leet(string message, UI ui)
        {
            ui.SetLeeted(Leeter.Leet(message));
        }

        private static void Main(string[] args)
        {
            var ui = new UI(new Application());
            Console.WriteLine(ui.EncryptMessage("Test"));
        }
    }
}