import React from 'react'

const SideLink = ({name,Icon,active,onMenuItemClick}) => {
    const isActive = active === name;
  return (
    <li  className='group cursor-pointer text-xl mb-2' onClick={()=>{onMenuItemClick(name)}}>
        <a href={name.toLowerCase()} className="pointer-events-none">
            <div className='inline-block'>
                <div className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3 ${isActive ? "text-primary-base" : ""}
                `}>
                    <Icon className="w-6 h-6"/>
                    <span className='ml-4 font-bold'>{name}</span>
                </div>
            </div>
        </a>
    </li>
  )
}

export default SideLink