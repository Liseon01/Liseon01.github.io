"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Mail,
  Github,
  MapPin,
  Phone,
  ExternalLink,
  Moon,
  Sun,
  Code,
  GraduationCap,
  User,
  Briefcase,
  Award,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Seokyoung Lee</h1>

          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Seokyoung Lee</h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                Computer & Information Engineering Student
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl">
                광운대학교 컴퓨터정보공학부에서 학습하며, 혁신적인 기술로 세상을 변화시키는 개발자가 되고자 합니다.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-white dark:border-gray-700 shadow-2xl">
                <AvatarImage src="/placeholder.svg?height=320&width=320" alt="Seokyoung Lee" />
                <AvatarFallback className="text-4xl">SL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">자기소개</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                안녕하세요! 광운대학교 컴퓨터정보공학부에서 학습하고 있는 이석영입니다. 새로운 기술을 배우고 적용하는
                것을 좋아하며, 사용자 중심의 소프트웨어를 개발하는 것에 관심이 많습니다.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">관심 분야</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">웹 개발</Badge>
                <Badge variant="secondary">모바일 앱 개발</Badge>
                <Badge variant="secondary">인공지능</Badge>
                <Badge variant="secondary">데이터 사이언스</Badge>
                <Badge variant="secondary">클라우드 컴퓨팅</Badge>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">현재 학습 중</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>React.js와 Next.js를 활용한 모던 웹 개발</li>
                <li>Python을 이용한 머신러닝과 데이터 분석</li>
                <li>AWS 클라우드 서비스</li>
                <li>Docker와 Kubernetes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">기술 스택</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Java</Badge>
                    <Badge>Python</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>C++</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Web Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>HTML/CSS</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Node.js</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>AWS</Badge>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">취미 & 특징</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>오픈소스 프로젝트 기여</li>
                <li>기술 블로그 작성</li>
                <li>개발 커뮤니티 참여</li>
                <li>새로운 프로그래밍 언어 학습</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">광운대학교</h3>
                  <p className="text-gray-600 dark:text-gray-400">컴퓨터정보공학부</p>
                </div>
              </CardTitle>
              <CardDescription>2020 - 2024 (예정)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">주요 수강 과목</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 자료구조와 알고리즘</li>
                    <li>• 객체지향 프로그래밍</li>
                    <li>• 데이터베이스 시스템</li>
                    <li>• 웹 프로그래밍</li>
                    <li>• 소프트웨어 공학</li>
                    <li>• 컴퓨터 네트워크</li>
                    <li>• 운영체제</li>
                    <li>• 인공지능</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">성과 & 자격증</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 학점: 3.8/4.5</li>
                    <li>• 정보처리기사 (2023)</li>
                    <li>• SQLD (2023)</li>
                    <li>• TOEIC 850점 (2022)</li>
                    <li>• 컴활 1급 (2021)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>React와 Node.js를 사용한 풀스택 쇼핑몰</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  사용자 인증, 상품 관리, 결제 시스템을 포함한 완전한 이커머스 플랫폼
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Task Management App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>팀 협업을 위한 실시간 태스크 관리 도구</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  실시간 채팅, 파일 공유, 진행률 추적 기능을 포함한 프로젝트 관리 앱
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Supabase</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="AI Chatbot"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <CardTitle>AI Chatbot</CardTitle>
                <CardDescription>자연어 처리를 활용한 고객 서비스 봇</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  OpenAI API를 활용하여 고객 문의에 자동으로 응답하는 챗봇 시스템
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">OpenAI</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">React</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">JavaScript</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">TypeScript</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">CSS/Tailwind</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Node.js</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Python</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Java</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Express</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">MySQL</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">MongoDB</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PostgreSQL</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Redis</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Git</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Docker</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AWS</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Linux</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience & Activities</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">프론트엔드 개발 인턴</h3>
                    <p className="text-gray-600 dark:text-gray-400">테크 스타트업 ABC • 2023.06 - 2023.08</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>React.js를 사용한 웹 애플리케이션 개발</li>
                  <li>UI/UX 개선 작업 및 반응형 디자인 구현</li>
                  <li>REST API 연동 및 상태 관리 최적화</li>
                  <li>코드 리뷰 참여 및 팀 협업 경험</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">해커톤 참여</h3>
                    <p className="text-gray-600 dark:text-gray-400">광운대학교 해커톤 • 2023.03</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>24시간 해커톤에서 팀 리더로 참여</li>
                  <li>AI 기반 학습 도우미 앱 개발</li>
                  <li>우수상 수상 (3위)</li>
                  <li>팀워크 및 빠른 프로토타이핑 경험</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">컴퓨터공학과 학회 활동</h3>
                    <p className="text-gray-600 dark:text-gray-400">광운대학교 KICS • 2021 - 2023</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>학회 부회장 역임 (2022-2023)</li>
                  <li>신입생 대상 프로그래밍 교육 진행</li>
                  <li>정기 세미나 및 스터디 그룹 운영</li>
                  <li>학과 행사 기획 및 운영</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">오픈소스 기여</h3>
                    <p className="text-gray-600 dark:text-gray-400">GitHub • 2022 - 현재</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>React 관련 오픈소스 프로젝트에 기여</li>
                  <li>버그 수정 및 기능 개선 PR 제출</li>
                  <li>문서화 작업 참여</li>
                  <li>커뮤니티 활동 및 이슈 해결</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact</h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-8 text-gray-900 dark:text-white">연락처 정보</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">이메일</h4>
                <a href="mailto:seokyoung.lee@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  seokyoung.lee@example.com
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">전화번호</h4>
                <span className="text-gray-700 dark:text-gray-300">010-1234-5678</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">위치</h4>
                <span className="text-gray-700 dark:text-gray-300">서울, 대한민국</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">소셜 미디어</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Seokyoung Lee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
