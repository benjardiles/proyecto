import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, extractTokenFromHeader } from '@/services/authService';

export function withAuth(handler: Function) {
  return async (req: NextRequest) => {
    try {
      // Extract token from Authorization header
      const authHeader = req.headers.get('authorization');
      const token = extractTokenFromHeader(authHeader);
      
      if (!token) {
        return NextResponse.json(
          { success: false, message: 'Authentication token is missing' },
          { status: 401 }
        );
      }

      // Verify token
      const decoded = verifyToken(token);
      if (!decoded) {
        return NextResponse.json(
          { success: false, message: 'Invalid or expired token' },
          { status: 401 }
        );
      }

      // Add user info to request
      const requestWithUser = {
        ...req,
        user: decoded,
      };

      // Call the original handler with the enhanced request
      return handler(requestWithUser);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return NextResponse.json(
        { success: false, message: 'Authentication failed' },
        { status: 500 }
      );
    }
  };
}
