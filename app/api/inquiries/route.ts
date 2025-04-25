import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["propertyId", "name", "email", "phone", "message"]

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Insert the inquiry into the database
    await query(`INSERT INTO inquiries (id, property_id, name, email, phone, message) VALUES (?, ?, ?, ?, ?, ?)`, [
      uuidv4(),
      body.propertyId,
      body.name,
      body.email,
      body.phone,
      body.message,
    ])

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting inquiry:", error)
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 })
  }
}
