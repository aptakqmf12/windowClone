import { Box, Grid, Typography } from "@mui/material";
import { Apps } from "@mui/icons-material";

import { useState } from "react";

enum TabMenu {
  TODO,
  MEMO,
  WORKER,
}

export default function PackageCenter() {
  const [tab, setTab] = useState<TabMenu | undefined>();

  const FIXED_TABS = [
    {
      name: "todo",
      type: TabMenu.TODO,
    },

    {
      name: "MEMO",
      type: TabMenu.MEMO,
    },

    {
      name: "WORKER",
      type: TabMenu.WORKER,
    },
  ];

  return (
    <div>
      <div>
        {FIXED_TABS.map((tab, i) => (
          <div onClick={() => setTab(tab.type)} key={i}>
            {tab.name}
          </div>
        ))}
      </div>

      <div className="component">
        {tab === TabMenu.TODO ? (
          <div>todo</div>
        ) : tab === TabMenu.MEMO ? (
          <div>memo</div>
        ) : (
          <div>worker</div>
        )}
      </div>

      <Apps color="info" sx={{ width: 66, height: 66 }} />
    </div>
  );
}
