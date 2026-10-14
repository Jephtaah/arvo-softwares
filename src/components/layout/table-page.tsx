import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export const TablePage = ({
  title,
  description,
  columns,
  data,
  onItemAction,
  currentPage = 1,
  itemsPerPage = 10,
  totalItems,
}: {
  title: string;
  description?: string;
  columns: Array<{ key: string; label: string }>;
  data: Array<any>;
  onItemAction?: (item: any, action: string) => void;
  currentPage?: number;
  itemsPerPage?: number;
  totalItems: number;
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-4">
        <Card className="w-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            {description && (
              <CardDescription className="text-muted-foreground mt-2">
                {description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  {columns.map((col) => (
                    <TableHeader key={col.key}>{col.label}</TableHeader>
                  ))}
                  <TableHeader key="actions">Actions</TableHeader>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((item, index) => (
                  <TableRow key={index}>
                    {columns.map((col) => (
                      <TableCell key={col.key}>
                        {item[col.key]}
                      </TableCell>
                    ))}
                    <TableCell>
                      {onItemAction && (
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onItemAction(item, "edit")}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onItemAction(item, "delete")}
                          >
                            Delete
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => {
            // This would typically trigger a callback to update the page
            console.log("Navigate to page:", page);
          }}
        >
          <PaginationContent>
            {totalPages > 0 && (
              <>
                <PaginationPrevious
                  disabled={currentPage === 1}
                  onClick={() => {
                    if (currentPage > 1) {
                      // This would typically trigger a callback to update the page
                      console.log("Previous page");
                    }
                  }}
                >
                  Previous
                </PaginationPrevious>
                <PaginationItem>
                  <PaginationLink
                    current={true}
                    aria-label="Page 1"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                {totalPages > 1 && (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        current={false}
                        aria-label="Page 2"
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    {totalPages > 2 && (
                      <>
                        <PaginationItem>
                          <PaginationLink
                            current={false}
                            aria-label="Page 3"
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        {totalPages > 3 && (
                          <PaginationItem>
                            <PaginationLink
                              current={currentPage === totalPages ? true : false}
                              aria-label={`Page ${totalPages}`}
                            >
                              {totalPages}
                            </PaginationLink>
                          </PaginationItem>
                        )}
                      </>
                    )}
                  </>
                )}
                <PaginationNext
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    if (currentPage < totalPages) {
                      // This would typically trigger a callback to update the page
                      console.log("Next page");
                    }
                  }}
                >
                  Next
                </PaginationNext>
              </>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
