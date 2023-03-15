import Button from '@/components/atoms/Button'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col justify-between">
      <div id="form-content" className="flex flex-col gap-[2rem] px-4 py-[2rem]">
        <div>
          <ul className="flex items-center justify-center gap-4">
            <li className="relative rounded-full bg-form-blue-sky p-5">
            <span
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-form-denim">1</span>
            </li>
            <li className="relative box-border rounded-full border border-white p-5">
            <span
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">2</span>
            </li>
            <li className="relative box-border rounded-full border border-white p-5">
            <span
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">3</span>
            </li>
            <li className="relative box-border rounded-full border border-white p-5">
            <span
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">4</span>
            </li>
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
      </div>

      <div id="form-footer" className="flex justify-between bg-white p-4">
        <Button text="go back" background={false}/>
        <Button text="next step"/>
      </div>
    </main>
  )
}
