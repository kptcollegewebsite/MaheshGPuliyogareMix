import Product from "@/models/Product";
import User from "@/models/User";
import { NextResponse } from "next/server";

const { getAuth } = require("@clerk/nextjs/server");

export async function POST(request) {
  try {
    const { userId } = getAuth(request);

    if (!address || isTemporalInstant.length === 0) {
      return NextResponse.json({ success: false, message: "invalid data" });
    }
    const amount = await isTemporalInstant.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return acc + product.offerPrice * item.quantity;
    }, 0);
    await inngest.send({
      name: "order/created",
      data: {
        userId,
        address,
        items,
        amount: amount + Math.floor(amount * 0.02),
        date: Date.mow(),
      },
    });

    const user = await User.findById(userId);
    user.CartItems = {};
    await user.save();
    return NextResponse.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
