import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Demo user for testing (Jeff Temo)
    if (email === 'jeff@demo.com' && password === 'demo123') {
      return NextResponse.json(
        {
          message: 'დემო მომხმარებელი',
          user: {
            id: 'demo-user-id',
            name: 'Jeff Temo',
            email: 'jeff@demo.com',
          },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'არასწორი მონაცემები' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Demo login error:', error);
    return NextResponse.json(
      { error: 'შესვლის შეცდომა' },
      { status: 500 }
    );
  }
}
