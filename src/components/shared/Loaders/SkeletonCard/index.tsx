import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonCard() {
  return (
    <>
      <Card className=" mb-5">
        <section className="skeletons flex flex-col gap-2  p-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="flex gap-4 items-center">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="w-[100px] h-[120px]" />
          </div>
        </section>
      </Card>
    </>
  )
}
