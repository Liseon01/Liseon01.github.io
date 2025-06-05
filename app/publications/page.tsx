export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <a href="/" className="text-xl font-medium text-gray-700">
              Seokyoung Lee
            </a>
          </div>
          <div className="flex space-x-8">
            <a href="/publications" className="text-blue-500 font-medium">
              Publications
            </a>
            <a href="/code" className="text-gray-600 hover:text-gray-900">
              Code
            </a>
            <a href="/cv" className="text-gray-600 hover:text-gray-900">
              CV
            </a>
            <a href="/teaching" className="text-gray-600 hover:text-gray-900">
              Teaching
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Publications</h1>

        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">2023</h2>
            <ul className="space-y-6">
              <li className="border-l-2 border-gray-200 pl-4 py-1">
                <p className="font-medium mb-1">Title of Publication 1</p>
                <p className="text-sm text-gray-600 mb-2">Authors: Seokyoung Lee, Co-author 1, Co-author 2</p>
                <p className="text-sm text-gray-700">Conference/Journal Name, 2023</p>
                <div className="mt-2 flex space-x-3">
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    PDF
                  </a>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Code
                  </a>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    DOI
                  </a>
                </div>
              </li>

              <li className="border-l-2 border-gray-200 pl-4 py-1">
                <p className="font-medium mb-1">Title of Publication 2</p>
                <p className="text-sm text-gray-600 mb-2">Authors: Seokyoung Lee, Co-author 1, Co-author 2</p>
                <p className="text-sm text-gray-700">Conference/Journal Name, 2023</p>
                <div className="mt-2 flex space-x-3">
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    PDF
                  </a>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Code
                  </a>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    DOI
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">2022</h2>
            <ul className="space-y-6">
              <li className="border-l-2 border-gray-200 pl-4 py-1">
                <p className="font-medium mb-1">Title of Publication 3</p>
                <p className="text-sm text-gray-600 mb-2">Authors: Seokyoung Lee, Co-author 1, Co-author 2</p>
                <p className="text-sm text-gray-700">Conference/Journal Name, 2022</p>
                <div className="mt-2 flex space-x-3">
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    PDF
                  </a>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Code
                  </a>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    DOI
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
