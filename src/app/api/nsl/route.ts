import { NextRequest, NextResponse } from "next/server";
import { LoopsClient } from "loops";

const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);

export async function POST(request: NextRequest) {
  const res = await request.json();

  const email = res["email"];

  const prop = {
    userGroup: "Newsletter",
  }

  const resp: {
    success: boolean,
    id?: string,
    message?: string
  } = await loops.createContact(email, prop, { 'cm0r1c55a00ex0ll16l7zdmlw': true });

  return NextResponse.json({ success: resp.success, id: resp.id, message: resp.message });
}
