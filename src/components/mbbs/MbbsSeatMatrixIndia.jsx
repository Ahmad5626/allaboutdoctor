"use client"

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function MbbsSeatMatrixIndia() {
  const data = {
    labels: [
      "Government Medical Colleges",
      "Private Medical Colleges",
      "Deemed Universities",
      "AIQ Seats",
      "State Quota Seats",
    ],
    datasets: [
      {
        label: "MBBS Seats Distribution",
        data: [52000, 47000, 12000, 15000, 96000],
        backgroundColor: [
          "#01349e", // primary
          "#f68b1e", // secondary
          "#5b8def",
          "#34c38f",
          "#f46a6a",
        ],
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          font: {
            size: 13,
            weight: "500",
          },
        },
      },
    },
  }

  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MBBS Seat Matrix in India
          </h2>

          <h3 className="mt-6 text-lg text-muted-foreground">
            India offers MBBS seats across all states and union territories,
            distributed among different college categories and quotas.
          </h3>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Seat Matrix Includes:
            </h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>• State-wise total MBBS seats</li>
              <li>• Government medical college seats</li>
              <li>• Private medical college seats</li>
              <li>• Deemed university seats</li>
              <li>• AIQ and State quota seat distribution</li>
            </ul>
          </div>

          <div className="mt-10 space-y-4">
            <h4 className="text-xl font-semibold text-foreground">
              Official Seat Matrix Covers:
            </h4>

            <ul className="space-y-3 text-muted-foreground">
              <li>• College-wise seat availability</li>
              <li>• Quota-wise allocation</li>
              <li>• Category-wise reservation</li>
            </ul>
          </div>

          <h4 className="mt-10 text-base text-muted-foreground">
            <span className="font-semibold text-foreground">
              All About Doctor
            </span>{" "}
            provides state-specific seat matrix analysis to help students make
            realistic and informed admission decisions.
          </h4>
        </div>

        {/* RIGHT GRAPH */}
        <div className="relative rounded-3xl bg-white p-10 shadow-xl">
          <h4 className="text-xl font-semibold text-center mb-6 text-foreground">
            MBBS Seat Distribution (Overview)
          </h4>

          <Pie data={data} options={options} />
        </div>

      </div>
    </section>
  )
}
