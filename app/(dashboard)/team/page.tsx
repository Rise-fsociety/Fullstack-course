'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_SortingState,
  type MRT_RowVirtualizer,
} from 'material-react-table';
import { makeData, type Person } from './makeData';

export default function Page() {
  /* ================= COLUMNS ================= */

  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => [
    { accessorKey: 'firstName', header: 'First Name' },
    { accessorKey: 'middleName', header: 'Middle Name' },
    { accessorKey: 'lastName', header: 'Last Name' },
    { accessorKey: 'email', header: 'Email Address' },
    { accessorKey: 'phoneNumber', header: 'Phone Number' },
    { accessorKey: 'address', header: 'Address' },
    { accessorKey: 'zipCode', header: 'Zip Code' },
    { accessorKey: 'city', header: 'City' },
    { accessorKey: 'state', header: 'State' },
    { accessorKey: 'country', header: 'Country' },
    { accessorKey: 'petName', header: 'Pet Name' },
    { accessorKey: 'age', header: 'Age' },
    { accessorKey: 'salary', header: 'Salary' },
    { accessorKey: 'dateOfBirth', header: 'Date of Birth' },
    { accessorKey: 'dateOfJoining', header: 'Date of Joining' },
    { accessorKey: 'isActive', header: 'Is Active' },
  ], []);

  /* ================= STATE ================= */

  const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  /* ================= DISABLE PAGE SCROLL ================= */

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  /* ================= LOAD DATA ================= */

  useEffect(() => {
    setData(makeData(100));
    setIsLoading(false);
  }, []);

  /* ================= RESET SCROLL ON SORT ================= */

  useEffect(() => {
    rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
  }, [sorting]);

  /* ================= TABLE ================= */

  const table = useMaterialReactTable({
    columns,
    data,

    enablePagination: true,
     enableBottomToolbar: true,
     positionPagination: 'bottom',
    enableColumnResizing: true,
    enableColumnPinning: true,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableRowNumbers: true,
    enableGlobalFilterModes: true,

   muiTableContainerProps: {
  sx: {
    height: 'calc(100vh - 200px)', // 🔥 авто под каждый экран
    overflowY: 'auto',
  },
},

    initialState: {
      pagination: {
        pageSize: 50,
        pageIndex: 0,
      },
    },

    muiPaginationProps: {
      rowsPerPageOptions: [25, 50],
      showFirstButton: true,
      showLastButton: true,
      showRowsPerPage: true
    },
    

    state: { isLoading, sorting },
    onSortingChange: setSorting,
  });

  /* ================= RENDER ================= */

  return (
    <div >
      <MaterialReactTable table={table} />
    </div>
  );
}
