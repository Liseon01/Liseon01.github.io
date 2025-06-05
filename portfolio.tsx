import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Avatar className="w-32 h-32 md:w-40 md:h-40">
            <AvatarImage src="/placeholder.svg?height=160&width=160" alt="프로필 사진" />
            <AvatarFallback className="text-2xl">김철수</AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">김철수</h1>
            <p className="text-xl text-gray-600 mb-4">풀스택 개발자</p>
            <p className="text-gray-700 max-w-2xl leading-relaxed">
              사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하는 개발자입니다. 새로운 기술을 배우고 적용하는 것에
              열정을 가지고 있으며, 팀과 함께 성장하는 것을 중요하게 생각합니다.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <Button variant="default" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                연락하기
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* 기술 스택 */}
          <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">기술 스택</CardTitle>
              <CardDescription>현재 사용하고 있는 주요 기술들입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-700">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-700">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Django</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-700">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">Figma</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 연락처 정보 */}
          <Card>
            <CardHeader>
              <CardTitle>연락처</CardTitle>
              <CardDescription>언제든지 연락주세요!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-sm">kim.chulsu@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-sm">010-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-sm">서울, 대한민국</span>
              </div>
            </CardContent>
          </Card>

          {/* 프로젝트 */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>주요 프로젝트</CardTitle>
              <CardDescription>최근에 작업한 프로젝트들을 소개합니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="이커머스 프로젝트"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">이커머스 플랫폼</h3>
                  <p className="text-gray-600 text-sm mb-3">React와 Node.js를 사용한 풀스택 이커머스 웹사이트</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      MongoDB
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    프로젝트 보기
                  </Button>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="태스크 관리 앱"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">태스크 관리 앱</h3>
                  <p className="text-gray-600 text-sm mb-3">팀 협업을 위한 실시간 태스크 관리 애플리케이션</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Supabase
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    프로젝트 보기
                  </Button>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="날씨 앱"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">날씨 정보 앱</h3>
                  <p className="text-gray-600 text-sm mb-3">위치 기반 실시간 날씨 정보를 제공하는 모바일 앱</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      React Native
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      API
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Redux
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    프로젝트 보기
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 경력 */}
          <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle>경력</CardTitle>
              <CardDescription>주요 경력 사항입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-200 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">시니어 풀스택 개발자</h3>
                    <span className="text-sm text-gray-500">2022 - 현재</span>
                  </div>
                  <p className="text-gray-600 mb-2">테크 스타트업 ABC</p>
                  <p className="text-sm text-gray-700">
                    • 웹 애플리케이션 개발 및 유지보수
                    <br />• 팀 리딩 및 코드 리뷰
                    <br />• 신규 기능 기획 및 개발
                  </p>
                </div>

                <div className="border-l-2 border-blue-200 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">주니어 개발자</h3>
                    <span className="text-sm text-gray-500">2020 - 2022</span>
                  </div>
                  <p className="text-gray-600 mb-2">소프트웨어 회사 XYZ</p>
                  <p className="text-sm text-gray-700">
                    • 프론트엔드 개발
                    <br />• UI/UX 개선
                    <br />• 버그 수정 및 성능 최적화
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 학력 */}
          <Card>
            <CardHeader>
              <CardTitle>학력</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">컴퓨터공학과</h3>
                  <p className="text-gray-600 text-sm">서울대학교</p>
                  <p className="text-gray-500 text-sm">2016 - 2020</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
