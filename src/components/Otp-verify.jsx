"use client"

import { useState, useEffect, useRef } from "react"

import { User, Building2, Shield, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function VerifyOTPPage() {
 
  const [userType, setUserType] = useState("user")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [isResending, setIsResending] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
   
    

    if (type === "vendor" || type === "user") {
      setUserType(type)
    }
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerifyOTP = (e) => {
    e.preventDefault()
    const otpString = otp.join("")

    if (otpString.length !== 6) {
      alert("Please enter complete OTP")
      return
    }

    // Simulate OTP verification
    console.log("Verifying OTP:", otpString)

    // Navigate to appropriate dashboard
    if (userType === "vendor") {
      router.push("/vendor-dashboard")
    } else {
      router.push("/user-dashboard")
    }
  }

  const handleResendOTP = async () => {
    setIsResending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setTimeLeft(300)
    setOtp(["", "", "", "", "", ""])
    setIsResending(false)
    alert("OTP sent successfully!")
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Wedding Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="w-full bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('./assets/img/login.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-white text-center">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Secure Verification</h1>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Almost There!</h2>
              <p className="text-lg opacity-90">We've sent a verification code to your email address</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                {userType === "vendor" ? (
                  <>
                    <Building2 className="w-6 h-6 text-blue-500" />
                    Vendor Verification
                  </>
                ) : (
                  <>
                    <User className="w-6 h-6 text-pink-500" />
                    User Verification
                  </>
                )}
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">Enter the 6-digit code sent to</p>
              <p className="text-sm font-medium text-gray-800">{email}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                {/* OTP Input */}
                <div className="space-y-2">
                  <div className="flex justify-center gap-2">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-semibold border-2 focus:border-primary"
                      />
                    ))}
                  </div>
                </div>

                {/* Timer */}
                <div className="text-center">
                  {timeLeft > 0 ? (
                    <p className="text-sm text-gray-600">
                      Code expires in <span className="font-medium text-red-600">{formatTime(timeLeft)}</span>
                    </p>
                  ) : (
                    <p className="text-sm text-red-600 font-medium">Code has expired</p>
                  )}
                </div>

                {/* Verify Button */}
                <Button
                  type="submit"
                  className={`w-full h-12 ${
                    userType === "vendor" ? "bg-blue-600 hover:bg-blue-700" : "bg-pink-600 hover:bg-pink-700"
                  }`}
                  disabled={otp.join("").length !== 6}
                >
                  Verify & Continue
                </Button>
              </form>

              {/* Resend OTP */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Didn't receive the code?</p>
                <Button
                  variant="link"
                  onClick={handleResendOTP}
                  disabled={timeLeft > 0 || isResending}
                  className={`p-0 h-auto ${
                    userType === "vendor" ? "text-blue-600 hover:text-blue-700" : "text-pink-600 hover:text-pink-700"
                  }`}
                >
                  {isResending ? "Sending..." : "Resend OTP"}
                </Button>
              </div>

              {/* Back to Signup */}
              <div className="text-center">
                <Link
                  href={`/signup?type=${userType}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign Up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
