namespace Ui
{
    public class UI
    {
        private readonly IApplication application;
        private string leeted;

        public UI(IApplication application)
        {
            this.application = application;
        }

        public string EncryptMessage(string unLeeted)
        {
            application.Leet(unLeeted, this);
            return "Leeted: " + leeted;
        }

        public void SetLeeted(string leeted)
        {
            this.leeted = leeted;
        }
    }
}