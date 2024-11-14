import { liveblocks } from "@/lib/liveblocks";

import { auth } from '@/app/api/auth/auth'
import { redirect } from "next/navigation";

export async function POST(request: Request) {
    const session = await auth();

  if(!session) redirect('/register');
  const userInfo = {
    name: session.user?.name,
    image: session.user?.image,
  };

  

  const { status, body } = await liveblocks.identifyUser(
    {
      userId: session.user?.image as string,
      groupIds: [],
    },
    { userInfo: userInfo },
  );

  return new Response(body, { status });
}