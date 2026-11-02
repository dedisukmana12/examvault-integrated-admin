// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const tpGanjil = [1, 2, 3, 4, 5];
const totalWeeks = 16;
let weeksAssigned = tpGanjil.map(() => Math.floor(totalWeeks / tpGanjil.length));
let remainder = totalWeeks % tpGanjil.length;
for (let i=0; i<remainder; i++) weeksAssigned[i]++;
console.log(weeksAssigned);
