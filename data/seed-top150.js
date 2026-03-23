import {
  initializeDatabase,
  insertStudyPlan,
  getStudyPlanBySlug,
  insertStudyPlanSection,
  getStudyPlanSection,
  insertStudyPlanItem,
  findProblemByUrl,
  addProblemWithPlacement
} from '../server/db.js';

initializeDatabase();

console.log('Seeding Top Interview 150 study plan...');

const top150Data = [
  {
    section: "Array / String",
    problems: [
      { title: "Merge Sorted Array", url: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Easy" },
      { title: "Remove Element", url: "https://leetcode.com/problems/remove-element/", difficulty: "Easy" },
      { title: "Remove Duplicates from Sorted Array", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy" },
      { title: "Remove Duplicates from Sorted Array II", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/", difficulty: "Medium" },
      { title: "Majority Element", url: "https://leetcode.com/problems/majority-element/", difficulty: "Easy" },
      { title: "Rotate Array", url: "https://leetcode.com/problems/rotate-array/", difficulty: "Medium" },
      { title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
      { title: "Best Time to Buy and Sell Stock II", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", difficulty: "Medium" },
      { title: "Jump Game", url: "https://leetcode.com/problems/jump-game/", difficulty: "Medium" },
      { title: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Medium" },
      { title: "H-Index", url: "https://leetcode.com/problems/h-index/", difficulty: "Medium" },
      { title: "Insert Delete GetRandom O(1)", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/", difficulty: "Medium" },
      { title: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
      { title: "Gas Station", url: "https://leetcode.com/problems/gas-station/", difficulty: "Medium" },
      { title: "Candy", url: "https://leetcode.com/problems/candy/", difficulty: "Hard" },
      { title: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
      { title: "Roman to Integer", url: "https://leetcode.com/problems/roman-to-integer/", difficulty: "Easy" },
      { title: "Integer to Roman", url: "https://leetcode.com/problems/integer-to-roman/", difficulty: "Medium" },
      { title: "Length of Last Word", url: "https://leetcode.com/problems/length-of-last-word/", difficulty: "Easy" },
      { title: "Longest Common Prefix", url: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy" },
      { title: "Reverse Words in a String", url: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Medium" },
      { title: "Zigzag Conversion", url: "https://leetcode.com/problems/zigzag-conversion/", difficulty: "Medium" },
      { title: "Find the Index of the First Occurrence in a String", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", difficulty: "Easy" },
      { title: "Text Justification", url: "https://leetcode.com/problems/text-justification/", difficulty: "Hard" }
    ]
  },
  {
    section: "Two Pointers",
    problems: [
      { title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
      { title: "Is Subsequence", url: "https://leetcode.com/problems/is-subsequence/", difficulty: "Easy" },
      { title: "Two Sum II - Input Array Is Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", difficulty: "Medium" },
      { title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
      { title: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" }
    ]
  },
  {
    section: "Sliding Window",
    problems: [
      { title: "Minimum Size Subarray Sum", url: "https://leetcode.com/problems/minimum-size-subarray-sum/", difficulty: "Medium" },
      { title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
      { title: "Substring with Concatenation of All Words", url: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/", difficulty: "Hard" },
      { title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" }
    ]
  },
  {
    section: "Matrix",
    problems: [
      { title: "Valid Sudoku", url: "https://leetcode.com/problems/valid-sudoku/", difficulty: "Medium" },
      { title: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/", difficulty: "Medium" },
      { title: "Rotate Image", url: "https://leetcode.com/problems/rotate-image/", difficulty: "Medium" },
      { title: "Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/", difficulty: "Medium" },
      { title: "Game of Life", url: "https://leetcode.com/problems/game-of-life/", difficulty: "Medium" }
    ]
  },
  {
    section: "Hashmap",
    problems: [
      { title: "Ransom Note", url: "https://leetcode.com/problems/ransom-note/", difficulty: "Easy" },
      { title: "Isomorphic Strings", url: "https://leetcode.com/problems/isomorphic-strings/", difficulty: "Easy" },
      { title: "Word Pattern", url: "https://leetcode.com/problems/word-pattern/", difficulty: "Easy" },
      { title: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
      { title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
      { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
      { title: "Happy Number", url: "https://leetcode.com/problems/happy-number/", difficulty: "Easy" },
      { title: "Contains Duplicate II", url: "https://leetcode.com/problems/contains-duplicate-ii/", difficulty: "Easy" },
      { title: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" }
    ]
  },
  {
    section: "Intervals",
    problems: [
      { title: "Summary Ranges", url: "https://leetcode.com/problems/summary-ranges/", difficulty: "Easy" },
      { title: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
      { title: "Insert Interval", url: "https://leetcode.com/problems/insert-interval/", difficulty: "Medium" },
      { title: "Minimum Number of Arrows to Burst Balloons", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", difficulty: "Medium" }
    ]
  },
  {
    section: "Stack",
    problems: [
      { title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
      { title: "Simplify Path", url: "https://leetcode.com/problems/simplify-path/", difficulty: "Medium" },
      { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
      { title: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" },
      { title: "Basic Calculator", url: "https://leetcode.com/problems/basic-calculator/", difficulty: "Hard" }
    ]
  },
  {
    section: "Linked List",
    problems: [
      { title: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
      { title: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" },
      { title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
      { title: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" },
      { title: "Reverse Linked List II", url: "https://leetcode.com/problems/reverse-linked-list-ii/", difficulty: "Medium" },
      { title: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
      { title: "Remove Nth Node From End of List", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
      { title: "Remove Duplicates from Sorted List II", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/", difficulty: "Medium" },
      { title: "Rotate List", url: "https://leetcode.com/problems/rotate-list/", difficulty: "Medium" },
      { title: "Partition List", url: "https://leetcode.com/problems/partition-list/", difficulty: "Medium" },
      { title: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" }
    ]
  },
  {
    section: "Binary Tree General",
    problems: [
      { title: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
      { title: "Same Tree", url: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
      { title: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
      { title: "Symmetric Tree", url: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
      { title: "Construct Binary Tree from Preorder and Inorder Traversal", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Medium" },
      { title: "Construct Binary Tree from Inorder and Postorder Traversal", url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", difficulty: "Medium" },
      { title: "Populating Next Right Pointers in Each Node II", url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/", difficulty: "Medium" },
      { title: "Flatten Binary Tree to Linked List", url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "Medium" },
      { title: "Path Sum", url: "https://leetcode.com/problems/path-sum/", difficulty: "Easy" },
      { title: "Sum Root to Leaf Numbers", url: "https://leetcode.com/problems/sum-root-to-leaf-numbers/", difficulty: "Medium" },
      { title: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
      { title: "Binary Search Tree Iterator", url: "https://leetcode.com/problems/binary-search-tree-iterator/", difficulty: "Medium" },
      { title: "Count Complete Tree Nodes", url: "https://leetcode.com/problems/count-complete-tree-nodes/", difficulty: "Easy" },
      { title: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" }
    ]
  },
  {
    section: "Binary Tree BFS",
    problems: [
      { title: "Binary Tree Right Side View", url: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Medium" },
      { title: "Average of Levels in Binary Tree", url: "https://leetcode.com/problems/average-of-levels-in-binary-tree/", difficulty: "Easy" },
      { title: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
      { title: "Binary Tree Zigzag Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium" }
    ]
  },
  {
    section: "Binary Search Tree",
    problems: [
      { title: "Minimum Absolute Difference in BST", url: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/", difficulty: "Easy" },
      { title: "Kth Smallest Element in a BST", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Medium" },
      { title: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" }
    ]
  },
  {
    section: "Graph General",
    problems: [
      { title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
      { title: "Surrounded Regions", url: "https://leetcode.com/problems/surrounded-regions/", difficulty: "Medium" },
      { title: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
      { title: "Evaluate Division", url: "https://leetcode.com/problems/evaluate-division/", difficulty: "Medium" },
      { title: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
      { title: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Medium" }
    ]
  },
  {
    section: "Graph BFS",
    problems: [
      { title: "Snakes and Ladders", url: "https://leetcode.com/problems/snakes-and-ladders/", difficulty: "Medium" },
      { title: "Minimum Genetic Mutation", url: "https://leetcode.com/problems/minimum-genetic-mutation/", difficulty: "Medium" },
      { title: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" }
    ]
  },
  {
    section: "Trie",
    problems: [
      { title: "Implement Trie (Prefix Tree)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium" },
      { title: "Design Add and Search Words Data Structure", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", difficulty: "Medium" },
      { title: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" }
    ]
  },
  {
    section: "Backtracking",
    problems: [
      { title: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium" },
      { title: "Combinations", url: "https://leetcode.com/problems/combinations/", difficulty: "Medium" },
      { title: "Permutations", url: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
      { title: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
      { title: "N-Queens II", url: "https://leetcode.com/problems/n-queens-ii/", difficulty: "Hard" },
      { title: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium" },
      { title: "Word Search", url: "https://leetcode.com/problems/word-search/", difficulty: "Medium" }
    ]
  },
  {
    section: "Divide & Conquer",
    problems: [
      { title: "Convert Sorted Array to Binary Search Tree", url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", difficulty: "Easy" },
      { title: "Sort List", url: "https://leetcode.com/problems/sort-list/", difficulty: "Medium" },
      { title: "Construct Quad Tree", url: "https://leetcode.com/problems/construct-quad-tree/", difficulty: "Medium" },
      { title: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" }
    ]
  },
  {
    section: "Kadane's Algorithm",
    problems: [
      { title: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium" },
      { title: "Maximum Sum Circular Subarray", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/", difficulty: "Medium" }
    ]
  },
  {
    section: "Binary Search",
    problems: [
      { title: "Search Insert Position", url: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy" },
      { title: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Medium" },
      { title: "Find Peak Element", url: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium" },
      { title: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
      { title: "Find First and Last Position of Element in Sorted Array", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium" },
      { title: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
      { title: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" }
    ]
  },
  {
    section: "Heap",
    problems: [
      { title: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
      { title: "IPO", url: "https://leetcode.com/problems/ipo/", difficulty: "Hard" },
      { title: "Find K Pairs with Smallest Sums", url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", difficulty: "Medium" },
      { title: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" }
    ]
  },
  {
    section: "Bit Manipulation",
    problems: [
      { title: "Add Binary", url: "https://leetcode.com/problems/add-binary/", difficulty: "Easy" },
      { title: "Reverse Bits", url: "https://leetcode.com/problems/reverse-bits/", difficulty: "Easy" },
      { title: "Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/", difficulty: "Easy" },
      { title: "Single Number", url: "https://leetcode.com/problems/single-number/", difficulty: "Easy" },
      { title: "Single Number II", url: "https://leetcode.com/problems/single-number-ii/", difficulty: "Medium" },
      { title: "Bitwise AND of Numbers Range", url: "https://leetcode.com/problems/bitwise-and-of-numbers-range/", difficulty: "Medium" }
    ]
  },
  {
    section: "Math",
    problems: [
      { title: "Palindrome Number", url: "https://leetcode.com/problems/palindrome-number/", difficulty: "Easy" },
      { title: "Plus One", url: "https://leetcode.com/problems/plus-one/", difficulty: "Easy" },
      { title: "Factorial Trailing Zeroes", url: "https://leetcode.com/problems/factorial-trailing-zeroes/", difficulty: "Medium" },
      { title: "Sqrt(x)", url: "https://leetcode.com/problems/sqrtx/", difficulty: "Easy" },
      { title: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/", difficulty: "Medium" },
      { title: "Max Points on a Line", url: "https://leetcode.com/problems/max-points-on-a-line/", difficulty: "Hard" }
    ]
  },
  {
    section: "1D Dynamic Programming",
    problems: [
      { title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
      { title: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
      { title: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
      { title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
      { title: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" }
    ]
  },
  {
    section: "Multidimensional DP",
    problems: [
      { title: "Triangle", url: "https://leetcode.com/problems/triangle/", difficulty: "Medium" },
      { title: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/", difficulty: "Medium" },
      { title: "Unique Paths II", url: "https://leetcode.com/problems/unique-paths-ii/", difficulty: "Medium" },
      { title: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium" },
      { title: "Interleaving String", url: "https://leetcode.com/problems/interleaving-string/", difficulty: "Medium" },
      { title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" },
      { title: "Best Time to Buy and Sell Stock III", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", difficulty: "Hard" },
      { title: "Best Time to Buy and Sell Stock IV", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", difficulty: "Hard" }
    ]
  }
];

// Create the study plan
insertStudyPlan(
  'Top Interview 150',
  'top-interview-150',
  'The most frequently asked 150 LeetCode problems in technical interviews at top tech companies.'
);

const plan = getStudyPlanBySlug('top-interview-150');
if (!plan) {
  console.error('Failed to create study plan');
  process.exit(1);
}

let totalProblems = 0;
let newProblems = 0;
let linkedProblems = 0;

top150Data.forEach((section, sectionIndex) => {
  insertStudyPlanSection(plan.id, section.section, sectionIndex);
  const sectionRow = getStudyPlanSection(plan.id, section.section);

  if (!sectionRow) {
    console.error(`Failed to create section: ${section.section}`);
    return;
  }

  section.problems.forEach((problem, problemIndex) => {
    totalProblems++;

    // Try to find existing problem by URL first
    let existingProblem = findProblemByUrl(problem.url);

    if (!existingProblem) {
      // Create the problem in a default "Top Interview 150" category
      const result = addProblemWithPlacement({
        title: problem.title,
        leetcodeUrl: problem.url,
        difficulty: problem.difficulty,
        categoryId: null,
        categoryName: 'Top Interview 150',
        subcategoryId: null,
        subcategoryName: section.section
      });
      existingProblem = { id: result.id };
      newProblems++;
    } else {
      linkedProblems++;
    }

    insertStudyPlanItem(sectionRow.id, existingProblem.id, problemIndex);
  });
});

console.log(`\nSeeding complete!`);
console.log(`Total problems: ${totalProblems}`);
console.log(`Linked to existing: ${linkedProblems}`);
console.log(`Newly created: ${newProblems}`);
