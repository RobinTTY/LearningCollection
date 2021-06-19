using System;
using System.IO;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MongoDBUniversityM220N
{
    class Program
    {
        static void Main(string[] args)
        {
            var connectionString = File.ReadAllText("connectionString.txt");
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("sample_mflix");
            var collection = database.GetCollection<BsonDocument>("movies");
            var result = collection.Find(new BsonDocument())
                .SortByDescending(m => m["runtime"])
                .Limit(10)
                .ToList();
            foreach (var r in result)
            {
                Console.WriteLine(r.GetValue("title"));
            }
        }
    }
}
