import { Github, ExternalLink } from "lucide-react"

export default function CodePage() {
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
            <a href="/publications" className="text-gray-600 hover:text-gray-900">
              Publications
            </a>
            <a href="/code" className="text-blue-500 font-medium">
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
        <h1 className="text-3xl font-bold mb-8">Code & Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Project Name 1</h2>
            <p className="text-gray-700 mb-4">
              A brief description of the project, what it does, and what technologies were used.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center text-blue-500 hover:underline">
                <Github className="h-4 w-4 mr-1" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center text-blue-500 hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>Demo</span>
              </a>
            </div>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Project Name 2</h2>
            <p className="text-gray-700 mb-4">
              A brief description of the project, what it does, and what technologies were used.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center text-blue-500 hover:underline">
                <Github className="h-4 w-4 mr-1" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center text-blue-500 hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>Demo</span>
              </a>
            </div>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Project Name 3</h2>
            <p className="text-gray-700 mb-4">
              A brief description of the project, what it does, and what technologies were used.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center text-blue-500 hover:underline">
                <Github className="h-4 w-4 mr-1" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center text-blue-500 hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
