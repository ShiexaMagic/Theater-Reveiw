import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

// Only throw error during runtime, not during build
if (!MONGODB_URI && process.env.NODE_ENV !== 'production') {
  console.warn('⚠️ MONGODB_URI not defined - database features will be disabled');
}

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: CachedConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If no MongoDB URI, return null (demo mode)
  if (!MONGODB_URI) {
    console.warn('⚠️ Running in demo mode - no database connection');
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
