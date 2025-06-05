export default function TeachingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <a href="/" className="text-xl font-medium text-gray-700">
              Jihyeon Ryu
            </a>
          </div>
          <div className="flex space-x-8">
            <a href="/publications" className="text-gray-600 hover:text-gray-900">
              Publications
            </a>
            <a href="/code" className="text-gray-600 hover:text-gray-900">
              Code
            </a>
            <a href="/cv" className="text-gray-600 hover:text-gray-900">
              CV
            </a>
            <a href="/teaching" className="text-blue-500 font-medium">
              Teaching
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Teaching</h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Current Courses (2023 Fall)</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-gray-200 pl-4 py-1">
                <h3 className="font-medium text-lg mb-2">Course Title 1</h3>
                <p className="text-gray-700 mb-2">Course Code: CS101</p>
                <p className="text-gray-700 mb-2">Schedule: Monday and Wednesday, 10:00 AM - 11:30 AM</p>
                <p className="text-gray-700 mb-4">Location: Building A, Room 101</p>
                <a href="#" className="text-blue-500 hover:underline">
                  Course Website
                </a>
              </div>

              <div className="border-l-2 border-gray-200 pl-4 py-1">
                <h3 className="font-medium text-lg mb-2">Course Title 2</h3>
                <p className="text-gray-700 mb-2">Course Code: CS202</p>
                <p className="text-gray-700 mb-2">Schedule: Tuesday and Thursday, 2:00 PM - 3:30 PM</p>
                <p className="text-gray-700 mb-4">Location: Building B, Room 205</p>
                <a href="#" className="text-blue-500 hover:underline">
                  Course Website
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Previous Courses</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">2023 Spring</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Course Title 3 (CS303)</li>
                  <li>Course Title 4 (CS404)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">2022 Fall</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Course Title 5 (CS505)</li>
                  <li>Course Title 6 (CS606)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Student Advising</h2>
            <p className="text-gray-700 mb-4">
              I am currently accepting new graduate students interested in Cyber Security, Machine Learning, and User
              Authentication. Please email me if you are interested in joining our research group.
            </p>

            <h3 className="font-medium text-lg mb-2">Current Students</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Student Name 1 (Ph.D. Student, 20XX-Present)</li>
              <li>Student Name 2 (M.S. Student, 20XX-Present)</li>
              <li>Student Name 3 (Undergraduate Researcher, 20XX-Present)</li>
            </ul>

            <h3 className="font-medium text-lg mb-2">Alumni</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Student Name 4 (Ph.D., 20XX) - Now at Company/University</li>
              <li>Student Name 5 (M.S., 20XX) - Now at Company/University</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
