import {
  initializeDatabase,
  insertCategory,
  insertSubcategory,
  insertProblem
} from '../server/db.js';

// Initialize database first
initializeDatabase();

console.log('Starting database seeding...');

// Seed data structure
const seedData = [
  {
    category: "Bitwise Patterns",
    subcategories: [
      {
        name: "Bitwise XOR - Finding Single/Missing Number",
        description: "Use XOR properties to find single or missing numbers efficiently.",
        problems: [
          { title: "Single Number", url: "https://leetcode.com/problems/single-number/", difficulty: "Easy" },
          { title: "Single Number II", url: "https://leetcode.com/problems/single-number-ii/", difficulty: "Medium" },
          { title: "Missing Number", url: "https://leetcode.com/problems/missing-number/", difficulty: "Easy" },
          { title: "Find the Difference", url: "https://leetcode.com/problems/find-the-difference/", difficulty: "Easy" }
        ]
      },
      {
        name: "Bitwise AND - Counting Set Bits (Hamming Weight)",
        description: "Count set bits and calculate Hamming weight using bit manipulation.",
        problems: [
          { title: "Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/", difficulty: "Easy" },
          { title: "Power of Two", url: "https://leetcode.com/problems/power-of-two/", difficulty: "Easy" },
          { title: "Total Hamming Distance", url: "https://leetcode.com/problems/total-hamming-distance/", difficulty: "Medium" },
          { title: "Reverse Bits", url: "https://leetcode.com/problems/reverse-bits/", difficulty: "Easy" }
        ]
      },
      {
        name: "Bitwise DP - Counting Bits Optimization",
        description: "Optimize bit counting problems using dynamic programming with bit manipulation.",
        problems: [
          { title: "Counting Bits", url: "https://leetcode.com/problems/counting-bits/", difficulty: "Easy" },
          { title: "Parallel Courses II", url: "https://leetcode.com/problems/parallel-courses-ii/", difficulty: "Hard" },
          { title: "Count Triplets That Can Form Two Arrays of Equal XOR", url: "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/", difficulty: "Medium" }
        ]
      },
      {
        name: "Bitwise Operations - Arithmetic Without +/-",
        description: "Perform arithmetic operations without using +/- operators using bit manipulation.",
        problems: [
          { title: "Sum of Two Integers", url: "https://leetcode.com/problems/sum-of-two-integers/", difficulty: "Medium" }
        ]
      },
      {
        name: "Bitwise Operations - Power of Two/Four Check",
        description: "Check if numbers are powers of two or four using bit manipulation tricks.",
        problems: [
          { title: "Power of Four", url: "https://leetcode.com/problems/power-of-four/", difficulty: "Easy" }
        ]
      }
    ]
  },
  {
    category: "Two Pointer Patterns",
    subcategories: [
      {
        name: "Two Pointers - Converging (Sorted Array Target Sum)",
        description: "Use pointers starting from opposite ends of a sorted array to find target sums or conditions.",
        problems: [
          { title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
          { title: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
          { title: "3Sum Closest", url: "https://leetcode.com/problems/3sum-closest/", difficulty: "Medium" },
          { title: "4Sum", url: "https://leetcode.com/problems/4sum/", difficulty: "Medium" },
          { title: "Two Sum II - Input Array Is Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", difficulty: "Medium" },
          { title: "Intersection of Two Arrays", url: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Easy" },
          { title: "Boats to Save People", url: "https://leetcode.com/problems/boats-to-save-people/", difficulty: "Medium" },
          { title: "Squares of a Sorted Array", url: "https://leetcode.com/problems/squares-of-a-sorted-array/", difficulty: "Easy" },
          { title: "3Sum Smaller", url: "https://leetcode.com/problems/3sum-smaller/", difficulty: "Medium" }
        ]
      },
      {
        name: "Two Pointers - Fast & Slow (Cycle Detection)",
        description: "Use fast and slow pointers to detect cycles in linked lists or arrays.",
        problems: [
          { title: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
          { title: "Happy Number", url: "https://leetcode.com/problems/happy-number/", difficulty: "Easy" },
          { title: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
          { title: "Is Subsequence", url: "https://leetcode.com/problems/is-subsequence/", difficulty: "Easy" }
        ]
      },
      {
        name: "Two Pointers - Fixed Separation (Nth Node from End)",
        description: "Use two pointers with a fixed distance to find positions from the end of a list.",
        problems: [
          { title: "Remove Nth Node From End of List", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
          { title: "Middle of the Linked List", url: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Easy" },
          { title: "Delete the Middle Node of a Linked List", url: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/", difficulty: "Medium" }
        ]
      },
      {
        name: "Two Pointers - In-place Array Modification",
        description: "Use two pointers to modify arrays in-place without extra space.",
        problems: [
          { title: "Remove Duplicates from Sorted Array", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy" },
          { title: "Remove Element", url: "https://leetcode.com/problems/remove-element/", difficulty: "Easy" },
          { title: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/", difficulty: "Medium" },
          { title: "Remove Duplicates from Sorted Array II", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/", difficulty: "Medium" },
          { title: "Move Zeroes", url: "https://leetcode.com/problems/move-zeroes/", difficulty: "Easy" },
          { title: "String Compression", url: "https://leetcode.com/problems/string-compression/", difficulty: "Medium" },
          { title: "Sort Array By Parity", url: "https://leetcode.com/problems/sort-array-by-parity/", difficulty: "Easy" },
          { title: "Move Pieces to Obtain a String", url: "https://leetcode.com/problems/move-pieces-to-obtain-a-string/", difficulty: "Medium" },
          { title: "Separate Black and White Balls", url: "https://leetcode.com/problems/separate-black-and-white-balls/", difficulty: "Medium" }
        ]
      },
      {
        name: "Two Pointers - String Comparison with Backspaces",
        description: "Use two pointers to compare strings while handling backspace operations.",
        problems: [
          { title: "Backspace String Compare", url: "https://leetcode.com/problems/backspace-string-compare/", difficulty: "Easy" },
          { title: "Crawler Log Folder", url: "https://leetcode.com/problems/crawler-log-folder/", difficulty: "Easy" },
          { title: "Removing Stars From a String", url: "https://leetcode.com/problems/removing-stars-from-a-string/", difficulty: "Medium" }
        ]
      },
      {
        name: "Two Pointers - Expanding From Center (Palindromes)",
        description: "Expand from center to find palindromes or symmetric patterns.",
        problems: [
          { title: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium" },
          { title: "Palindromic Substrings", url: "https://leetcode.com/problems/palindromic-substrings/", difficulty: "Medium" }
        ]
      },
      {
        name: "Two Pointers - String Reversal",
        description: "Use two pointers to reverse strings or parts of strings efficiently.",
        problems: [
          { title: "Reverse Words in a String", url: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Medium" },
          { title: "Reverse String", url: "https://leetcode.com/problems/reverse-string/", difficulty: "Easy" },
          { title: "Reverse Vowels of a String", url: "https://leetcode.com/problems/reverse-vowels-of-a-string/", difficulty: "Easy" },
          { title: "Reverse String II", url: "https://leetcode.com/problems/reverse-string-ii/", difficulty: "Easy" }
        ]
      }
    ]
  },
  {
    category: "Sliding Window Patterns",
    subcategories: [
      {
        name: "Sliding Window - Fixed Size (Subarray Calculation)",
        description: "Use a fixed-size window to calculate properties of subarrays.",
        problems: [
          { title: "Moving Average from Data Stream", url: "https://leetcode.com/problems/moving-average-from-data-stream/", difficulty: "Easy" },
          { title: "Maximum Average Subarray I", url: "https://leetcode.com/problems/maximum-average-subarray-i/", difficulty: "Easy" },
          { title: "Calculate Compressed Mean", url: "https://leetcode.com/problems/calculate-compressed-mean/", difficulty: "Easy" },
          { title: "Find the Power of K-Size Subarrays I", url: "https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/", difficulty: "Medium" },
          { title: "Find X-Sum of All K-Long Subarrays I", url: "https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/", difficulty: "Medium" }
        ]
      },
      {
        name: "Sliding Window - Variable Size (Condition-Based)",
        description: "Use a variable-size window that expands and contracts based on conditions.",
        problems: [
          { title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
          { title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
          { title: "Minimum Size Subarray Sum", url: "https://leetcode.com/problems/minimum-size-subarray-sum/", difficulty: "Medium" },
          { title: "Contains Duplicate II", url: "https://leetcode.com/problems/contains-duplicate-ii/", difficulty: "Easy" },
          { title: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", difficulty: "Medium" },
          { title: "Subarray Product Less Than K", url: "https://leetcode.com/problems/subarray-product-less-than-k/", difficulty: "Medium" },
          { title: "Fruit Into Baskets", url: "https://leetcode.com/problems/fruit-into-baskets/", difficulty: "Medium" },
          { title: "Max Consecutive Ones III", url: "https://leetcode.com/problems/max-consecutive-ones-iii/", difficulty: "Medium" },
          { title: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", url: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/", difficulty: "Medium" },
          { title: "Longest Subarray of 1's After Deleting One Element", url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/", difficulty: "Medium" },
          { title: "Minimum Operations to Reduce X to Zero", url: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/", difficulty: "Medium" },
          { title: "Frequency of the Most Frequent Element", url: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/", difficulty: "Medium" },
          { title: "Maximum Sum of Distinct Subarrays With Length K", url: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/", difficulty: "Medium" },
          { title: "Take K of Each Character From Left and Right", url: "https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/", difficulty: "Medium" },
          { title: "Continuous Subarrays", url: "https://leetcode.com/problems/continuous-subarrays/", difficulty: "Medium" },
          { title: "Maximum Beauty of an Array After Applying Operation", url: "https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/", difficulty: "Medium" },
          { title: "Find Longest Special Substring That Occurs Thrice I", url: "https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/", difficulty: "Medium" },
          { title: "Maximum Good Subarray Sum", url: "https://leetcode.com/problems/maximum-good-subarray-sum/", difficulty: "Medium" },
          { title: "Maximum Frequency of an Element After Performing Operations I", url: "https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/", difficulty: "Hard" },
          { title: "Maximum Frequency of an Element After Performing Operations II", url: "https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/", difficulty: "Hard" }
        ]
      },
      {
        name: "Sliding Window - Monotonic Queue for Max/Min",
        description: "Use a sliding window with monotonic deque to efficiently track max/min values.",
        problems: [
          { title: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
          { title: "Shortest Subarray with Sum at Least K", url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/", difficulty: "Hard" },
          { title: "Jump Game VI", url: "https://leetcode.com/problems/jump-game-vi/", difficulty: "Medium" }
        ]
      },
      {
        name: "Sliding Window - Character Frequency Matching",
        description: "Use sliding window to match character frequencies or anagram patterns.",
        problems: [
          { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
          { title: "Find All Anagrams in a String", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", difficulty: "Medium" },
          { title: "Permutation in String", url: "https://leetcode.com/problems/permutation-in-string/", difficulty: "Medium" }
        ]
      }
    ]
  },
  {
    category: "Tree Traversal Patterns (DFS & BFS)",
    subcategories: [
      {
        name: "Tree BFS - Level Order Traversal",
        description: "Use breadth-first search to traverse tree level by level.",
        problems: [
          { title: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
          { title: "Binary Tree Zigzag Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium" },
          { title: "Binary Tree Right Side View", url: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Medium" },
          { title: "Find Largest Value in Each Tree Row", url: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/", difficulty: "Medium" },
          { title: "Maximum Level Sum of a Binary Tree", url: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/", difficulty: "Medium" }
        ]
      },
      {
        name: "Tree DFS - Recursive Preorder Traversal",
        description: "Process root first, then recursively traverse left and right subtrees.",
        problems: [
          { title: "Same Tree", url: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
          { title: "Symmetric Tree", url: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
          { title: "Construct Binary Tree from Preorder and Inorder Traversal", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Medium" },
          { title: "Flatten Binary Tree to Linked List", url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "Medium" },
          { title: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
          { title: "Binary Tree Paths", url: "https://leetcode.com/problems/binary-tree-paths/", difficulty: "Easy" },
          { title: "Smallest String Starting From Leaf", url: "https://leetcode.com/problems/smallest-string-starting-from-leaf/", difficulty: "Medium" }
        ]
      },
      {
        name: "Tree DFS - Recursive Inorder Traversal",
        description: "Recursively traverse left subtree, process root, then right subtree.",
        problems: [
          { title: "Binary Tree Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy" },
          { title: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
          { title: "Binary Search Tree Iterator", url: "https://leetcode.com/problems/binary-search-tree-iterator/", difficulty: "Medium" },
          { title: "Kth Smallest Element in a BST", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Medium" },
          { title: "Find Mode in Binary Search Tree", url: "https://leetcode.com/problems/find-mode-in-binary-search-tree/", difficulty: "Easy" },
          { title: "Minimum Absolute Difference in BST", url: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/", difficulty: "Easy" }
        ]
      },
      {
        name: "Tree DFS - Recursive Postorder Traversal",
        description: "Recursively traverse left and right subtrees first, then process root.",
        problems: [
          { title: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
          { title: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Easy" },
          { title: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
          { title: "Binary Tree Postorder Traversal", url: "https://leetcode.com/problems/binary-tree-postorder-traversal/", difficulty: "Easy" },
          { title: "House Robber III", url: "https://leetcode.com/problems/house-robber-iii/", difficulty: "Medium" },
          { title: "Find Leaves of Binary Tree", url: "https://leetcode.com/problems/find-leaves-of-binary-tree/", difficulty: "Medium" },
          { title: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
          { title: "All Nodes Distance K in Binary Tree", url: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", difficulty: "Medium" },
          { title: "Delete Nodes And Return Forest", url: "https://leetcode.com/problems/delete-nodes-and-return-forest/", difficulty: "Medium" },
          { title: "Height of Binary Tree After Subtree Removal Queries", url: "https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/", difficulty: "Hard" }
        ]
      },
      {
        name: "Tree - Lowest Common Ancestor (LCA) Finding",
        description: "Find the lowest common ancestor of two nodes in a binary tree.",
        problems: [
          { title: "Lowest Common Ancestor of a Binary Search Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: "Medium" },
          { title: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" }
        ]
      },
      {
        name: "Tree - Serialization and Deserialization",
        description: "Convert tree to string representation and reconstruct from string.",
        problems: [
          { title: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
          { title: "Subtree of Another Tree", url: "https://leetcode.com/problems/subtree-of-another-tree/", difficulty: "Easy" },
          { title: "Find Duplicate Subtrees", url: "https://leetcode.com/problems/find-duplicate-subtrees/", difficulty: "Medium" }
        ]
      }
    ]
  },
  {
    category: "Graph Traversal Patterns (DFS & BFS)",
    subcategories: [
      {
        name: "Graph DFS - Connected Components / Island Counting",
        description: "Use DFS to find connected components or count islands in a grid.",
        problems: [
          { title: "Surrounded Regions", url: "https://leetcode.com/problems/surrounded-regions/", difficulty: "Medium" },
          { title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
          { title: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
          { title: "Number of Provinces", url: "https://leetcode.com/problems/number-of-provinces/", difficulty: "Medium" },
          { title: "Max Area of Island", url: "https://leetcode.com/problems/max-area-of-island/", difficulty: "Medium" },
          { title: "Flood Fill", url: "https://leetcode.com/problems/flood-fill/", difficulty: "Easy" },
          { title: "Keys and Rooms", url: "https://leetcode.com/problems/keys-and-rooms/", difficulty: "Medium" },
          { title: "Number of Enclaves", url: "https://leetcode.com/problems/number-of-enclaves/", difficulty: "Medium" },
          { title: "Number of Closed Islands", url: "https://leetcode.com/problems/number-of-closed-islands/", difficulty: "Medium" },
          { title: "Count Sub Islands", url: "https://leetcode.com/problems/count-sub-islands/", difficulty: "Medium" },
          { title: "Detonate the Maximum Bombs", url: "https://leetcode.com/problems/detonate-the-maximum-bombs/", difficulty: "Medium" }
        ]
      },
      {
        name: "Graph BFS - Connected Components / Island Counting",
        description: "Use BFS to find shortest paths or connected components in grids.",
        problems: [
          { title: "01 Matrix", url: "https://leetcode.com/problems/01-matrix/", difficulty: "Medium" },
          { title: "Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Medium" },
          { title: "Shortest Path in Binary Matrix", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", difficulty: "Medium" }
        ]
      },
      {
        name: "Graph DFS - Cycle Detection (Directed Graph)",
        description: "Use DFS with coloring to detect cycles in directed graphs.",
        problems: [
          { title: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
          { title: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
          { title: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/", difficulty: "Medium" },
          { title: "All Paths from Source Lead to Destination", url: "https://leetcode.com/problems/all-paths-from-source-lead-to-destination/", difficulty: "Medium" }
        ]
      },
      {
        name: "Graph BFS - Topological Sort (Kahn's Algorithm)",
        description: "Use BFS-based topological sorting to order dependent tasks.",
        problems: [
          { title: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
          { title: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Hard" },
          { title: "Minimum Height Trees", url: "https://leetcode.com/problems/minimum-height-trees/", difficulty: "Medium" },
          { title: "Sequence Reconstruction", url: "https://leetcode.com/problems/sequence-reconstruction/", difficulty: "Medium" },
          { title: "Parallel Courses", url: "https://leetcode.com/problems/parallel-courses/", difficulty: "Medium" },
          { title: "Largest Color Value in a Directed Graph", url: "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/", difficulty: "Hard" },
          { title: "Parallel Courses III", url: "https://leetcode.com/problems/parallel-courses-iii/", difficulty: "Hard" },
          { title: "Find All Possible Recipes from Given Supplies", url: "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/", difficulty: "Medium" },
          { title: "Build a Matrix With Conditions", url: "https://leetcode.com/problems/build-a-matrix-with-conditions/", difficulty: "Hard" }
        ]
      },
      {
        name: "Graph - Deep Copy / Cloning",
        description: "Create deep copies of graphs while preserving structure and connections.",
        problems: [
          { title: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
          { title: "Find the City With the Smallest Number of Neighbors at a Threshold Distance", url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/", difficulty: "Medium" },
          { title: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" },
          { title: "Clone N-ary Tree", url: "https://leetcode.com/problems/clone-n-ary-tree/", difficulty: "Medium" }
        ]
      },
      {
        name: "Graph - Shortest Path (Dijkstra's Algorithm)",
        description: "Find shortest paths in weighted graphs using Dijkstra's algorithm.",
        problems: [
          { title: "Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/", difficulty: "Medium" },
          { title: "Swim in Rising Water", url: "https://leetcode.com/problems/swim-in-rising-water/", difficulty: "Hard" },
          { title: "Path with Maximum Probability", url: "https://leetcode.com/problems/path-with-maximum-probability/", difficulty: "Medium" },
          { title: "Path With Minimum Effort", url: "https://leetcode.com/problems/path-with-minimum-effort/", difficulty: "Medium" },
          { title: "Number of Ways to Arrive at Destination", url: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/", difficulty: "Medium" },
          { title: "Second Minimum Time to Reach Destination", url: "https://leetcode.com/problems/second-minimum-time-to-reach-destination/", difficulty: "Hard" },
          { title: "Minimum Weighted Subgraph With the Required Paths", url: "https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/", difficulty: "Hard" },
          { title: "Minimum Obstacle Removal to Reach Corner", url: "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/", difficulty: "Hard" },
          { title: "Minimum Time to Visit a Cell In a Grid", url: "https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/", difficulty: "Hard" },
          { title: "Find the Safest Path in a Grid", url: "https://leetcode.com/problems/find-the-safest-path-in-a-grid/", difficulty: "Medium" }
        ]
      },
      {
        name: "Graph - Shortest Path (Bellman-Ford / BFS+K)",
        description: "Handle negative weights or k-limited paths using Bellman-Ford or modified BFS.",
        problems: [
          { title: "Cheapest Flights Within K Stops", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", difficulty: "Medium" },
          { title: "Shortest Path with Alternating Colors", url: "https://leetcode.com/problems/shortest-path-with-alternating-colors/", difficulty: "Medium" }
        ]
      },
      {
        name: "Graph - Union-Find (Disjoint Set Union - DSU)",
        description: "Use Union-Find data structure to efficiently manage disjoint sets.",
        problems: [
          { title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
          { title: "Graph Valid Tree", url: "https://leetcode.com/problems/graph-valid-tree/", difficulty: "Medium" },
          { title: "Number of Islands II", url: "https://leetcode.com/problems/number-of-islands-ii/", difficulty: "Hard" },
          { title: "Number of Connected Components in an Undirected Graph", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", difficulty: "Medium" },
          { title: "Number of Provinces", url: "https://leetcode.com/problems/number-of-provinces/", difficulty: "Medium" },
          { title: "Redundant Connection", url: "https://leetcode.com/problems/redundant-connection/", difficulty: "Medium" },
          { title: "Accounts Merge", url: "https://leetcode.com/problems/accounts-merge/", difficulty: "Medium" },
          { title: "Sentence Similarity II", url: "https://leetcode.com/problems/sentence-similarity-ii/", difficulty: "Medium" },
          { title: "Most Stones Removed with Same Row or Column", url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/", difficulty: "Medium" },
          { title: "Largest Component Size by Common Factor", url: "https://leetcode.com/problems/largest-component-size-by-common-factor/", difficulty: "Hard" },
          { title: "Regions Cut By Slashes", url: "https://leetcode.com/problems/regions-cut-by-slashes/", difficulty: "Medium" },
          { title: "The Earliest Moment When Everyone Become Friends", url: "https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/", difficulty: "Medium" }
        ]
      },
      {
        name: "Strongly Connected Components (Kosaraju / Tarjan)",
        description: "Find strongly connected components in directed graphs.",
        problems: [
          { title: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" },
          { title: "Number of Provinces", url: "https://leetcode.com/problems/number-of-provinces/", difficulty: "Medium" },
          { title: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard" },
          { title: "Maximum Employees to Be Invited to a Meeting", url: "https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/", difficulty: "Hard" }
        ]
      },
      {
        name: "Bridges & Articulation Points (Tarjan low-link)",
        description: "Find bridges and articulation points in graphs using Tarjan's algorithm.",
        problems: [
          { title: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard" },
          { title: "Longest Cycle in a Graph", url: "https://leetcode.com/problems/longest-cycle-in-a-graph/", difficulty: "Hard" }
        ]
      },
      {
        name: "Minimum Spanning Tree (Kruskal / Prim / DSU + heap)",
        description: "Find minimum spanning tree using Kruskal's or Prim's algorithm.",
        problems: [
          { title: "Connecting Cities With Minimum Cost", url: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/", difficulty: "Medium" },
          { title: "Min Cost to Connect All Points", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/", difficulty: "Medium" },
          { title: "Optimize Water Distribution in a Village", url: "https://leetcode.com/problems/optimize-water-distribution-in-a-village/", difficulty: "Hard" },
          { title: "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree", url: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/", difficulty: "Hard" }
        ]
      },
      {
        name: "Bidirectional BFS (BFS optimization for known source & target)",
        description: "Use bidirectional BFS to find shortest path between specific source and target.",
        problems: [
          { title: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" },
          { title: "Word Ladder II", url: "https://leetcode.com/problems/word-ladder-ii/", difficulty: "Hard" },
          { title: "Bus Routes", url: "https://leetcode.com/problems/bus-routes/", difficulty: "Hard" }
        ]
      }
    ]
  },
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
          { title: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - 1D Array (Coin Change / Unbounded Knapsack Style)",
        description: "Solve coin change and unbounded knapsack problems using 1D DP.",
        problems: [
          { title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
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
          { title: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - 2D Array (Edit Distance / Levenshtein Distance)",
        description: "Calculate edit distance between strings using dynamic programming.",
        problems: [
          { title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - 2D Array (Unique Paths on Grid)",
        description: "Count unique paths and solve grid-based DP problems.",
        problems: [
          { title: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
          { title: "Unique Paths II", url: "https://leetcode.com/problems/unique-paths-ii/", difficulty: "Medium" },
          { title: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - Longest Increasing Subsequence (LIS)",
        description: "Find longest increasing subsequence and related optimization problems.",
        problems: [
          { title: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" }
        ]
      },
      {
        name: "DP - Stock problems",
        description: "Optimize stock trading strategies with various constraints.",
        problems: [
          { title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
          { title: "Best Time to Buy and Sell Stock II", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", difficulty: "Medium" }
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
          { title: "K Closest Points to Origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/", difficulty: "Medium" }
        ]
      },
      {
        name: "Heap - Two Heaps for Median Finding",
        description: "Use two heaps (max and min) to efficiently track running median.",
        problems: [
          { title: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" }
        ]
      },
      {
        name: "Heap - K-way Merge",
        description: "Merge K sorted arrays or lists efficiently using a heap.",
        problems: [
          { title: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" }
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
          { title: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
          { title: "Subsets II", url: "https://leetcode.com/problems/subsets-ii/", difficulty: "Medium" }
        ]
      },
      {
        name: "Backtracking - Permutations",
        description: "Generate all permutations of elements using backtracking.",
        problems: [
          { title: "Permutations", url: "https://leetcode.com/problems/permutations/", difficulty: "Medium" }
        ]
      },
      {
        name: "Backtracking - Combination Sum",
        description: "Find combinations that sum to target using backtracking with pruning.",
        problems: [
          { title: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" }
        ]
      },
      {
        name: "Backtracking - Parentheses Generation",
        description: "Generate valid parentheses combinations using constraint-based backtracking.",
        problems: [
          { title: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium" }
        ]
      },
      {
        name: "Backtracking - Word Search / Path Finding in Grid",
        description: "Search for words or paths in 2D grids using backtracking.",
        problems: [
          { title: "Word Search", url: "https://leetcode.com/problems/word-search/", difficulty: "Medium" }
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
          { title: "Insert Interval", url: "https://leetcode.com/problems/insert-interval/", difficulty: "Medium" }
        ]
      },
      {
        name: "Greedy - Jump Game Reachability/Minimization",
        description: "Solve jump game problems using greedy reachability analysis.",
        problems: [
          { title: "Jump Game", url: "https://leetcode.com/problems/jump-game/", difficulty: "Medium" },
          { title: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Medium" }
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
          { title: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
          { title: "Search Insert Position", url: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy" }
        ]
      },
      {
        name: "Binary Search - Find Min/Max in Rotated Sorted Array",
        description: "Handle rotated sorted arrays and find peaks using modified binary search.",
        problems: [
          { title: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
          { title: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" }
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
          { title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" }
        ]
      },
      {
        name: "Stack - Monotonic Stack",
        description: "Use monotonic stack to find next/previous greater/smaller elements.",
        problems: [
          { title: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" }
        ]
      },
      {
        name: "Stack - Min Stack Design",
        description: "Design specialized stack data structures with additional functionality.",
        problems: [
          { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" }
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
          { title: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" }
        ]
      },
      {
        name: "Linked List - Merging Two Sorted Lists",
        description: "Merge multiple sorted linked lists efficiently.",
        problems: [
          { title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" }
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
          { title: "Rotate Image", url: "https://leetcode.com/problems/rotate-image/", difficulty: "Medium" }
        ]
      },
      {
        name: "Array/Matrix - Spiral Traversal",
        description: "Traverse matrices in spiral order and generate spiral patterns.",
        problems: [
          { title: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/", difficulty: "Medium" }
        ]
      },
      {
        name: "Array - Product Except Self (Prefix/Suffix Products)",
        description: "Calculate products of all elements except self using prefix and suffix products.",
        problems: [
          { title: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" }
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
          { title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" }
        ]
      },
      {
        name: "String - Anagram Check (Frequency Count/Sort)",
        description: "Detect anagrams using character frequency counting or sorting.",
        problems: [
          { title: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
          { title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" }
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
          { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" }
        ]
      },
      {
        name: "Tries",
        description: "Implement and use Trie (Prefix Tree) data structure for string operations.",
        problems: [
          { title: "Implement Trie (Prefix Tree)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium" }
        ]
      }
    ]
  }
];

console.log('Seed data structure created, seeding database...');

let categoryOrder = 0;
seedData.forEach(catData => {
  categoryOrder++;
  const catResult = insertCategory(catData.category, categoryOrder);
  const categoryId = catResult.lastInsertRowid;
  
  let subcategoryOrder = 0;
  catData.subcategories.forEach(subData => {
    subcategoryOrder++;
    const subResult = insertSubcategory(
      categoryId,
      subData.name,
      subData.description,
      subcategoryOrder
    );
    const subcategoryId = subResult.lastInsertRowid;
    
    let problemOrder = 0;
    subData.problems.forEach(problem => {
      problemOrder++;
      insertProblem(
        subcategoryId,
        problem.title,
        problem.url,
        problem.difficulty,
        problemOrder
      );
    });
  });
  
  console.log(`✓ Seeded category: ${catData.category}`);
});

console.log('Database seeding completed successfully!');