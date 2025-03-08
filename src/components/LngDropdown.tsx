"use client"

import * as React from "react"

import { Button } from "@/src/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageDropdown() {
    const [value, setValue] = React.useState("en");

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'zh', name: '中文' },
    ];

    const currentLng = languages.find((lng) => lng.code === value);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-[120px] text-[16px] font-normal hover:bg-ai-primary/10 text-ai-primary">
                    <Globe size={24} color='#83C427' />
                    {currentLng?.name}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[120px]"
            >
                <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
                    {
                        languages.map((language) => (
                            <DropdownMenuRadioItem key={language.code} value={language.code}>{language.name}</DropdownMenuRadioItem>
                        ))
                    }
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
