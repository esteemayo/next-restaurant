import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

interface IParams {
  params: {
    orderId: string;
  };
}

export const POST = async (req: NextRequest, { params }: IParams) => {
  const { orderId } = params;

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: (order.price as any) * 100,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        intent_id: paymentIntent.id,
      },
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  }
  return new NextResponse(JSON.stringify({ message: 'Order not found!' }), {
    status: 404,
  });
};
