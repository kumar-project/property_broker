import { Suspense } from "react"
import PropertyList from "@/components/property-list"
import FilterSidebar from "@/components/filter-sidebar"
import PropertyListSkeleton from "@/components/property-list-skeleton"

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Properties</h1>

      <div className="row">
        <div className="col-lg-3 mb-4 mb-lg-0">
          <FilterSidebar />
        </div>

        <div className="col-lg-9">
          <Suspense fallback={<PropertyListSkeleton />}>
            <PropertyList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
