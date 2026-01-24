// This is part 2 of the seed data - remaining categories
// To be added to the seedData array in seed.js

export const remainingCategories = [
  {
    category: "Dynamic Programming (DP) Patterns",
    subcategories: [
      {
        name: "DP - 1D Array (Fibonacci Style)",
        description: "Use 1D DP array for problems with Fibonacci-like recurrence relations.",
        problems: [
          { title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
          { title: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/", difficulty: "Medium" },
          { title: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
          { title: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/", difficulty: "Medium" },
          { title: "House Robber III", url: "https://leetcode.com/problems/house-robber-iii/", difficulty: "Medium" },
          { title: "Fibonacci Number", url: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Easy" },
          { title: "Delete and Earn", url: "https://leetcode.com/problems/delete-and-earn/", difficulty: "Medium" },
          { title: "Min Cost Climbing Stairs", url: "https://leetcode.com/problems/min-cost-climbing-stairs/", difficulty: "Easy" }
        ]
      },
      {
        name: "DP - 1D Array (Kadane's Algorithm for Max/Min Subarray)",
        description: "Use Kadane's algorithm to find maximum or minimum subarray sum.",
        problems: [
          { title: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium" },
          { title: "Maximum Sum Circular Subarray", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/", difficulty: "Medium" },
          { title: "Maximum Score Of Spliced Array", url: "https://leetcode.com/problems/maximum-score-of-spliced-array/", difficulty: "Hard" },
          { title: "Maximum Absolute Sum of Any Subarray", url: "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/", difficulty: "Medium" },
          { title: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - 1D Array (Coin Change / Unbounded Knapsack Style)",
        description: "Solve coin change and unbounded knapsack problems using 1D DP.",
        problems: [
          { title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
          { title: "Combination Sum IV", url: "https://leetcode.com/problems/combination-sum-iv/", difficulty: "Medium" },
          { title: "Coin Change II", url: "https://leetcode.com/problems/coin-change-ii/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - 1D Array (0/1 Knapsack Subset Sum Style)",
        description: "Solve 0/1 knapsack and subset sum problems using 1D DP optimization.",
        problems: [
          { title: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" },
          { title: "Target Sum", url: "https://leetcode.com/problems/target-sum/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - 1D Array (Word Break Style)",
        description: "Use DP to solve word break and string segmentation problems.",
        problems: [
          { title: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
          { title: "Word Break II", url: "https://leetcode.com/problems/word-break-ii/", difficulty: "Hard" }
        ]
      },
      {
        name: "DP - 2D Array (Longest Common Subsequence - LCS)",
        description: "Use 2D DP to find longest common subsequence and related problems.",
        problems: [
          { title: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium" },
          { title: "Shortest Common Supersequence", url: "https://leetcode.com/problems/shortest-common-supersequence/", difficulty: "Hard" },
          { title: "Minimum Insertion Steps to Make a String Palindrome", url: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", difficulty: "Hard" }
        ]
      },
      {
        name: "DP - 2D Array (Edit Distance / Levenshtein Distance)",
        description: "Calculate edit distance between strings using dynamic programming.",
        problems: [
          { title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" },
          { title: "Delete Operation for Two Strings", url: "https://leetcode.com/problems/delete-operation-for-two-strings/", difficulty: "Medium" },
          { title: "Minimum ASCII Delete Sum for Two Strings", url: "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - 2D Array (Unique Paths on Grid)",
        description: "Count unique paths and solve grid-based DP problems.",
        problems: [
          { title: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
          { title: "Unique Paths II", url: "https://leetcode.com/problems/unique-paths-ii/", difficulty: "Medium" },
          { title: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/", difficulty: "Medium" },
          { title: "Triangle", url: "https://leetcode.com/problems/triangle/", difficulty: "Medium" },
          { title: "Maximal Square", url: "https://leetcode.com/problems/maximal-square/", difficulty: "Medium" },
          { title: "Minimum Falling Path Sum", url: "https://leetcode.com/problems/minimum-falling-path-sum/", difficulty: "Medium" },
          { title: "Count Square Submatrices with All Ones", url: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - Interval DP",
        description: "Solve problems involving optimal ways to process intervals.",
        problems: [
          { title: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" },
          { title: "Remove Boxes", url: "https://leetcode.com/problems/remove-boxes/", difficulty: "Hard" }
        ]
      },
      {
        name: "DP - Catalan Numbers",
        description: "Problems that can be solved using Catalan number sequences.",
        problems: [
          { title: "Unique Binary Search Trees II", url: "https://leetcode.com/problems/unique-binary-search-trees-ii/", difficulty: "Medium" },
          { title: "Unique Binary Search Trees", url: "https://leetcode.com/problems/unique-binary-search-trees/", difficulty: "Medium" },
          { title: "Different Ways to Add Parentheses", url: "https://leetcode.com/problems/different-ways-to-add-parentheses/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - Longest Increasing Subsequence (LIS)",
        description: "Find longest increasing subsequence and related optimization problems.",
        problems: [
          { title: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
          { title: "Russian Doll Envelopes", url: "https://leetcode.com/problems/russian-doll-envelopes/", difficulty: "Hard" },
          { title: "Minimum Number of Removals to Make Mountain Array", url: "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/", difficulty: "Hard" },
          { title: "Longest Increasing Subsequence II", url: "https://leetcode.com/problems/longest-increasing-subsequence-ii/", difficulty: "Hard" }
        ]
      },
      {
        name: "DP - Stock problems",
        description: "Optimize stock trading strategies with various constraints.",
        problems: [
          { title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
          { title: "Best Time to Buy and Sell Stock II", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", difficulty: "Medium" },
          { title: "Best Time to Buy and Sell Stock III", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", difficulty: "Hard" },
          { title: "Best Time to Buy and Sell Stock IV", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", difficulty: "Hard" },
          { title: "Best Time to Buy and Sell Stock with Cooldown", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", difficulty: "Medium" }
        ]
      }
    ]
  },
  {
    category: "Heap (Priority Queue) Patterns",
    subcategories: [
      {
        name: "Heap - Top K Elements (Selection/Frequency)",
        description: "Use heap to efficiently find top K elements or most/least frequent items.",
        problems: [
          { title: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
          { title: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
          { title: "Sort Characters By Frequency", url: "https://leetcode.com/problems/sort-characters-by-frequency/", difficulty: "Medium" },
          { title: "Relative Ranks", url: "https://leetcode.com/problems/relative-ranks/", difficulty: "Easy" },
          { title: "Kth Largest Element in a Stream", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: "Easy" },
          { title: "K Closest Points to Origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/", difficulty: "Medium" },
          { title: "Last Stone Weight", url: "https://leetcode.com/problems/last-stone-weight/", difficulty: "Easy" },
          { title: "Take Gifts From the Richest Pile", url: "https://leetcode.com/problems/take-gifts-from-the-richest-pile/", difficulty: "Easy" }
        ]
      },
      {
        name: "Heap - Two Heaps for Median Finding",
        description: "Use two heaps (max and min) to efficiently track running median.",
        problems: [
          { title: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
          { title: "Finding MK Average", url: "https://leetcode.com/problems/finding-mk-average/", difficulty: "Hard" }
        ]
      },
      {
        name: "Heap - K-way Merge",
        description: "Merge K sorted arrays or lists efficiently using a heap.",
        problems: [
          { title: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
          { title: "Find K Pairs with Smallest Sums", url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", difficulty: "Medium" },
          { title: "Kth Smallest Element in a Sorted Matrix", url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", difficulty: "Medium" },
          { title: "Smallest Range Covering Elements from K Lists", url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", difficulty: "Hard" }
        ]
      },
      {
        name: "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        description: "Use heap for greedy scheduling and minimum cost optimization problems.",
        problems: [
          { title: "Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/", difficulty: "Medium" },
          { title: "Reorganize String", url: "https://leetcode.com/problems/reorganize-string/", difficulty: "Medium" },
          { title: "Minimum Cost to Hire K Workers", url: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/", difficulty: "Hard" },
          { title: "Furthest Building You Can Reach", url: "https://leetcode.com/problems/furthest-building-you-can-reach/", difficulty: "Medium" },
          { title: "Maximum Average Pass Ratio", url: "https://leetcode.com/problems/maximum-average-pass-ratio/", difficulty: "Medium" },
          { title: "Single-Threaded CPU", url: "https://leetcode.com/problems/single-threaded-cpu/", difficulty: "Medium" },
          { title: "The Number of the Smallest Unoccupied Chair", url: "https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/", difficulty: "Medium" },
          { title: "Meeting Rooms III", url: "https://leetcode.com/problems/meeting-rooms-iii/", difficulty: "Hard" }
        ]
      }
    ]
  },
  {
    category: "Backtracking Patterns",
    subcategories: [
      {
        name: "Backtracking - Subsets (Include/Exclude)",
        description: "Generate all subsets using include/exclude decision tree with backtracking.",
        problems: [
          { title: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium" },
          { title: "Combinations", url: "https://leetcode.com/problems/combinations/", difficulty: "Medium" },
          { title: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
          { title: "Subsets II", url: "https://leetcode.com/problems/subsets-ii/", difficulty: "Medium" }
        ]
      },
      {
        name: "Backtracking - Permutations",
        description: "Generate all permutations of elements using backtracking.",
        problems: [
          { title: "Next Permutation", url: "https://leetcode.com/problems/next-permutation/", difficulty: "Medium" },
          { title: "Permutations", url: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
          { title: "Permutation Sequence", url: "https://leetcode.com/problems/permutation-sequence/", difficulty: "Hard" }
        ]
      },
      {
        name: "Backtracking - Combination Sum",
        description: "Find combinations that sum to target using backtracking with pruning.",
        problems: [
          { title: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
          { title: "Combination Sum II", url: "https://leetcode.com/problems/combination-sum-ii/", difficulty: "Medium" }
        ]
      },
      {
        name: "Backtracking - Parentheses Generation",
        description: "Generate valid parentheses combinations using constraint-based backtracking.",
        problems: [
          { title: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium" },
          { title: "Remove Invalid Parentheses", url: "https://leetcode.com/problems/remove-invalid-parentheses/", difficulty: "Hard" }
        ]
      },
      {
        name: "Backtracking - Word Search / Path Finding in Grid",
        description: "Search for words or paths in 2D grids using backtracking.",
        problems: [
          { title: "Word Search", url: "https://leetcode.com/problems/word-search/", difficulty: "Medium" },
          { title: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" }
        ]
      },
      {
        name: "Backtracking - N-Queens / Constraint Satisfaction",
        description: "Solve constraint satisfaction problems using backtracking with validation.",
        problems: [
          { title: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Hard" },
          { title: "N-Queens", url: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" }
        ]
      },
      {
        name: "Backtracking - Palindrome Partitioning",
        description: "Partition strings into palindromes using backtracking.",
        problems: [
          { title: "Palindrome Partitioning", url: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: "Medium" },
          { title: "Palindrome Partitioning II", url: "https://leetcode.com/problems/palindrome-partitioning-ii/", difficulty: "Hard" }
        ]
      }
    ]
  },
  {
    category: "Greedy Patterns",
    subcategories: [
      {
        name: "Greedy - Interval Merging/Scheduling",
        description: "Optimize interval scheduling and merging using greedy approach.",
        problems: [
          { title: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
          { title: "Insert Interval", url: "https://leetcode.com/problems/insert-interval/", difficulty: "Medium" },
          { title: "Employee Free Time", url: "https://leetcode.com/problems/employee-free-time/", difficulty: "Hard" },
          { title: "Interval List Intersections", url: "https://leetcode.com/problems/interval-list-intersections/", difficulty: "Medium" }
        ]
      },
      {
        name: "Greedy - Jump Game Reachability/Minimization",
        description: "Solve jump game problems using greedy reachability analysis.",
        problems: [
          { title: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Medium" },
          { title: "Jump Game", url: "https://leetcode.com/problems/jump-game/", difficulty: "Medium" }
        ]
      },
      {
        name: "Greedy - Buy/Sell Stock",
        description: "Maximize profit in stock trading using greedy strategy.",
        problems: [
          { title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
          { title: "Best Time to Buy and Sell Stock II", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", difficulty: "Medium" }
        ]
      },
      {
        name: "Greedy - Gas Station Circuit",
        description: "Solve circular array problems using greedy circuit analysis.",
        problems: [
          { title: "Gas Station", url: "https://leetcode.com/problems/gas-station/", difficulty: "Medium" }
        ]
      },
      {
        name: "Greedy - Task Scheduling (Frequency Based)",
        description: "Schedule tasks optimally based on frequency constraints using greedy approach.",
        problems: [
          { title: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" }
        ]
      },
      {
        name: "Greedy - Sorting Based",
        description: "Solve optimization problems using greedy approach with sorting.",
        problems: [
          { title: "Assign Cookies", url: "https://leetcode.com/problems/assign-cookies/", difficulty: "Easy" },
          { title: "Candy", url: "https://leetcode.com/problems/candy/", difficulty: "Hard" },
          { title: "Queue Reconstruction by Height", url: "https://leetcode.com/problems/queue-reconstruction-by-height/", difficulty: "Medium" },
          { title: "Two City Scheduling", url: "https://leetcode.com/problems/two-city-scheduling/", difficulty: "Medium" }
        ]
      }
    ]
  },
  {
    category: "Binary Search Patterns",
    subcategories: [
      {
        name: "Binary Search - On Sorted Array/List",
        description: "Apply binary search on sorted arrays to find elements or positions.",
        problems: [
          { title: "Search Insert Position", url: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy" },
          { title: "Sqrt(x)", url: "https://leetcode.com/problems/sqrtx/", difficulty: "Easy" },
          { title: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Medium" },
          { title: "First Bad Version", url: "https://leetcode.com/problems/first-bad-version/", difficulty: "Easy" },
          { title: "Guess Number Higher or Lower", url: "https://leetcode.com/problems/guess-number-higher-or-lower/", difficulty: "Easy" },
          { title: "Single Element in a Sorted Array", url: "https://leetcode.com/problems/single-element-in-a-sorted-array/", difficulty: "Medium" },
          { title: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
          { title: "Kth Missing Positive Number", url: "https://leetcode.com/problems/kth-missing-positive-number/", difficulty: "Easy" }
        ]
      },
      {
        name: "Binary Search - Find Min/Max in Rotated Sorted Array",
        description: "Handle rotated sorted arrays and find peaks using modified binary search.",
        problems: [
          { title: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
          { title: "Search in Rotated Sorted Array II", url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", difficulty: "Medium" },
          { title: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
          { title: "Find Peak Element", url: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium" },
          { title: "Peak Index in a Mountain Array", url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/", difficulty: "Medium" },
          { title: "Find in Mountain Array", url: "https://leetcode.com/problems/find-in-mountain-array/", difficulty: "Hard" }
        ]
      },
      {
        name: "Binary Search - On Answer / Condition Function",
        description: "Use binary search on the answer space to find optimal values.",
        problems: [
          { title: "Split Array Largest Sum", url: "https://leetcode.com/problems/split-array-largest-sum/", difficulty: "Hard" },
          { title: "Minimize Max Distance to Gas Station", url: "https://leetcode.com/problems/minimize-max-distance-to-gas-station/", difficulty: "Hard" },
          { title: "Koko Eating Bananas", url: "https://leetcode.com/problems/koko-eating-bananas/", difficulty: "Medium" },
          { title: "Capacity To Ship Packages Within D Days", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", difficulty: "Medium" },
          { title: "Minimum Number of Days to Make m Bouquets", url: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", difficulty: "Medium" },
          { title: "Minimum Limit of Balls in a Bag", url: "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/", difficulty: "Medium" },
          { title: "Minimized Maximum of Products Distributed to Any Store", url: "https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/", difficulty: "Medium" },
          { title: "Maximum Candies Allocated to K Children", url: "https://leetcode.com/problems/maximum-candies-allocated-to-k-children/", difficulty: "Medium" }
        ]
      },
      {
        name: "Binary Search - Find First/Last Occurrence",
        description: "Find boundaries and ranges in sorted arrays using binary search.",
        problems: [
          { title: "Find First and Last Position of Element in Sorted Array", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium" },
          { title: "Find K Closest Elements", url: "https://leetcode.com/problems/find-k-closest-elements/", difficulty: "Medium" }
        ]
      },
      {
        name: "Binary Search - Median / Kth across Two Sorted Arrays",
        description: "Find median or Kth element across multiple sorted arrays.",
        problems: [
          { title: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" },
          { title: "Find K-th Smallest Pair Distance", url: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/", difficulty: "Hard" },
          { title: "Kth Smallest Element in a Sorted Matrix", url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", difficulty: "Medium" }
        ]
      }
    ]
  },
  {
    category: "Stack Patterns",
    subcategories: [
      {
        name: "Stack - Valid Parentheses Matching",
        description: "Use stack to validate and balance parentheses and brackets.",
        problems: [
          { title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
          { title: "Longest Valid Parentheses", url: "https://leetcode.com/problems/longest-valid-parentheses/", difficulty: "Hard" },
          { title: "Minimum Add to Make Parentheses Valid", url: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/", difficulty: "Medium" },
          { title: "Minimum Remove to Make Valid Parentheses", url: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/", difficulty: "Medium" },
          { title: "Minimum Number of Swaps to Make the String Balanced", url: "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/", difficulty: "Medium" }
        ]
      },
      {
        name: "Stack - Monotonic Stack",
        description: "Use monotonic stack to find next/previous greater/smaller elements.",
        problems: [
          { title: "Remove K Digits", url: "https://leetcode.com/problems/remove-k-digits/", difficulty: "Medium" },
          { title: "Next Greater Element I", url: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Easy" },
          { title: "Next Greater Element II", url: "https://leetcode.com/problems/next-greater-element-ii/", difficulty: "Medium" },
          { title: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
          { title: "Online Stock Span", url: "https://leetcode.com/problems/online-stock-span/", difficulty: "Medium" },
          { title: "Sum of Subarray Minimums", url: "https://leetcode.com/problems/sum-of-subarray-minimums/", difficulty: "Medium" },
          { title: "Maximum Width Ramp", url: "https://leetcode.com/problems/maximum-width-ramp/", difficulty: "Medium" },
          { title: "Final Prices With a Special Discount in a Shop", url: "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/", difficulty: "Easy" },
          { title: "Find the Most Competitive Subsequence", url: "https://leetcode.com/problems/find-the-most-competitive-subsequence/", difficulty: "Medium" }
        ]
      },
      {
        name: "Stack - Expression Evaluation (RPN/Infix)",
        description: "Evaluate mathematical expressions using stack-based parsing.",
        problems: [
          { title: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" },
          { title: "Basic Calculator", url: "https://leetcode.com/problems/basic-calculator/", difficulty: "Hard" },
          { title: "Basic Calculator II", url: "https://leetcode.com/problems/basic-calculator-ii/", difficulty: "Medium" },
          { title: "Basic Calculator III", url: "https://leetcode.com/problems/basic-calculator-iii/", difficulty: "Hard" }
        ]
      },
      {
        name: "Stack - Simulation / Backtracking Helper",
        description: "Use stack to simulate processes or assist with backtracking algorithms.",
        problems: [
          { title: "Simplify Path", url: "https://leetcode.com/problems/simplify-path/", difficulty: "Medium" },
          { title: "Decode String", url: "https://leetcode.com/problems/decode-string/", difficulty: "Medium" },
          { title: "Asteroid Collision", url: "https://leetcode.com/problems/asteroid-collision/", difficulty: "Medium" }
        ]
      },
      {
        name: "Stack - Min Stack Design",
        description: "Design specialized stack data structures with additional functionality.",
        problems: [
          { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
          { title: "Maximum Frequency Stack", url: "https://leetcode.com/problems/maximum-frequency-stack/", difficulty: "Hard" }
        ]
      },
      {
        name: "Stack - Largest Rectangle in Histogram",
        description: "Find largest rectangles in histograms using stack-based algorithms.",
        problems: [
          { title: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
          { title: "Maximal Rectangle", url: "https://leetcode.com/problems/maximal-rectangle/", difficulty: "Hard" },
          { title: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" }
        ]
      }
    ]
  },
  {
    category: "Linked List Manipulation Patterns",
    subcategories: [
      {
        name: "Linked List - In-place Reversal",
        description: "Reverse linked lists or parts of them in-place without extra space.",
        problems: [
          { title: "Remove Duplicates from Sorted List", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", difficulty: "Easy" },
          { title: "Reverse Linked List II", url: "https://leetcode.com/problems/reverse-linked-list-ii/", difficulty: "Medium" },
          { title: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
          { title: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
          { title: "Palindrome Linked List", url: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Easy" },
          { title: "Remove Duplicates from Sorted List II", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/", difficulty: "Medium" }
        ]
      },
      {
        name: "Linked List - Merging Two Sorted Lists",
        description: "Merge multiple sorted linked lists efficiently.",
        problems: [
          { title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
          { title: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" }
        ]
      },
      {
        name: "Linked List - Addition of Numbers",
        description: "Perform arithmetic operations on numbers represented as linked lists.",
        problems: [
          { title: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" }
        ]
      },
      {
        name: "Linked List - Intersection Detection",
        description: "Find intersections and common elements between linked lists.",
        problems: [
          { title: "Intersection of Two Linked Lists", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Easy" }
        ]
      },
      {
        name: "Linked List - Reordering / Partitioning",
        description: "Reorder and partition linked lists based on specific criteria.",
        problems: [
          { title: "Swap Nodes in Pairs", url: "https://leetcode.com/problems/swap-nodes-in-pairs/", difficulty: "Medium" },
          { title: "Rotate List", url: "https://leetcode.com/problems/rotate-list/", difficulty: "Medium" },
          { title: "Partition List", url: "https://leetcode.com/problems/partition-list/", difficulty: "Medium" },
          { title: "Reorder List", url: "https://leetcode.com/problems/reorder-list/", difficulty: "Medium" },
          { title: "Odd Even Linked List", url: "https://leetcode.com/problems/odd-even-linked-list/", difficulty: "Medium" }
        ]
      }
    ]
  },
  {
    category: "Array/Matrix Manipulation Patterns",
    subcategories: [
      {
        name: "Array/Matrix - In-place Rotation",
        description: "Rotate arrays and matrices in-place without using extra space.",
        problems: [
          { title: "Rotate Image", url: "https://leetcode.com/problems/rotate-image/", difficulty: "Medium" },
          { title: "Rotate Array", url: "https://leetcode.com/problems/rotate-array/", difficulty: "Medium" },
          { title: "Transpose Matrix", url: "https://leetcode.com/problems/transpose-matrix/", difficulty: "Easy" }
        ]
      },
      {
        name: "Array/Matrix - Spiral Traversal",
        description: "Traverse matrices in spiral order and generate spiral patterns.",
        problems: [
          { title: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/", difficulty: "Medium" },
          { title: "Spiral Matrix II", url: "https://leetcode.com/problems/spiral-matrix-ii/", difficulty: "Medium" },
          { title: "Spiral Matrix III", url: "https://leetcode.com/problems/spiral-matrix-iii/", difficulty: "Medium" },
          { title: "Spiral Matrix IV", url: "https://leetcode.com/problems/spiral-matrix-iv/", difficulty: "Medium" }
        ]
      },
      {
        name: "Array/Matrix - Set Matrix Zeroes (In-place Marking)",
        description: "Modify matrices in-place using the matrix itself as marker storage.",
        problems: [
          { title: "Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/", difficulty: "Medium" },
          { title: "Game of Life", url: "https://leetcode.com/problems/game-of-life/", difficulty: "Medium" },
          { title: "Diagonal Traverse", url: "https://leetcode.com/problems/diagonal-traverse/", difficulty: "Medium" }
        ]
      },
      {
        name: "Array - Product Except Self (Prefix/Suffix Products)",
        description: "Calculate products of all elements except self using prefix and suffix products.",
        problems: [
          { title: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
          { title: "Longest Mountain in Array", url: "https://leetcode.com/problems/longest-mountain-in-array/", difficulty: "Medium" },
          { title: "Minimum Penalty for a Shop", url: "https://leetcode.com/problems/minimum-penalty-for-a-shop/", difficulty: "Medium" }
        ]
      },
      {
        name: "Array - Plus One (Handling Carry)",
        description: "Handle arithmetic operations with carry propagation in array representation.",
        problems: [
          { title: "Plus One", url: "https://leetcode.com/problems/plus-one/", difficulty: "Easy" },
          { title: "Multiply Strings", url: "https://leetcode.com/problems/multiply-strings/", difficulty: "Medium" },
          { title: "Add to Array-Form of Integer", url: "https://leetcode.com/problems/add-to-array-form-of-integer/", difficulty: "Easy" },
          { title: "Add Binary", url: "https://leetcode.com/problems/add-binary/", difficulty: "Easy" }
        ]
      },
      {
        name: "Array - Merge Sorted Array (In-place from End)",
        description: "Merge sorted arrays in-place by working backwards from the end.",
        problems: [
          { title: "Merge Sorted Array", url: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Easy" },
          { title: "Squares of a Sorted Array", url: "https://leetcode.com/problems/squares-of-a-sorted-array/", difficulty: "Easy" }
        ]
      },
      {
        name: "Array - Cyclic Sort",
        description: "Sort arrays where elements are in a specific range using cyclic sort technique.",
        problems: [
          { title: "First Missing Positive", url: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard" },
          { title: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
          { title: "Find All Duplicates in an Array", url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/", difficulty: "Medium" },
          { title: "Find All Numbers Disappeared in an Array", url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/", difficulty: "Easy" }
        ]
      }
    ]
  },
  {
    category: "String Manipulation Patterns",
    subcategories: [
      {
        name: "String - Palindrome Check (Two Pointers / Reverse)",
        description: "Check for palindromes using two pointers or string reversal techniques.",
        problems: [
          { title: "Palindrome Number", url: "https://leetcode.com/problems/palindrome-number/", difficulty: "Easy" },
          { title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
          { title: "Valid Palindrome II", url: "https://leetcode.com/problems/valid-palindrome-ii/", difficulty: "Easy" }
        ]
      },
      {
        name: "String - Anagram Check (Frequency Count/Sort)",
        description: "Detect anagrams using character frequency counting or sorting.",
        problems: [
          { title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
          { title: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" }
        ]
      },
      {
        name: "String - Roman to Integer Conversion",
        description: "Convert between Roman numerals and integers using parsing rules.",
        problems: [
          { title: "Roman to Integer", url: "https://leetcode.com/problems/roman-to-integer/", difficulty: "Easy" },
          { title: "Integer to Roman", url: "https://leetcode.com/problems/integer-to-roman/", difficulty: "Medium" }
        ]
      },
      {
        name: "String - String to Integer (atoi)",
        description: "Parse strings to integers with validation and edge case handling.",
        problems: [
          { title: "String to Integer (atoi)", url: "https://leetcode.com/problems/string-to-integer-atoi/", difficulty: "Medium" },
          { title: "Valid Number", url: "https://leetcode.com/problems/valid-number/", difficulty: "Hard" }
        ]
      },
      {
        name: "String - Multiply Strings (Manual Simulation)",
        description: "Perform arithmetic operations on strings representing large numbers.",
        problems: [
          { title: "Add Strings", url: "https://leetcode.com/problems/add-strings/", difficulty: "Easy" }
        ]
      },
      {
        name: "String Matching - Naive / KMP / Rabin-Karp",
        description: "Find substring patterns using various string matching algorithms.",
        problems: [
          { title: "Find the Index of the First Occurrence in a String", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", difficulty: "Easy" },
          { title: "Shortest Palindrome", url: "https://leetcode.com/problems/shortest-palindrome/", difficulty: "Hard" },
          { title: "Repeated String Match", url: "https://leetcode.com/problems/repeated-string-match/", difficulty: "Medium" },
          { title: "Rotate String", url: "https://leetcode.com/problems/rotate-string/", difficulty: "Easy" }
        ]
      },
      {
        name: "String - Repeated Substring Pattern Detection",
        description: "Detect repeated patterns and substrings within strings.",
        problems: [
          { title: "Repeated Substring Pattern", url: "https://leetcode.com/problems/repeated-substring-pattern/", difficulty: "Easy" }
        ]
      }
    ]
  },
  {
    category: "Design Patterns",
    subcategories: [
      {
        name: "Design (General/Specific)",
        description: "Design and implement various data structures and systems.",
        problems: [
          { title: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
          { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
          { title: "Implement Stack using Queues", url: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Easy" },
          { title: "Implement Queue using Stacks", url: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy" },
          { title: "Flatten 2D Vector", url: "https://leetcode.com/problems/flatten-2d-vector/", difficulty: "Medium" },
          { title: "Encode and Decode Strings", url: "https://leetcode.com/problems/encode-and-decode-strings/", difficulty: "Medium" },
          { title: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
          { title: "Flatten Nested List Iterator", url: "https://leetcode.com/problems/flatten-nested-list-iterator/", difficulty: "Medium" },
          { title: "Moving Average from Data Stream", url: "https://leetcode.com/problems/moving-average-from-data-stream/", difficulty: "Easy" },
          { title: "Design Snake Game", url: "https://leetcode.com/problems/design-snake-game/", difficulty: "Medium" },
          { title: "Logger Rate Limiter", url: "https://leetcode.com/problems/logger-rate-limiter/", difficulty: "Easy" },
          { title: "Design Hit Counter", url: "https://leetcode.com/problems/design-hit-counter/", difficulty: "Medium" },
          { title: "Design Phone Directory", url: "https://leetcode.com/problems/design-phone-directory/", difficulty: "Medium" },
          { title: "Insert Delete GetRandom O(1)", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/", difficulty: "Medium" },
          { title: "All O`one Data Structure", url: "https://leetcode.com/problems/all-oone-data-structure/", difficulty: "Hard" },
          { title: "LFU Cache", url: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard" },
          { title: "Design Compressed String Iterator", url: "https://leetcode.com/problems/design-compressed-string-iterator/", difficulty: "Easy" },
          { title: "Design Circular Queue", url: "https://leetcode.com/problems/design-circular-queue/", difficulty: "Medium" },
          { title: "Design Circular Deque", url: "https://leetcode.com/problems/design-circular-deque/", difficulty: "Medium" },
          { title: "Design Search Autocomplete System", url: "https://leetcode.com/problems/design-search-autocomplete-system/", difficulty: "Hard" },
          { title: "Design HashMap", url: "https://leetcode.com/problems/design-hashmap/", difficulty: "Easy" },
          { title: "Range Module", url: "https://leetcode.com/problems/range-module/", difficulty: "Hard" },
          { title: "RLE Iterator", url: "https://leetcode.com/problems/rle-iterator/", difficulty: "Medium" },
          { title: "Time Based Key-Value Store", url: "https://leetcode.com/problems/time-based-key-value-store/", difficulty: "Medium" },
          { title: "Snapshot Array", url: "https://leetcode.com/problems/snapshot-array/", difficulty: "Medium" },
          { title: "Tweet Counts Per Frequency", url: "https://leetcode.com/problems/tweet-counts-per-frequency/", difficulty: "Medium" },
          { title: "Product of the Last K Numbers", url: "https://leetcode.com/problems/product-of-the-last-k-numbers/", difficulty: "Medium" },
          { title: "Design a Stack With Increment Operation", url: "https://leetcode.com/problems/design-a-stack-with-increment-operation/", difficulty: "Medium" },
          { title: "Design Most Recently Used Queue", url: "https://leetcode.com/problems/design-most-recently-used-queue/", difficulty: "Medium" },
          { title: "Detect Squares", url: "https://leetcode.com/problems/detect-squares/", difficulty: "Medium" },
          { title: "Stock Price Fluctuation", url: "https://leetcode.com/problems/stock-price-fluctuation/", difficulty: "Medium" },
          { title: "Design a Text Editor", url: "https://leetcode.com/problems/design-a-text-editor/", difficulty: "Hard" },
          { title: "Smallest Number in Infinite Set", url: "https://leetcode.com/problems/smallest-number-in-infinite-set/", difficulty: "Medium" }
        ]
      },
      {
        name: "Tries",
        description: "Implement and use Trie (Prefix Tree) data structure for string operations.",
        problems: [
          { title: "Implement Trie (Prefix Tree)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium" },
          { title: "Design Add and Search Words Data Structure", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", difficulty: "Medium" },
          { title: "Longest Word in Dictionary", url: "https://leetcode.com/problems/longest-word-in-dictionary/", difficulty: "Medium" },
          { title: "Replace Words", url: "https://leetcode.com/problems/replace-words/", difficulty: "Medium" },
          { title: "Word Squares", url: "https://leetcode.com/problems/word-squares/", difficulty: "Hard" },
          { title: "Design Search Autocomplete System", url: "https://leetcode.com/problems/design-search-autocomplete-system/", difficulty: "Hard" },
          { title: "Prefix and Suffix Search", url: "https://leetcode.com/problems/prefix-and-suffix-search/", difficulty: "Hard" }
        ]
      }
    ]
  }
];