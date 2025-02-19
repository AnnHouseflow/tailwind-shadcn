import { Button } from "@/components/ui/button"
import {
    SheetClose,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Accordion } from "@/components/ui/accordion"

import AccordionOpen from './AccordionOpen';

function MenuOpen() {
    const menu = [
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.861 13.625l9.342-9.342a5.235 5.235 0 1 1 7.403 7.403L10.88 20.41a2.867 2.867 0 0 1-4.054-4.054l8.372-8.373"/></svg>',
            title: "謄本",
            content:["找建物","找土地"]
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z"/></svg>',
            title: "快訊",
            content:["訂閱物件","通知"]
        }
    ]
    
    return (
        <>
            <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                </SheetDescription>
            </SheetHeader>
                <Accordion type="single" collapsible className="w-full mb-4">
                    {menu.map((item,index)=>{
                        return <AccordionOpen key={index} item={item} index={index}></AccordionOpen>
                    })}
                </Accordion>
            <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit" className="px-3 py-6 bg-primary-gradient text-white rounded">Save changes</Button>
                </SheetClose>
            </SheetFooter>
        </>
    )
};


export default MenuOpen;