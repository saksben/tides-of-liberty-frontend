import { fetchProductsByCollection } from "@/lib/utils/apiService";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const collectionSlug = searchParams.get("collectionSlug");

  if (!collectionSlug) {
    return NextResponse.json(
      { message: "Collection slug is required" },
      { status: 400 }
    );
  }

  try {
    const products = await fetchProductsByCollection(collectionSlug);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
