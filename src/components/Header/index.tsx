import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,

    MenubarTrigger,
} from "@/src/components/ui/menubar"

export default function HeaderNavigation() {
    return (
        <Menubar className="border-none shadow-none flex-1 justify-center">
            <MenubarMenu >
                <MenubarTrigger className='min-w-24 px-0 justify-center text-xl font-normal text-ai-secondary active:text-ai-primary hover:text-ai-primary tracking-wide'>Home</MenubarTrigger>
                <MenubarContent className="min-w-24">
                    <MenubarItem className="text-[16px] font-normal text-ai-secondary hover:text-ai-primary">
                        home subpage1
                    </MenubarItem>
                    <MenubarItem className="text-[16px] font-normal text-ai-secondary hover:text-ai-primary">
                        home subpage2
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className='min-w-24 px-0 justify-center text-xl font-normal text-ai-secondary hover:text-ai-primary tracking-wide'>Help</MenubarTrigger>
                <MenubarContent className="min-w-24">
                    <MenubarItem className="text-[16px] font-normal text-ai-secondary hover:text-ai-primary">
                        Help subpage1
                    </MenubarItem>
                    <MenubarItem className="text-[16px] font-normal text-ai-secondary hover:text-ai-primary">
                        Help subpage2  Help subpage2  Help subpage2
                    </MenubarItem>
                    <MenubarItem className="text-[16px] font-normal text-ai-secondary hover:text-ai-primary">
                        Help subpage3
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className='min-w-24 px-0 justify-center text-xl font-normal text-ai-secondary hover:text-ai-primary tracking-wide'>Tools</MenubarTrigger>
                <MenubarContent className="min-w-24">
                    <MenubarItem className="text-[16px] font-normal text-ai-secondary hover:text-ai-primary">
                        Tools subpage1
                    </MenubarItem>
                    <MenubarItem className="text-[16px] font-normal text-ai-secondary hover:text-ai-primary">
                        Tools subpage2
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
