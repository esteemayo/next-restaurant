import { NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

export const GET = async () => {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();

        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }

      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });

      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (err) {
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong!' }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: 'You are not authenticated!' }),
      { status: 401 }
    );
  }
};

export const POST = async (req: NextResponse) => {
  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      const body = await req.json();
      const order = await prisma.order.create({
        data: { ...body },
      });

      return new NextResponse(JSON.stringify(order), { status: 201 });
    } catch (err) {
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong!' }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: 'You are not authenticated!' }),
      { status: 401 }
    );
  }
};
