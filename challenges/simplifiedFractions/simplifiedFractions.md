@Challenges 711 - Simplified Fractions
Create a function that returns the simplified version of a fraction.

Examples
simplify("4/6") ➞ "2/3"

simplify("10/11") ➞ "10/11"

simplify("100/400") ➞ "1/4"

simplify("8/4") ➞ "2"

Notes
A fraction is simplified if there are no common factors (except 1) between the numerator and the denominator. For example, 4/6 is not simplified, since 4 and 6 both share 2 as a factor.
If improper fractions can be transformed into integers, do so in your code.

Instructions & Tests
You can find more detailed instructions and a series of tests you can use to make sure your code works here on GitHub https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_711.md

Challenge Tests
Here are a series of tests in JSON format that you can use to test your code. Each object in the JSON array has a key args that are a list of parameters your function should take. The return key is what your function should return given the args.

If you're writing your solution in Python you can also use the beginner.codes Python package to automate testing your solution. Install it with pip install beginner.codes, then create a file for your solution and use the following code:

from __future__ import annotations
from beginnercodes.challenges import test


def simplify(fraction: str) -> str:
    return ""  # Put your code here!!!


test(711, simplify)  # Tell it which challenge to test against
And here's the JSON.

[
    {
        "args": [
            "7/4"
        ],
        "return": "7/4"
    },
    {
        "args": [
            "50/25"
        ],
        "return": "2"
    },
    {
        "args": [
            "5/7"
        ],
        "return": "5/7"
    },
    {
        "args": [
            "5/45"
        ],
        "return": "1/9"
    },
    {
        "args": [
            "6/4"
        ],
        "return": "3/2"
    }
]

KEEP IN MIND, not all tests that will be used are included.

Submissions
Put all submissions in ⁠Beginner.Codes⁠📝weekday-submissions
If you put code don't format just put it inside of spoiler tags (ex. ||`your code`||)
If you link to an approved code file host don't use spoiler tags

If you haven't already, hit the 🔔 to be notified of future challenges!!
GitHub
challenges/weekday/challenge_711.md at main · beginner-codes/challe...