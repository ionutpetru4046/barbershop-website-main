"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import router

export default function BookingForm() {
  const router = useRouter(); // ✅ Initialize router

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
    <section id="booking" className="py-16 px-6 bg-gray-100 max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Book Your Appointment
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <input
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <textarea
          placeholder="Additional Notes"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          rows={4}
        />

        <button
          type="submit"
          className="bg-black text-white cursor-pointer py-3 rounded hover:bg-gray-800 transition"
        >
          Book Now
        </button>
      </form>

      {/* ✅ Go Back Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => router.push("/")}
          className="text-black underline hover:text-gray-700 cursor-pointer transition"
        >
          ← Go to Home Page
        </button>
      </div>
    </section>
  );
}
