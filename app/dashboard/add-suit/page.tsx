import FormAddSuit from "@/components/FormAddSuit"
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
const AddSuit = async() => {
  const session = await auth()
  if(!session){redirect('/')}
  return (
    <div className='min-h-screen flex flex-col justify-start items-center px-24 max-sm:px-4 py-8 '>
      <FormAddSuit/>
    </div>
  )
}

export default AddSuit
