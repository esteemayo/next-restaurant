import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

interface IParams {
  params: {
    id: string;
  };
}

export const PATCH = async (req: NextRequest, { params }: IParams) => {
  const { id: orderId } = params;
  
  try {
    const body = await req.json();

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: { status: body },
    });

    return new NextResponse(
      JSON.stringify({ message: 'Order has been updated!' }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    );
  }
};
