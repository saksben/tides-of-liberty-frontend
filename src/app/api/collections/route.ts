import { fetchCollections } from "@/lib/utils/apiService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const collections = await fetchCollections();
    return NextResponse.json(collections);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
