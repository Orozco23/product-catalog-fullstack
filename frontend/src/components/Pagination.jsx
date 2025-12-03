import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


export default function Pagination() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex space-x-4 rounded-md shadow-xs">
            <a
              href="#"
              className="relative inline-flex items-center rounded-4xl px-3 py-4 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </a>
            {/* Current: "z-10 bg-custom-blue text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue", Default: "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center rounded-4xl bg-blue-500 px-6 py-4 text-sm font-bold text-gray-100 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-4xl px-6 py-4 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <span className="relative inline-flex items-center rounded-4xl px-6 py-4 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center rounded-4xl px-6 py-4 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-4xl px-6 py-4 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-4xl px-3 py-4 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
