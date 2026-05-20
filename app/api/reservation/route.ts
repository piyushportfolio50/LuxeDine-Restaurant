import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, guests, floor, table, requests } = body

    // Validate required fields
    if (!name || !email || !date || !time || !guests || !table) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create transporter - Uses Gmail by default, can be configured via env vars
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Generate booking ID
    const bookingId = `RES${Date.now().toString().slice(-6)}`

    // Create HTML email template
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #111111; padding: 0;">
        <!-- Header -->
        <div style="background-color: #111111; padding: 30px; text-align: center; border-bottom: 2px solid #F5A623;">
          <h1 style="color: #F5A623; margin: 0; font-family: Georgia, serif; font-size: 32px;">LuxeDine</h1>
          <p style="color: #888888; margin: 5px 0 0 0; font-size: 14px;">Premium Restaurant</p>
        </div>
        
        <!-- Main Content -->
        <div style="padding: 40px 30px; background-color: #1a1a1a;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="width: 60px; height: 60px; background-color: #22c55e20; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
              <span style="font-size: 30px;">✓</span>
            </div>
            <h2 style="color: #ffffff; font-family: Georgia, serif; font-size: 28px; margin: 20px 0 10px 0;">Reservation Confirmed!</h2>
            <p style="color: #888888; font-size: 16px; margin: 0;">Thank you for choosing LuxeDine</p>
          </div>
          
          <p style="color: #cccccc; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Dear <strong style="color: #F5A623;">${name}</strong>,<br><br>
            We are delighted to confirm your reservation at LuxeDine. We look forward to providing you with an exceptional dining experience.
          </p>
          
          <!-- Booking Details Table -->
          <div style="background-color: #222222; padding: 25px; border-radius: 8px; border: 1px solid #333333;">
            <h3 style="color: #F5A623; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 15px; border-bottom: 1px solid #333333;">Booking Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #888888; font-size: 14px; vertical-align: top; width: 40%;">Booking ID:</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 14px; font-weight: bold;">#${bookingId}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888888; font-size: 14px; border-top: 1px solid #333333;">Date:</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #333333;">${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888888; font-size: 14px; border-top: 1px solid #333333;">Time:</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #333333;">${time}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888888; font-size: 14px; border-top: 1px solid #333333;">Guests:</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #333333;">${guests} ${parseInt(guests) === 1 ? 'Guest' : 'Guests'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888888; font-size: 14px; border-top: 1px solid #333333;">Table:</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #333333;">${table}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888888; font-size: 14px; border-top: 1px solid #333333;">Floor:</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #333333;">${floor}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888888; font-size: 14px; border-top: 1px solid #333333;">Phone:</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #333333;">${phone}</td>
              </tr>
              ${requests ? `
              <tr>
                <td style="padding: 12px 0; color: #888888; font-size: 14px; border-top: 1px solid #333333; vertical-align: top;">Special Requests:</td>
                <td style="padding: 12px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #333333;">${requests}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <!-- Important Notes -->
          <div style="background-color: #F5A62310; border-left: 4px solid #F5A623; padding: 15px 20px; margin-top: 25px; border-radius: 0 8px 8px 0;">
            <p style="color: #F5A623; font-weight: bold; margin: 0 0 10px 0; font-size: 14px;">Important Notes:</p>
            <ul style="color: #cccccc; font-size: 14px; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Please arrive 10-15 minutes before your reservation time</li>
              <li>Your table will be held for 15 minutes past the reservation time</li>
              <li>For any changes, please contact us at least 2 hours in advance</li>
            </ul>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #111111; padding: 30px; text-align: center; border-top: 1px solid #333333;">
          <p style="color: #888888; font-size: 14px; margin: 0 0 10px 0;">
            <strong style="color: #F5A623;">LuxeDine Restaurant</strong>
          </p>
          <p style="color: #666666; font-size: 12px; margin: 0 0 5px 0;">
            123 Gourmet Street, Fine Dining District
          </p>
          <p style="color: #666666; font-size: 12px; margin: 0 0 15px 0;">
            Phone: +91 98765 43210 | Email: reservations@luxedine.com
          </p>
          <p style="color: #444444; font-size: 11px; margin: 0;">
            © ${new Date().getFullYear()} LuxeDine. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
    `

    // Send email if credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail({
        from: `"LuxeDine Restaurant" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Reservation Confirmed - ${new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at ${time}`,
        html: htmlContent,
      })
    }

    return NextResponse.json({ 
      success: true, 
      bookingId,
      message: "Reservation confirmed successfully" 
    })
  } catch (error) {
    console.error("Reservation email error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to process reservation" },
      { status: 500 }
    )
  }
}
