import { NextResponse } from 'next/server';

export const GET = (req: Request, res: Response) => {
  return new NextResponse('hello', { status: 200 });
};
