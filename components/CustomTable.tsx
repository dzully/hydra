import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import sampleData from "./../public/client.json";
import { parse, format } from 'date-fns';
import { enGB } from 'date-fns/locale';


// console.log(formattedDate);

interface Data {
  id: string;
  name: string;
  policy_number: string;
  total_claim: string;
  start_coverage_period: any;
  end_coverage_period: any;
}

// function createData(
//   id: number,
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ): Data {
//   return {
//     id,
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     policy_number,
//   }
// }

// const rows = [
//   createData(uuidv4(), 'Cupcake', 305, 3.7, 67, 4.3),
//   createData(uuidv4(), 'Donut', 452, 25.0, 51, 4.9),
//   createData(uuidv4(), 'Eclair', 262, 16.0, 24, 6.0),
//   createData(uuidv4(), 'Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData(uuidv4(), 'Gingerbread', 356, 16.0, 49, 3.9),
//   createData(uuidv4(), 'Honeycomb', 408, 3.2, 87, 6.5),
//   createData(uuidv4(), 'Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData(uuidv4(), 'Jelly Bean', 375, 0.0, 94, 0.0),
//   createData(uuidv4(), 'KitKat', 518, 26.0, 65, 7.0),
//   createData(uuidv4(), 'Lollipop', 392, 0.2, 98, 0.0),
//   createData(uuidv4(), 'Marshmallow', 318, 0, 81, 2.0),
//   createData(uuidv4(), 'Nougat', 360, 19.0, 9, 37.0),
//   createData(uuidv4(), 'Oreo', 437, 18.0, 63, 4.0),
// ]

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Client Name",
  },
  {
    id: "policy_number",
    numeric: false,
    disablePadding: false,
    label: "Policy Number",
  },
  {
    id: "start_coverage_period",
    numeric: false,
    disablePadding: false,
    label: "Coverage Period",
  },
  {
    id: "total_claim",
    numeric: false,
    disablePadding: false,
    label: "Total Claim",
  },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface CustomTableProps {
  handleSelected?: (userId: string) => void;
}

const CustomTable = ({ handleSelected }: CustomTableProps) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("policy_number");
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const onHandleSelected = (userId: string) => () => {
    if (handleSelected) handleSelected(userId);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sampleData.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper elevation={0} sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={sampleData.length}
            />
            <TableBody>
              {stableSort(sampleData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={onHandleSelected(row.id)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.policy_number}</TableCell>
                      <TableCell align="left">
                        {format(parse(row.start_coverage_period, 'P', new Date(), { locale: enGB }),  'do MMMM yyyy')} - {format(parse(row.end_coverage_period, 'P', new Date(), { locale: enGB }),  'do MMMM yyyy')}
                      </TableCell>
                      <TableCell align="left">{row.total_claim}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sampleData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default CustomTable;
