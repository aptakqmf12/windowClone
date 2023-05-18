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
  Button,
  Typography,
  Pagination,
  Divider,
} from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Search, PostAdd, HelpCenter } from "@mui/icons-material";

import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styled from "styled-components";
import SelectForm from "@components/common/SelectForm";
import { getMuiThemes } from "@style/theme";
import { color } from "framer-motion";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.colors.primary}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
export default function Help() {
  const [recommanedKeyword, setRecommanedKeyword] = useState<string>("");
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div.wrap>
      <div.title>
        <HelpCenter sx={{ width: 52, height: 52 }} color="primary" />
        <Typography>도움말</Typography>
      </div.title>

      <div>
        <div.search>
          <div.input>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: 40,
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Search />
              </IconButton>

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>

            <Button variant="contained" size="small" sx={{ paddingX: 3 }}>
              검색
            </Button>
          </div.input>

          <div.chips>
            <Typography color="primary">자주 찾는 도움말</Typography>
            <Divider orientation="vertical" className="divider" />
            {Array.from({ length: 12 }, (v, i) => `검색어 ${i}`).map(
              (data, i) => (
                // <Chip label={data} onDelete={() => {}} key={i} />
                <Button variant="contained" size="small">
                  {data}
                </Button>
              )
            )}
          </div.chips>
        </div.search>
      </div>
      <div.accodians>
        {Array.from({ length: 4 }, (v, i) => `Q. 질문 ${i}`).map((data, i) => (
          <Accordion expanded={expanded === data} onChange={handleChange(data)}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              {data}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>A. 여기있어요!</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div.accodians>
      <div.pagination>
        <Pagination count={10} color="primary" />
      </div.pagination>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 50px;
  `,

  title: styled.div`
    margin-bottom: 20px;
  `,
  search: styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
    flex-direction: column;
  `,
  input: styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
  `,
  chips: styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;

    .divider {
      border-width: 1px;
      border-color: ${(p) => p.theme.colors.primary.main};
      height: auto;
    }
  `,

  table: styled.div`
    margin-bottom: 20px;
  `,
  pagination: styled.div`
    display: flex;
    align-items: center;
  `,
  accodians: styled.div`
    width: 100%;

    .MuiAccordionDetails-root {
      padding-left: 4%;
    }

    .Mui-expanded {
      color: ${(p) => p.theme.colors.primary.main};
      font-weight: 500;
    }
  `,
};
