import { NextResponse } from "next/server"

// Handle GET request - get autopilot rules
export async function GET(request: Request) {
  // In a real implementation, this would fetch from database
  return NextResponse.json({
    success: true,
    rules: {
      minMatchScore: 70,
      dailyLimit: 5,
      sendingDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      sendingHours: { start: 9, end: 17 },
      companySizeLimit: 50,
      tone: { formality: "casual", detail: "short" },
      followupEnabled: true,
      emailDesign: "default"
    }
  })
}

// Handle POST request - save autopilot rules
export async function POST(request: Request) {
  try {
    const data = await request.json()

    // In a real implementation, this would save to database
    return NextResponse.json({
      success: true,
      message: "Autopilot rules saved successfully",
      rules: data
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid rules data" },
      { status: 400 }
    )
  }
}

// Handle PUT request - update autopilot rules
export async function PUT(request: Request) {
  try {
    const data = await request.json()

    // In a real implementation, this would update in database
    return NextResponse.json({
      success: true,
      message: "Autopilot rules updated successfully",
      rules: data
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid rules data" },
      { status: 400 }
    )
  }
}