import React from 'react'
import Link from 'next/link'

import { SeriesDetails } from '@/types/series-details'
import { SEARCH_ACTOR_GOOGLE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { HeroRatesInfos } from '@/components/header/hero-rates-info'
import { Icons } from '@/components/icons'
import { seriesExtraInfoFormatter } from '@/components/media/extra-info'

interface SeriesDetailsExtraInfoProps {
  series: SeriesDetails
  director: string | undefined
}

export const SeriesDetailsExtraInfo = ({
  series,
  director,
}: SeriesDetailsExtraInfoProps) => {
  const extraInfo = seriesExtraInfoFormatter(series, director)
  return (
    <section>
      <p className="text-sm font-bold lg:text-3xl">{series.name}</p>
      <HeroRatesInfos seriesDetails={series} />
      <p className="prose-invert text-xs font-semibold lg:text-lg">
        {series.overview}
      </p>
      <div className="my-4 flex max-w-lg flex-col space-y-1">
        {extraInfo.map((info) => (
          <div
            key={info.name}
            className="grid grid-cols-2 text-sm font-semibold lg:text-lg"
          >
            <p className="text-muted-foreground">{info.name}</p>
            {info.isLink ? (
              <Link
                href={`${SEARCH_ACTOR_GOOGLE}${info.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit transition-all ease-in-out hover:text-cyan-200"
              >
                <span className="inline-flex items-center gap-1">
                  <span className="underline underline-offset-4">
                    {info.value}
                  </span>
                  <Icons.arrowRight className="size-5 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            ) : (
              <p className={cn(info.className)}>{info.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
