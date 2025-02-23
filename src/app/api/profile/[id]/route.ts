import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const userId = Number(params.id);

  // Trả về dữ liệu user
  return NextResponse.json({ userId, name: "Thinh", req });
}
