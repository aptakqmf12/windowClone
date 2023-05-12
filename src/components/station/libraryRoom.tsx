import { useState } from "react";
import {
  Paper,
  IconButton,
  Input,
  InputBase,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Chip,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import styled from "styled-components";

enum FilterType {
  ALL,
  FORDER,
  FILE,
}

export default function LibraryRoom() {
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);
  return (
    <div.wrap>
      <FormControl sx={{ width: 80 }}>
        <Select
          labelId="demo-simple-select-label"
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterType)}
          size="small"
        >
          <MenuItem value={FilterType.ALL}>전체</MenuItem>
          <MenuItem value={FilterType.FORDER}>폴더</MenuItem>
          <MenuItem value={FilterType.FILE}>파일</MenuItem>
        </Select>
      </FormControl>

      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="검색어를 입력해주세요"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
      </Paper>

      <div.chips>
        {Array.from({ length: 4 }, (v, i) => `자료 ${i}`).map((data, i) => (
          <Chip label={data} onDelete={() => {}} key={i} />
        ))}
      </div.chips>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 50px;
  `,

  chips: styled.div`
    display: flex;
    gap: 10px;
  `,
};
