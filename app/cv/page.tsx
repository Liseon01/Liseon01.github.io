import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CVPage() {
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
            <a href="/code" className="text-gray-600 hover:text-gray-900">
              Code
            </a>
            <a href="/cv" className="text-blue-500 font-medium">
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">B.S. in Computer Science</h3>
                <p className="text-gray-700">
                  Kwangwoon University, School of Computer and Information Engineering, 20XX-20XX
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Bachelor's Degree Holder</h3>
                <p className="text-gray-700">
                  Kwangwoon University, School of Computer and Information Engineering, 20XX-Present
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                  <li>Description of activities and achievements</li>
                  <li>Description of activities and achievements</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Academic Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Student Activities</h3>
                <p className="text-gray-700">
                  Kwangwoon University, School of Computer and Information Engineering, 20XX-Present
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                  <li>Description of student activities and achievements</li>
                  <li>Description of student activities and achievements</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Research Interests</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cyber Security</li>
              <li>Machine Learning</li>
              <li>User Authentication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Programming Languages</h3>
                <p className="text-gray-700">Python, Java, C++, JavaScript</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Tools & Technologies</h3>
                <p className="text-gray-700">TensorFlow, PyTorch, Git, Docker</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
