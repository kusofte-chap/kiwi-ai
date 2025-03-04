'use client'

import React, { useState, useRef, useEffect } from 'react';
import ArrowDownSvg from '@/src/assets/icon/arrow-down.svg'

const Triangle = () => {
    return (
        <span className='w-6 h-6 flex items-center justify-center select-none'>
            <ArrowDownSvg />
        </span>
    );
};
interface Language {
    code: string;
    name: string;
}

const LanguageDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('bottom');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // 语言选项
    const languages: Language[] = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'zh', name: '中文' },
    ];

    // 当前选中语言
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

    // 点击非 dropdown 区域关闭
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 动态计算 dropdown 位置
    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const dropdownHeight = 200; // 假设 dropdown 最大高度，实际可测量
            const viewportHeight = window.innerHeight;
            const spaceBelow = viewportHeight - buttonRect.bottom;
            const spaceAbove = buttonRect.top;

            if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
                setDropdownPosition('top');
            } else {
                setDropdownPosition('bottom');
            }
        }
    }, [isOpen]);

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                ref={buttonRef}
                type="button"
                className="inline-flex justify-between items-center w-full rounded-md  px-4 py-2 text-[20px] font-normal text-ai-primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedLanguage.name}
                <Triangle />
            </button>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className={`origin-top-right absolute ${dropdownPosition === 'top' ? 'bottom-full mb-2' : 'mt-2'
                        } w-[125px] rounded-md shadow-lg bg-white ring-1 ring-[#D0D0E3] ring-opacity-5 focus:outline-none`}
                    style={{ maxHeight: '200px', overflowY: 'auto' }} // 限制高度并启用滚动
                >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageSelect(language)}
                                className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ai-primary"
                                role="menuitem"
                            >
                                {language.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;