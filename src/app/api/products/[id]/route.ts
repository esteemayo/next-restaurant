import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const GET = async (req: NextRequest, { params }: IParams) => {
  const { id: productId } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest, { params }: IParams) => {
  const { id: productId } = params;
  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      await prisma.product.delete({
        where: {
          id: productId,
        },
      });

      return new NextResponse(JSON.stringify('Product has been deleted!'), { status: 204 });
    } catch (err) {
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong!' }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(JSON.stringify({ message: 'You are not allowed!' }), {
    status: 403,
  });
};
