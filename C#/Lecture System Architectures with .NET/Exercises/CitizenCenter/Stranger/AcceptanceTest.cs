using Microsoft.VisualStudio.TestTools.UnitTesting;
using Ui;

namespace Stranger
{
    [TestClass]
    public class AcceptanceTest
    {
        [TestMethod]
        public void TestSecret()
        {
            var ui = new UI(new Application());
            Assert.AreEqual("Leeted: 5ecret", ui.EncryptMessage("Secret"));
        }
    }
}