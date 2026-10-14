import * as React from "react";

import {
  Table,
  TableCaption,
  TableColgroup,
  TableColumn,
  TableFooter,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@radix-ui/react-table";

import { cn } from "@/lib/utils";

export const TableRoot = React.forwardRef<
  HTMLTableElement,
  React.ComponentPropsWithoutRef<typeof Table>
>(({ className, ...props }, ref) => (
  <Table
    ref={ref}
    className={cn(
      "w-full text-sm border-separate",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
TableRoot.displayName = Table.displayName;

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.ComponentPropsWithoutRef<typeof TableCaption>
>(({ className, ...props }, ref) => (
  <TableCaption
    ref={ref}
    className={cn(
      "mb-2 text-sm font-medium text-muted-foreground",
      className
    )}
    {...props}
  />
));
TableCaption.displayName = TableCaption.displayName;

export const TableColgroup = React.forwardRef<
  HTMLTableColElement,
  React.ComponentPropsWithoutRef<typeof TableColgroup>
>(({ className, ...props }, ref) => (
  <TableColgroup
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
TableColgroup.displayName = TableColgroup.displayName;

export const TableColumn = React.forwardRef<
  HTMLTableColElement,
  React.ComponentPropsWithoutRef<typeof TableColumn>
>(({ className, ...props }, ref) => (
  <TableColumn
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
TableColumn.displayName = TableColumn.displayName;

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithoutRef<typeof TableHeader>
>(({ className, ...props }, ref) => (
  <TableHeader
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
TableHeader.displayName = TableHeader.displayName;

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithoutRef<typeof TableBody>
>(({ className, ...props }, ref) => (
  <TableBody
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
TableBody.displayName = TableBody.displayName;

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithoutRef<typeof TableFooter>
>(({ className, ...props }, ref) => (
  <TableFooter
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
TableFooter.displayName = TableFooter.displayName;

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentPropsWithoutRef<typeof TableRow>
>(({ className, ...props }, ref) => (
  <TableRow
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
TableRow.displayName = TableRow.displayName;

export const TableCell = React.forwardRef<
  HTMLTableDataCellElement,
  React.ComponentPropsWithoutRef<typeof TableCell>
>(({ className, ...props }, ref) => (
  <TableCell
    ref={ref}
    className={cn(
      "p-4 text-left align-middle border-b",
      className
    )}
    {...props}
  />
));
TableCell.displayName = TableCell.displayName;

export const Table = Object.assign(TableRoot, {
  Caption: TableCaption,
  Colgroup: TableColgroup,
  Column: TableColumn,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Cell: TableCell,
});
