import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { withAuth } from '@/lib/authMiddleware';

async function handler(req: NextRequest & { user?: any }) {
  try {
    await connectDB();
    
    // Get user ID from the authenticated request
    const userId = req.user?.userId;
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID not found' },
        { status: 400 }
      );
    }
    
    // Find user by ID
    const user = await User.findById(userId);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
    // Return user data
    return NextResponse.json(
      { 
        success: true, 
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        } 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to get user data' },
      { status: 500 }
    );
  }
}

export const GET = withAuth(handler);
