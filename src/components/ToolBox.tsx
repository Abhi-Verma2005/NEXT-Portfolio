import React, { Fragment } from 'react'
import { TechIcon } from './TechIcon'
import { twMerge } from 'tailwind-merge';

function ToolBox({ languages, className, itemsWrapperClassName }: { languages:{ name: string, iconType: React.ElementType }[]; className: string; itemsWrapperClassName: string }) {
  return (
    <div className={twMerge('flex [mask-image:linear-gradient(to_right, transparent, black_10%,black_90%,tranparent)]', className)}>
      <div className={twMerge('flex py-0.5 flex-none gap-6 pr-6', itemsWrapperClassName)}>
      {
        [...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
      {languages.map((item) => ( // genera
        <div key={item.name} className="inline-flex gap-4 m-1 items-center py-2 px-3 border-2 border-white/10 rounded-lg"> 
        <TechIcon component={item.iconType}/>
        <span>{item.name}</span>
        </div>
    ))}
      </Fragment>
        ))
      }
      </div>
    </div>
  )
}

export default ToolBox
