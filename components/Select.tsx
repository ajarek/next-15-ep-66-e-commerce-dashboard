import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SelectSize = ({onValueChange}:{onValueChange:(value:string)=>void}) => {
  return (
    <div className="">
      <Select onValueChange={onValueChange} defaultValue="X">
  <SelectTrigger className="w-[100px]">
    <SelectValue placeholder="Size" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="L">L</SelectItem>
    <SelectItem value="XL">XL</SelectItem>
    <SelectItem value="XXL">XXL</SelectItem>
  </SelectContent>
</Select>
    </div>
  )
}

export default SelectSize