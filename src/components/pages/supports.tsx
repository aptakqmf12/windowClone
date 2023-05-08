import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  InputBase,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  Tabs,
  Tab,
} from "@mui/material";
import { Margin, Search } from "@mui/icons-material";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { color } from "framer-motion";
interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
function createData(name: string) {
  return {
    name,

    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          component="th"
          scope="row"
          align="left"
          onClick={() => setOpen(!open)}
        >
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];

export default function Supports() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} rowSpacing={2} sx={{ padding: "3%" }}>
      <Grid item md={12} display={"flex"} alignItems={"center"}>
        <Search color="info" sx={{ width: 55, height: 55 }} />
        <Typography variant="h5" fontWeight={500} ml={2}>
          도움말
        </Typography>
      </Grid>

      <Grid
        item
        md={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography variant="h6" component="h6">
          무엇을 도와드릴까요?
        </Typography>
        <FormControl
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
          size="medium"
          variant="outlined"
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, width: "80%" }}
              placeholder="궁금한점을 찾아보세요."
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </FormControl>
      </Grid>
      <Grid
        item
        md={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <div style={{ height: 400, width: "80%" }}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="nav tabs example"
                    >
                      <LinkTab label="자주 묻는 질문" href="/drafts" />
                      <LinkTab label="Page Two" href="/trash" />
                      <LinkTab label="Page Three" href="/spam" />
                    </Tabs>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
    </Grid>
  );
}
