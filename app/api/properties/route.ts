import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"
import { v4 as uuidv4 } from "uuid"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    // Build the base query
    let sql = `
      SELECT p.*, 
        (SELECT image_url FROM property_images WHERE property_id = p.id AND is_primary = TRUE LIMIT 1) as image_url
      FROM properties p
      WHERE 1=1
    `

    const queryParams: any[] = []

    // Apply filters based on search parameters
    if (searchParams.has("location")) {
      sql += ` AND p.location LIKE ?`
      queryParams.push(`%${searchParams.get("location")}%`)
    }

    if (searchParams.has("type")) {
      sql += ` AND p.property_type = ?`
      queryParams.push(searchParams.get("type"))
    }

    if (searchParams.has("listingType")) {
      sql += ` AND p.listing_type = ?`
      queryParams.push(searchParams.get("listingType"))
    }

    if (searchParams.has("minPrice")) {
      sql += ` AND p.price >= ?`
      queryParams.push(searchParams.get("minPrice"))
    }

    if (searchParams.has("maxPrice")) {
      sql += ` AND p.price <= ?`
      queryParams.push(searchParams.get("maxPrice"))
    }

    if (searchParams.has("bhk")) {
      if (searchParams.get("bhk") === "4+") {
        sql += ` AND p.bhk >= 4`
      } else {
        sql += ` AND p.bhk = ?`
        queryParams.push(searchParams.get("bhk"))
      }
    }

    if (searchParams.has("furnishing")) {
      sql += ` AND p.furnishing = ?`
      queryParams.push(searchParams.get("furnishing"))
    }

    if (searchParams.has("ownerType")) {
      sql += ` AND p.owner_type = ?`
      queryParams.push(searchParams.get("ownerType"))
    }

    // Add sorting
    const sortBy = searchParams.get("sortBy") || "created_at"
    const sortOrder = searchParams.get("sortOrder") || "DESC"

    sql += ` ORDER BY p.${sortBy} ${sortOrder}`

    // Add pagination
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    sql += ` LIMIT ? OFFSET ?`
    queryParams.push(limit, offset)

    // Execute the query
    const properties = await query(sql, queryParams)

    // Get total count for pagination
    let countSql = `
      SELECT COUNT(*) as total
      FROM properties p
      WHERE 1=1
    `

    // Apply the same filters to the count query
    if (searchParams.has("location")) {
      countSql += ` AND p.location LIKE ?`
    }

    if (searchParams.has("type")) {
      countSql += ` AND p.property_type = ?`
    }

    if (searchParams.has("listingType")) {
      countSql += ` AND p.listing_type = ?`
    }

    if (searchParams.has("minPrice")) {
      countSql += ` AND p.price >= ?`
    }

    if (searchParams.has("maxPrice")) {
      countSql += ` AND p.price <= ?`
    }

    if (searchParams.has("bhk")) {
      if (searchParams.get("bhk") === "4+") {
        countSql += ` AND p.bhk >= 4`
      } else {
        countSql += ` AND p.bhk = ?`
      }
    }

    if (searchParams.has("furnishing")) {
      countSql += ` AND p.furnishing = ?`
    }

    if (searchParams.has("ownerType")) {
      countSql += ` AND p.owner_type = ?`
    }

    // Remove limit and offset from the query params for the count query
    const countQueryParams = queryParams.slice(0, -2)

    const countResult = await query(countSql, countQueryParams)
    const total = countResult[0].total

    return NextResponse.json({
      properties,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching properties:", error)
    return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = [
      "title",
      "description",
      "price",
      "location",
      "address",
      "city",
      "state",
      "zipCode",
      "area",
      "bhk",
      "bathrooms",
      "furnishing",
      "floor",
      "totalFloors",
      "propertyType",
      "listingType",
      "ownerType",
      "contactName",
      "contactPhone",
      "contactEmail",
      "userId",
    ]

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Generate a unique ID for the property
    const propertyId = uuidv4()

    // Insert the property into the database
    const propertyResult = await query(
      `INSERT INTO properties (
        id, title, description, price, location, address, city, state, zip_code,
        area, bhk, bathrooms, furnishing, floor, total_floors, facing, property_type,
        listing_type, owner_type, contact_name, contact_phone, contact_email, user_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        propertyId,
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
        body.userId,
      ],
    )

    // Insert amenities if provided
    if (body.amenities && body.amenities.length > 0) {
      for (const amenity of body.amenities) {
        await query(`INSERT INTO property_amenities (id, property_id, amenity) VALUES (?, ?, ?)`, [
          uuidv4(),
          propertyId,
          amenity,
        ])
      }
    }

    // Insert images if provided
    if (body.images && body.images.length > 0) {
      for (let i = 0; i < body.images.length; i++) {
        await query(
          `INSERT INTO property_images (id, property_id, image_url, is_primary) VALUES (?, ?, ?, ?)`,
          [uuidv4(), propertyId, body.images[i], i === 0], // First image is primary
        )
      }
    }

    return NextResponse.json({
      success: true,
      message: "Property created successfully",
      propertyId,
    })
  } catch (error) {
    console.error("Error creating property:", error)
    return NextResponse.json({ error: "Failed to create property" }, { status: 500 })
  }
}
