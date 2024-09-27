export default function ContactUs() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold self-center mb-10">Contact Us</h1>
      <p>
        You may contact us by filling out this form, or by emailing us at
        customerservice@tidesofliberty.com.
      </p>
      <h2 className="text-2xl font-bold self-center mb-0">Form</h2>
      <p className="text-sm">
        Please fill out the form to contact us and we will get back to you right
        away.
      </p>
      <form className="w-full max-w-[35rem] flex flex-col gap-2 items-center">
        <label htmlFor="name" className="font-bold text-sm w-full">
          Name
          <input
            name="name"
            type="text"
            className="border-black border-2 rounded p-2 text-sm block w-full mt-1"
            placeholder="Your Name*"
          />
        </label>
        <label htmlFor="name" className="font-bold text-sm w-full">
          Email
          <input
            name="email"
            type="email"
            className="border-black border-2 rounded p-2 text-sm block w-full mt-1"
            placeholder="Your email address*"
          />
        </label>
        <label htmlFor="name" className="font-bold text-sm w-full">
          Subject
          <input
            name="subject"
            type="text"
            className="border-black border-2 rounded p-2 text-sm block w-full mt-1"
            placeholder="Your Subject*"
          />
        </label>
        <label htmlFor="name" className="font-bold text-sm w-full">
          Message
          <textarea
            name="message"
            className="border-black border-2 rounded p-2 text-sm block w-full mt-1"
            placeholder="Your Message...*"
            rows={3}
          />
        </label>
        <button
          type="submit"
          className="mt-6 py-2 px-8 rounded bg-teal-500 text-white text-sm font-bold tracking-widest"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
