import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const propertyId = params.id

    // Get property details
    const propertyResult = await query(`SELECT * FROM properties WHERE id = ?`, [propertyId])

    if (!propertyResult || propertyResult.length === 0) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 })
    }

    const property = propertyResult[0]

    // Get property images
    const imagesResult = await query(`SELECT * FROM property_images WHERE property_id = ? ORDER BY is_primary DESC`, [
      propertyId,
    ])

    // Get property amenities
    const amenitiesResult = await query(`SELECT amenity FROM property_amenities WHERE property_id = ?`, [propertyId])

    const amenities = amenitiesResult.map((row: any) => row.amenity)

    return NextResponse.json({
      ...property,
      images: imagesResult,
      amenities,
    })
  } catch (error) {
    console.error("Error fetching property details:", error)
    return NextResponse.json({ error: "Failed to fetch property details" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const propertyId = params.id
    const body = await request.json()

    // Check if property exists
    const propertyResult = await query(`SELECT * FROM properties WHERE id = ?`, [propertyId])

    if (!propertyResult || propertyResult.length === 0) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 })
    }

    // Update property details
    await query(
      `UPDATE properties SET
        title = ?,
        description = ?,
        price = ?,
        location = ?,
        address = ?,
        city = ?,
        state = ?,
        zip_code = ?,
        area = ?,
        bhk = ?,
        bathrooms = ?,
        furnishing = ?,
        floor = ?,
        total_floors = ?,
        facing = ?,
        property_type = ?,
        listing_type = ?,
        owner_type = ?,
        contact_name = ?,
        contact_phone = ?,
        contact_email = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?`,
      [
        body.title,
        body.description,
        body.price,
        body.location,
        body.address,
        body.city,
        body.state,
        body.zipCode,
        body.area,
        body.bhk,
        body.bathrooms,
        body.furnishing,
        body.floor,
        body.totalFloors,
        body.facing || null,
        body.propertyType,
        body.listingType,
        body.ownerType,
        body.contactName,
        body.contactPhone,
        body.contactEmail,
        propertyId,
      ],
    )

    // Update amenities if provided
    if (body.amenities) {
      // Delete existing amenities
      await query(`DELETE FROM property_amenities WHERE property_id = ?`, [propertyId])

      // Insert new amenities
      for (const amenity of body.amenities) {
        await query(`INSERT INTO property_amenities (id, property_id, amenity) VALUES (UUID(), ?, ?)`, [
          propertyId,
          amenity,
        ])
      }
    }

    return NextResponse.json({
      success: true,
      message: "Property updated successfully",
    })
  } catch (error) {
    console.error("Error updating property:", error)
    return NextResponse.json({ error: "Failed to update property" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const propertyId = params.id

    // Check if property exists
    const propertyResult = await query(`SELECT * FROM properties WHERE id = ?`, [propertyId])

    if (!propertyResult || propertyResult.length === 0) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 })
    }

    // Delete property (cascade will delete related images and amenities)
    await query(`DELETE FROM properties WHERE id = ?`, [propertyId])

    return NextResponse.json({
      success: true,
      message: "Property deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting property:", error)
    return NextResponse.json({ error: "Failed to delete property" }, { status: 500 })
  }
}
