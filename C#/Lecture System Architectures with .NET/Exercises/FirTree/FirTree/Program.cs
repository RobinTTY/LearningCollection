using System;
using System.Linq;

namespace FirTree
{
    class TreeParameters
    {
        public bool HasStar { get; set; }

        public int Size { get; set; }
    }


    class Program
    {
        static void Main(string[] args)
        {
            var treeParameters = ParseArguments(args);
            var tree = BuildTree(treeParameters);
            PrintTree(tree);
        }

        private static TreeParameters ParseArguments(string[] args)
        {
            var treeSize = int.Parse(args.FirstOrDefault());
            bool.TryParse(args.ElementAtOrDefault(1), out var hasStar);
            return new TreeParameters { HasStar = hasStar, Size = treeSize };
        }

        private static void PrintTree(string tree)
        {
            Console.WriteLine(tree);
        }

        private static string BuildTree(TreeParameters parameters)
        {
            var tree = GenerateStar(parameters);
            tree += GenerateCrown(parameters);
            tree += GenerateTrunk(parameters);
            return tree;
        }

        private static string GenerateTrunk(TreeParameters parameters)
        {
            return GetPadding(0, parameters.Size) + "|";
        }

        private static string GenerateCrown(TreeParameters parameters)
        {
            string crown = "";
            for (int i = 0; i < parameters.Size; i++)
                crown += WriteLayer(i, parameters.Size);
            return crown;
        }

        private static string GenerateStar(TreeParameters parameters)
        {
            if (parameters.HasStar)
                return GetPadding(0, parameters.Size) + "*\n";
            return "";
        }

        static string WriteLayer(int layerIndex, int overallLayers)
        {
            string layer = GetPadding(layerIndex, overallLayers) + "X";

            for (int i = 1; i <= layerIndex; i++)
            {
                layer += "XX";
            }
            return layer + "\n";
        }

        static string GetPadding(int layerIndex, int overallLayers)
        {
            return new string(' ', overallLayers - layerIndex - 1);
        }
    }
}
