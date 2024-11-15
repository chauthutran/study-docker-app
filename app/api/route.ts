import { connectToDatabase } from '@/libs/mongodb/db';
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
	try {
        const db = await connectToDatabase();
        // db.collection("test").insertOne({ message: "Hello, MongoDB!" })
        const data = await db.collection("test").find({}).toArray();
        return NextResponse.json(data, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error: "Failed to connect to database" }, { status: 200 });
      }
}