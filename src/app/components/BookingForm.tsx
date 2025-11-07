"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !date || !time) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`Thank you, ${name}! Your booking is scheduled for ${date} at ${time}.`);

    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setMessage("");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Book Your Appointment
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          />

          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          />

          <div className="flex gap-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition flex-1"
              required
            />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition flex-1"
              required
            />
          </div>

          <textarea
            placeholder="Additional Notes"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            rows={4}
          />

          <button
            type="submit"
            className="bg-black text-white cursor-pointer py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Book Now
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/")}
            className="text-gray-600 underline hover:text-gray-800 transition cursor-pointer"
          >
            ← Go to Home Page
          </button>
        </div>
      </div>
    </section>
  );
}
