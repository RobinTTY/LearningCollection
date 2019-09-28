using Microsoft.VisualStudio.TestTools.UnitTesting;
using Ui;

namespace MasterCrupt
{
    [TestClass]
    public class AcceptanceTest
    {
        [TestMethod]
        public void TestSecret()
        {
            var ui = new UI(new Application());
            Assert.AreEqual("Leeted: S3cr3t", ui.EncryptMessage("Secret"));
        }
    }
}