import React from 'react'
import { GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid'
import { Box } from '@mui/material'

function DataGridToolbar() {
  return (
    <Box display="flex" gap={5} margin={1}>
        <GridToolbarExport/>
        <GridToolbarFilterButton/>
        <GridToolbarQuickFilter/>
    </Box>
  )
}

export default DataGridToolbar