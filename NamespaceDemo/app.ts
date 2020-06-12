/// <reference path="utility-functions.ts" />

const res = Utility.maxBooksAllowed(30);
console.log(res);

import util = Utility.Fees;
const res2 = util.calculateLateFee(90);
console.log(res2);