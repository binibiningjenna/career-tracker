import { useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Menu, MenuItem, Select, MenuItem as SelectItem } from "@mui/material";
import { EllipsisVerticalIcon, EyeIcon, PencilSquareIcon, TrashIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Button from "../components/Button.jsx";

const fakeData = [
  { id: 1, company: "Google", position: "Frontend Developer", status: "Pending", date: "2025-11-13", jobLink: "https://careers.google.com/" },
  { id: 2, company: "Facebook", position: "Backend Developer", status: "Interview", date: "2025-11-10", jobLink: "https://www.facebook.com/careers/" },
  { id: 3, company: "Amazon", position: "QA Engineer", status: "Hired", date: "2025-11-08", jobLink: "https://www.amazon.jobs/" },
];

export default function Application() {
  const [rowMenu, setRowMenu] = useState({ open: false, id: null, anchorEl: null });
  const [selectedRows, setSelectedRows] = useState({});

  const handleRowMenuOpen = (event, rowId) => setRowMenu({ open: true, id: rowId, anchorEl: event.currentTarget });
  const handleRowMenuClose = () => setRowMenu({ open: false, id: null, anchorEl: null });

  const columns = useMemo(
    () => [
      { accessorKey: "company", header: "Company" },
      { accessorKey: "position", header: "Position" },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => (
          <Select value={cell.getValue()} size="small" sx={{ minWidth: 120, borderRadius: "8px" }}>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Interview">Interview</SelectItem>
            <SelectItem value="Hired">Hired</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </Select>
        ),
      },
      {
        accessorKey: "date",
        header: "Date",
        Cell: ({ cell, row, table }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dayjs(cell.getValue())}
              onChange={(newValue) => {
                table.setEditingCellValue({
                  id: row.id,
                  columnId: "date",
                  value: newValue.format("YYYY-MM-DD"),
                });
              }}
              slotProps={{
                textField: { size: "small", sx: { borderRadius: "8px" } },
              }}
            />
          </LocalizationProvider>
        ),
      },
      {
        accessorKey: "jobLink",
        header: "Job Link",
        Cell: ({ cell }) => (
          <a href={cell.getValue()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
            <span>View</span>
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        size: 80,
        enableColumnActions: false,
        enableSorting: false,
        Cell: ({ row }) => (
          <div>
            <IconButton onClick={(e) => handleRowMenuOpen(e, row.id)}>
              <EllipsisVerticalIcon className="h-5 w-5" />
            </IconButton>
            <Menu anchorEl={rowMenu.anchorEl} open={rowMenu.open && rowMenu.id === row.id} onClose={handleRowMenuClose}>
              <MenuItem onClick={handleRowMenuClose} className="text-blue-600 hover:bg-blue-50">
                <EyeIcon className="h-4 w-4 mr-2 text-blue-500" /> View
              </MenuItem>
              <MenuItem onClick={handleRowMenuClose} className="text-amber-600 hover:bg-amber-50">
                <PencilSquareIcon className="h-4 w-4 mr-2 text-amber-500" /> Edit
              </MenuItem>
              <MenuItem onClick={handleRowMenuClose} className="text-red-600 hover:bg-red-50">
                <TrashIcon className="h-4 w-4 mr-2 text-red-500" /> Delete
              </MenuItem>
            </Menu>
          </div>
        ),
      },
    ],
    [rowMenu]
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 pt-8 sm:pt-8 mt-2 sm:mt-8 max-w-7xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pb-1 sm:pb-2 inline-block">Job Applications</h1>
        <div className="w-16 border-b-2 border-gray-300 mb-5"></div>

        <div className="pt-4 sm:pt-8">
          <MaterialReactTable
            columns={columns}
            data={fakeData}
            enableRowSelection
            enableRowActions={false}
            onRowSelectionChange={setSelectedRows}
            state={{ rowSelection: selectedRows }}
            renderTopToolbarCustomActions={() => (
              <Box className="flex gap-4 items-center m-3">
                {Object.keys(selectedRows).length > 0 && <Button className="shadow hover:shadow-lg bg-red-500 text-white">Delete ({Object.keys(selectedRows).length})</Button>}
                <Button className="shadow hover:shadow-lg">Add New</Button>
              </Box>
            )}
            muiTablePaperProps={{
              elevation: 1,
              sx: { borderRadius: "16px", overflow: "hidden" },
            }}
            muiTableBodyRowProps={{
              sx: {
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "box-shadow 0.2s ease-in-out",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
