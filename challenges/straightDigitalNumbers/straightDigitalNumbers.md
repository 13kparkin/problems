@Challenges 713 - Straight Digital Numbers
In this challenge, you have to establish if the digits of a given number form a straight arithmetic sequence (either increasing or decreasing). A straight sequence has an equal step between every pair of digits.

Given an integer, implement a function that returns:

-1 if the number is lower than 100 or if its digits are not an arithmetic sequence.
0 if the number has a single repeating digit.
An integer being the absolute value of the step of the sequence if the number's digits are a straight arithmetic sequence.

Examples
straight_digital(123) ➞ 1
# 2 - 1 = 1 | 3 - 2 = 1

straight_digital(753) ➞ 2
# 5 - 7 = -2 | 3 - 5 = -2

straight_digital(666) ➞ 0

straight_digital(124) ➞ -1
# 2 - 1 = 1 | 4 - 2 = 2
# A valid sequence has always the same step between its digits.

straight_digital(99) ➞ -1
# The number is lower than 100.

Notes
The step of the sequence can be either positive or negative.

Instructions & Tests
You can find more detailed instructions and a series of tests you can use to make sure your code works here on GitHub https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_713.md

KEEP IN MIND, not all tests that will be used are included.

Submissions
Put all submissions in ⁠Beginner.Codes⁠📝weekday-submissions
If you put code don't format just put it inside of spoiler tags (ex. ||`your code`||)
If you link to an approved code file host don't use spoiler tags

If you haven't already, hit the 🔔 to be notified of future challenges!!