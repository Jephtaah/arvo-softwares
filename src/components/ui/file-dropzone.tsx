import * as React from "react";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface FileDropzoneProps {
  className?: string;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  multiple?: boolean;
  label?: string;
  description?: string;
}

export const FileDropzone = React.forwardRef<
  HTMLDivElement,
  FileDropzoneProps
>(({ className, onFileChange, accept, multiple, label, description, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full space-y-4", className)}
      {...props}
    >
      <Card className="w-full">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">
            {label || "Upload File"}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8 text-center border-dashed border-2 border-muted rounded-lg hover:border-primary/50 hover:bg-primary/5">
          <input
            type="file"
            accept={accept || "*"}
            multiple={multiple || false}
            className="hidden"
            onChange={onFileChange}
          />
          <div className="flex flex-col items-center gap-3 pointer-events-none">
            <svg
              className="h-8 w-8 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16h10M7 8h10M12 8V12M12 12l2 2 2-2"
              />
            </svg>
            <p className="text-sm font-medium text-muted-foreground">
              {description || "Click to upload, or drag and drop files here"}
            </p>
            <p className="text-xs text-muted-foreground">
              {multiple
                ? "You can upload multiple files"
                : "Supported formats: " +
                  (accept
                    ? accept
                        .split(",")
                        .map((ext) => ext.trim())
                        .join(", ")
                    : "All files")}
            </p>
          </div>
          <label
            className="cursor-pointer rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              const input = document.querySelector('input[type="file"]');
              if (input) input.click();
            }}
          >
            Browse Files
          </label>
        </CardContent>
      </Card>
    </div>
  );
});
FileDropzone.displayName = "FileDropzone";
