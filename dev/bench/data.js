window.BENCHMARK_DATA = {
  "lastUpdate": 1775198749326,
  "repoUrl": "https://github.com/johan--/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6e224a94df25c1bd06b23455296a70561266d8",
          "message": "Merge pull request #1356 from yamadashy/perf/cache-empty-dir-paths\n\nperf(core): Cache empty directory paths to avoid redundant file search",
          "timestamp": "2026-04-02T00:26:39+09:00",
          "tree_id": "9f39d41e3bdcf3870204b7a48ffc12e284484cde",
          "url": "https://github.com/johan--/repomix/commit/9d6e224a94df25c1bd06b23455296a70561266d8"
        },
        "date": 1775186561486,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2037,
            "range": "±167",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1963ms, Q3: 2130ms\nAll times: 1752, 1772, 1856, 1867, 1875, 1879, 1881, 1963, 1970, 1979, 1997, 2001, 2018, 2019, 2031, 2037, 2043, 2067, 2074, 2077, 2084, 2087, 2130, 2136, 2155, 2185, 2271, 2305, 2418, 2537ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2251,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2244ms, Q3: 2279ms\nAll times: 2216, 2221, 2233, 2234, 2241, 2244, 2245, 2246, 2249, 2251, 2251, 2264, 2269, 2270, 2271, 2279, 2280, 2285, 2288, 2313ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2581,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2574ms, Q3: 2596ms\nAll times: 2555, 2565, 2571, 2571, 2573, 2574, 2575, 2575, 2577, 2578, 2581, 2586, 2587, 2594, 2594, 2596, 2602, 2638, 2678, 2874ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7a8979ca1fb344026ee22065279afe86c14125b",
          "message": "Merge pull request #1375 from yamadashy/perf/use-codeload-github-direct\n\nperf(git): Use codeload.github.com directly to skip 302 redirect",
          "timestamp": "2026-04-03T14:52:11+09:00",
          "tree_id": "f39c7776d27dd096dee674ac39f31238bb7265dc",
          "url": "https://github.com/johan--/repomix/commit/d7a8979ca1fb344026ee22065279afe86c14125b"
        },
        "date": 1775198748503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1527,
            "range": "±175",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1468ms, Q3: 1643ms\nAll times: 1198, 1304, 1403, 1411, 1417, 1427, 1464, 1468, 1472, 1496, 1503, 1508, 1516, 1522, 1524, 1527, 1535, 1541, 1542, 1567, 1585, 1587, 1643, 1682, 1691, 1827, 1887, 1908, 1913, 2219ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1868,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1859ms, Q3: 1884ms\nAll times: 1830, 1840, 1850, 1852, 1853, 1859, 1862, 1864, 1864, 1865, 1868, 1871, 1871, 1873, 1876, 1884, 1890, 1892, 1895, 1908ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2549,
            "range": "±42",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 2529ms, Q3: 2571ms\nAll times: 2496, 2509, 2523, 2525, 2529, 2536, 2536, 2538, 2545, 2549, 2553, 2553, 2556, 2557, 2571, 2572, 2577, 2605, 2635ms"
          }
        ]
      }
    ]
  }
}