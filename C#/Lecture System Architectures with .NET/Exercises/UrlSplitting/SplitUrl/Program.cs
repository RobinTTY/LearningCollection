using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SplitUrl
{
    class Program
    {
        static void Main(string[] args)
        {
        }

        static Url SplitUrl(string url)
        {
            string protocol = ParseProtocol(url);
            string domain = ParseDomain(url);
            string path = ParsePath(url);
            return new Url { Protocol = protocol, Domain = domain, Path = path };
            //return BuildUrl(protocol, domain, path);
        }

        //private static Url BuildUrl(string protocol, string domain, string path)
        //{
        //    return new Url { Protocol = protocol, Domain = domain, Path = path };
        //}

        private static string ParsePath(string url)
        {
            var elements = url.Split(new[] { "://" }, StringSplitOptions.None)[1].Split('/');
            return "/" + string.Join("/", elements.Skip(1));
        }

        private static string ParseDomain(string url)
        {
            return url.Split(new[] { "://" }, StringSplitOptions.None)[1].Split('/')[0];
        }

        private static string ParseProtocol(string url)
        {
            return url.Split(':')[0];
        }
    }

    internal struct Url
    {
        public string Protocol { get; set; }
        public string Domain { get; set; }
        public string Path { get; set; }
    }
}
