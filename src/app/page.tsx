export default function Home() {
  return (
    <main className="flex flex-col gap-[2rem] px-4 py-[2rem]">
      <div>
        <ul className="flex gap-4">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>

      <form className="rounded-md bg-white py-[2rem] px-6">
        <h1>Personal info</h1>

        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <p className="body_large mt-3 mb-5">
          Please provide your name, email address, and phone number.
        </p>

        {/* Input */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-form-denim">Name</label>
            <input type="text" name="name" placeholder="e.g. stephen king"
                   className="rounded border border-form-gray-light px-4 py-3 font-form font-medium capitalize text-form-gray-normal"/>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-form-denim">Email Address</label>
            <input type="text" name="email" placeholder="e.g. stephenking@lorem.com"
                   className="rounded border border-form-gray-light px-4 py-3 font-form font-medium text-form-gray-normal"/>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-form-denim">Phone Number</label>
            <input type="text" name="phone" placeholder="e.g. +1 234 567 890"
                   className="rounded border border-form-gray-light px-4 py-3 font-form font-medium text-form-gray-normal"/>
          </div>
        </div>
      </form>
    </main>
  )
}
