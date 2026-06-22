// anti_slide.js

import { DIL_NC_STATE } from "./dilsizler-nc.js";
import { scanData } from "../../kiq/mock-scan.js";

document.getElementById("as-run").onclick = () => {

  const S = scanData.points[0];
  const O = scanData.points[1];
  const K = scanData.points[2];

  const nc = DIL_NC_STATE(S, O, K);

  // 3×3 Mapping
  const grid = {
    hit1: nc.angles.SO.toFixed(3),
    hit2: nc.angles.OK.toFixed(3),
    hit3: nc.angles.KS.toFixed(3),

    hit4: nc.sum.toFixed(3),
    hit5: nc.NC_valid,
    hit6: nc.base,

    hit7: S.x.toFixed(3),
    hit8: O.x.toFixed(3),
    hit9: K.x.toFixed(3)
  };

  document.getElementById("as-status").textContent =
    nc.NC_valid ? "NC stable (anti-slide active)" : "NC unstable (slide detected)";

  document.getElementById("as-nc").textContent =
    JSON.stringify(nc, null, 2);

  document.getElementById("as-grid").textContent =
    JSON.stringify(grid, null, 2);
};

