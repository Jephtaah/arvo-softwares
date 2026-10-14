import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { cn } from "@/lib/utils";

interface EmailPreviewFrameProps {
  className?: string;
  emailContent: string; // HTML content of the email
  showBcc?: boolean;
  showCc?: boolean;
  showFrom?: boolean;
  showReplyTo?: boolean;
  showSubject?: boolean;
  showHeaders?: boolean;
}

export const EmailPreviewFrame = React.forwardRef<
  HTMLDivElement,
  EmailPreviewFrameProps
>(({ className, emailContent, showBcc, showCc, showFrom, showReplyTo, showSubject, showHeaders, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <Card className="w-full">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center justify-between">
            Email Preview
            <ToggleGroup type="multiple" value={[]} onValueChange={() => {}} className="flex gap-2">
              {showFrom && (
                <ToggleGroupItem value="from">From</ToggleGroupItem>
              )}
              {showCc && (
                <ToggleGroupItem value="cc">CC</ToggleGroupItem>
              )}
              {showBcc && (
                <ToggleGroupItem value="bcc">BCC</ToggleGroupItem>
              )}
              {showReplyTo && (
                <ToggleGroupItem value="replyto">Reply-To</ToggleGroupItem>
              )}
              {showSubject && (
                <ToggleGroupItem value="subject">Subject</ToggleGroupItem>
              )}
              {showHeaders && (
                <ToggleGroupItem value="headers">Headers</ToggleGroupItem>
              )}
            </ToggleGroup>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-96 w-full">
            <ScrollAreaViewport className="h-full w-full p-4">
              <div
                dangerouslySetInnerHTML={{ __html: emailContent }}
                className="prose prose-sm max-w-none"
              />
            </ScrollAreaViewport>
            <ScrollAreaScrollbar className="h-full w-2">
              <ScrollAreaThumb className="h-full w-2 bg-primary/50 rounded-full" />
            </ScrollAreaScrollbar>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
});
EmailPreviewFrame.displayName = "EmailPreviewFrame";
