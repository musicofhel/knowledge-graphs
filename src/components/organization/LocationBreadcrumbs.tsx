import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { Folder } from "lucide-react";

export const LocationBreadcrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="flex items-center gap-2">
          <Folder className="h-4 w-4" />
          Root
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/tutorials">Tutorials</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/tutorials/react">React</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};