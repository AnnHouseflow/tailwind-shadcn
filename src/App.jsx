import { useState } from 'react'
import './App.css'

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"


import MenuOpen from './components/MenuOpen'
import PaginationComponent from './components/PaginationComponent'
import { ComboboxDemo } from './components/ComboboxDemo'
import { DataTableDemo } from './components/DataTableDemo'
import { DatePickerWithRange } from "./components/DatePickerWithRange";



function App() {
  return (
    <>
      <div className="relative">
        <nav className="sticky z-10 top-0 right-0 w-full md:hidden flex justify-between items-center py-7 bg-white">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="p-3" variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" /></svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <MenuOpen />
              </SheetContent>
            </Sheet>
            <h2 className='text-lg font-bold'>e 指成交</h2>
            <button type="button" className="p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
            </button>
        </nav>
        <div className="px-5">
          <p className='mb-4 font-bold text-info'>新上架 <span className='text-tertiary'>135</span> 筆資料</p>
          <div className="mb-12">
            <p>要自己寫頁數省略邏輯</p>
            <PaginationComponent></PaginationComponent>
          </div>
          <div className="mb-12">
            <p>沒有多選的 Select，要自己寫，但有 autoComplete。官網提供的程式碼與實際預覽對不上。</p>
            <ComboboxDemo></ComboboxDemo>
          </div>
          <div className="mb-12">
            <p>table 測試</p>
            <DataTableDemo></DataTableDemo>
          </div>
          <div className="mb-12">
            <p>月曆選擇</p>
            <DatePickerWithRange></DatePickerWithRange>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
