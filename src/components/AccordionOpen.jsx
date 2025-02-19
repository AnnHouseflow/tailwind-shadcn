import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

function AccordionOpen({ item, index }) {
  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger>
        <div className="flex space-x-2.5 items-center">
          <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
          <p>{item.title}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ul>
          {item.content.map((content, index) => {
            return <li key={index}><Button className="pl-8 py-2.5" type="button">{content}</Button></li>
          })}
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}

export default AccordionOpen;