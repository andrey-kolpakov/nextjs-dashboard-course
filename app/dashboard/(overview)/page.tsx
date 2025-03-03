import { Card } from '@/app/ui/dashboard/cards'
import RevenueChart from '@/app/ui/dashboard/revenue-chart'
import LatestInvoices from '@/app/ui/dashboard/latest-invoices'
import { lusitana } from '@/app/ui/fonts'
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data'
import { Suspense } from 'react'
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons'
import CardWrapper from '@/app/ui/dashboard/cards'
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices'


// import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data'

export const experimental_ppr = true;

export default async function Page() {
    // const revenue = await fetchRevenue()
    // const latestInvoices = await fetchLatestInvoices()
    // console.log(cardData)

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
            <p>Check 4</p>


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>

                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    )
}
