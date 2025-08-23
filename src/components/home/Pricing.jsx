"use client"

import { useState } from "react"
import { Check, X, Gift } from "lucide-react"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState("yearly")

  const plans = [
    {
      name: "Silver",
      monthlyPrice: 19,
      yearlyPrice: 99,
      features: [
        { name: "Listings (3)", included: true },
        { name: "Images Per Listings (3)", included: true },
        { name: "Enquiry Form", included: false },
        { name: "Video", included: false },
        { name: "Amenities Per Listing (3)", included: true },
        { name: "Features Per Listing (3)", included: true },
      ],
    },
    {
      name: "Gold",
      monthlyPrice: 39,
      yearlyPrice: 199,
      popular: true,
      features: [
        { name: "Listings (5)", included: true },
        { name: "Images Per Listings (5)", included: true },
        { name: "Enquiry Form", included: true },
        { name: "Video", included: true },
        { name: "Amenities Per Listing (5)", included: true },
        { name: "Features Per Listing (5)", included: true },
      ],
    },
    {
      name: "Platinum",
      monthlyPrice: 59,
      yearlyPrice: 299,
      features: [
        { name: "Listings (10)", included: true },
        { name: "Images Per Listings (10)", included: true },
        { name: "Enquiry Form", included: true },
        { name: "Video", included: true },
        { name: "Amenities Per Listing (10)", included: true },
        { name: "Features Per Listing (10)", included: true },
      ],
    },
  ]

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Most Affordable Package</h2>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "monthly" ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "yearly" ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? "bg-primary text-white transform scale-105" : "bg-white"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white text-primary px-4 py-2 rounded-full text-xs font-medium mt-2">Popular</div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center mb-6">
                  <Gift className={`w-6 h-6 mr-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                  <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      ${billingPeriod === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className={`ml-2 text-sm ${plan.popular ? "text-coral-100" : "text-gray-500"}`}>
                      / {billingPeriod === "yearly" ? "Yearly" : "Monthly"}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className={`font-semibold mb-4 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className={`w-4 h-4 mr-3 ${plan.popular ? "text-white" : "text-green-500"}`} />
                        ) : (
                          <X className={`w-4 h-4 mr-3 ${plan.popular ? "text-coral-200" : "text-red-400"}`} />
                        )}
                        <span
                          className={`text-sm ${
                            plan.popular
                              ? feature.included
                                ? "text-white"
                                : "text-coral-200"
                              : feature.included
                                ? "text-gray-700"
                                : "text-gray-400"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-4 text-sm font-medium ${
                      plan.popular ? "text-coral-100 hover:text-white" : "text-primary hover:text-coral-600"
                    }`}
                  >
                    Show More
                  </button>
                </div>

                {/* Purchase Button */}
                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-gray-50"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
