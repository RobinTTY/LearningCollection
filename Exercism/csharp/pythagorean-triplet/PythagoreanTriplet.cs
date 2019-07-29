using System;
using System.Collections.Generic;
using System.Linq;

// This is a simple implementation of Euclid's formula using the additional parameter k
// to produce all primitive and non primitive triples (https://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple)
// This code is way more efficient than brute forcing the result
// good community brute-force samples had computing times of around a second while this code takes ~50ms for the tests
// This gap only grows greater for larger values of N
// details about this and other methods can be found here: https://math.stackexchange.com/questions/395543/formulas-for-calculating-pythagorean-triples
public static class PythagoreanTriplet
{
    public static IEnumerable<(int a, int b, int c)> TripletsWithSum(int N)
    {
        var sums = new HashSet<(int, int, int)>();

        // m shall be looped for all natural numbers up to sqrt(N)
        for (var m = 2; m < (int)Math.Sqrt(N); m++)
        {
            // n shall always be smaller than m
            for (var n = 1; n < m; n++)
            {
                var firstIterationC = 1;
                // k shall be looped for all natural numbers up to N/c (c at k==1)
                for (var k = 1; k <= N / firstIterationC; k++)
                {
                    var result = ExpandedEuclidsFormula(m, n, k);
                    if (k == 1)
                        firstIterationC = result[2];

                    if (result.Sum() == N)
                        sums.Add(result[0] > result[1]
                            ? (result[1], result[0], result[2])
                            : (result[0], result[1], result[2]));
                }
            }
        }

        return sums.OrderBy(item => item.Item1);
    }

    // given an arbitrary pair of integers m and n with m > n > 0 and a multiplier k
    private static int[] ExpandedEuclidsFormula(int m, int n, int k)
    {
        if (m < n || n < 1)
            throw new ArgumentException();

        var a = k * (m * m - n * n);
        var b = k * 2 * m * n;
        var c = k * (m * m + n * n);

        return new[] { a, b, c };
    }
}