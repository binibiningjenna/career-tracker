import { ClipboardIcon, PaperAirplaneIcon, ChatBubbleLeftRightIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 pt-8 sm:pt-8 mt-2 sm:mt-8 max-w-7xl">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pb-1 sm:pb-2 inline-block">
            Overview
          </h1>
          <div className="w-16 border-b-2 border-gray-300 mb-3"></div>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Summary of your application statuses
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* Total Applications */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4 hover:shadow-lg transition-shadow duration-200 group">
            <div className="p-3 bg-blue-100 rounded-full transform transition-transform duration-200 group-hover:scale-110">
              <ClipboardIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Applications</p>
              <p className="text-2xl font-bold">30</p>
            </div>
          </div>

          {/* Applied */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4 hover:shadow-lg transition-shadow duration-200 group">
            <div className="p-3 bg-green-100 rounded-full transform transition-transform duration-200 group-hover:scale-110">
              <PaperAirplaneIcon className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Applied</p>
              <p className="text-2xl font-bold">50</p>
            </div>
          </div>

          {/* Interview */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4 hover:shadow-lg transition-shadow duration-200 group">
            <div className="p-3 bg-yellow-100 rounded-full transform transition-transform duration-200 group-hover:scale-110">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Interview</p>
              <p className="text-2xl font-bold">20</p>
            </div>
          </div>

          {/* Rejected */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4 hover:shadow-lg transition-shadow duration-200 group">
            <div className="p-3 bg-red-100 rounded-full transform transition-transform duration-200 group-hover:scale-110">
              <XCircleIcon className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Rejected</p>
              <p className="text-2xl font-bold">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
