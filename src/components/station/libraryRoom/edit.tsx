import { Button } from "@mui/material";
import React from "react";

interface LibraryRoomEditProps {
  goBack: () => void;
}

export default function LibraryRoomEdit({ goBack }: LibraryRoomEditProps) {
  return (
    <div>
      <Button onClick={goBack}>목록</Button>
    </div>
  );
}
