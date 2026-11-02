// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CURRICULUM_DATABASE } from "./src/data/curriculumDatabase.js";

console.log("Total datasets:", CURRICULUM_DATABASE.length);
let missing = 0;
CURRICULUM_DATABASE.forEach(ds => {
    if (!ds.elemenList) {
        missing++;
        console.log("Missing elemenList in:", ds.mapel, ds.fase);
    }
});
console.log("Missing elemenList:", missing);
