import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DesktopNav = ({ navLinks, currentPath }) => {
    return (
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
                <div key={link.name} className={`${link.megaMenu ? '' : 'relative'} group/nav-item h-24 md:h-28 flex items-center`}>
                    <Link
                        to={link.path}
                        className={`px-3 py-2 text-[13px] font-brand font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-lg flex items-center gap-1.5 ${currentPath === link.path
                            ? 'text-gold-600 bg-gold-50 dark:bg-gold-100 dark:text-gold-700'
                            : 'text-gray-900 dark:text-gray-700 hover:text-gold-600 hover:bg-gray-50 dark:hover:bg-gray-100'
                            }`}
                    >
                        <span>{link.name}</span>
                        {(link.subLinks || link.megaMenu) && <MdKeyboardArrowDown className="w-4 h-4 transition-transform duration-300 group-hover/nav-item:rotate-180" />}

                        {/* Badge */}
                        {link.badge && (
                            <span className="px-1.5 py-0.5 text-[7px] font-black rounded-full shadow-sm text-white bg-gold-500">
                                {link.badge}
                            </span>
                        )}
                    </Link>

                    {/* Dropdown Menu */}
                    {(link.subLinks || link.megaMenu) && (
                        <div className="absolute top-full left-0 right-0 opacity-0 invisible translate-y-2 transition-all duration-300 ease-out group-hover/nav-item:opacity-100 group-hover/nav-item:visible group-hover/nav-item:translate-y-0 z-50">
                            {link.megaMenu ? (
                                <div className="bg-white dark:bg-zinc-900 shadow-[0_30px_100px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.5)] rounded-[2.5rem] border border-gray-100 dark:border-white/5 p-12 flex gap-12 w-full max-w-[1100px] mx-auto">
                                    {link.megaMenu.map((group) => (
                                        <div key={group.title} className="flex-1 min-w-[150px]">
                                            <h4 className="text-[11px] font-black text-gold-500 uppercase tracking-[0.3em] mb-8 border-b-2 border-gold-500/10 pb-4">
                                                {group.title}
                                            </h4>
                                            <div className="flex flex-col gap-4">
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.path}
                                                        className="text-[13px] font-bold text-gray-600 hover:text-gold-600 dark:text-gray-300 dark:hover:text-gold-400 transition-all py-1.5 block leading-relaxed hover:translate-x-1 transform duration-300"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl border border-gray-100 dark:border-white/5 py-4 min-w-[220px] overflow-hidden">
                                    {link.subLinks.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            to={sub.path}
                                            className="block px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Hover Underline */}
                    {!link.badge && !link.subLinks && currentPath !== link.path && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-500 transform scale-x-0 transition-transform duration-300 origin-center group-hover/nav:scale-x-100"></div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default DesktopNav;
