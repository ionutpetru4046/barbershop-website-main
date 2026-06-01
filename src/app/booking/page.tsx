import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-[var(--sand)] p-8 sm:p-10">
          <BookingForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
