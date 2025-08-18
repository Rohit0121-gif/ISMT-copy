import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Calendar,
  GraduationCap,
  Building,
  Star,
  ChevronRight,
  Quote,
  CheckCircle,
  Globe,
  Microscope,
  Calculator,
  Heart,
  Palette,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ISMTCollegePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full border-2 border-white"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">ISMT College</span>
              <p className="text-xs text-gray-500 -mt-1">Excellence Since 1995</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#programs" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Programs
            </Link>
            <Link href="#admissions" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Admissions
            </Link>
            <Link href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Campus
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="/apply">
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">Apply Now</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800 border-blue-200">
                  🏆 Excellence in Education Since 1995
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Welcome to ISMT College
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                  Empowering students with world-class education, innovative programs, and exceptional opportunities for
                  personal and professional growth in a globally connected world.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/apply">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                    Apply Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                  Schedule Campus Tour
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Accredited Institution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm text-gray-600">Top Ranked Programs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=500&width=600&text=ISMT+College+Campus"
                alt="ISMT College Campus - Modern buildings with students walking"
                width={600}
                height={500}
                className="relative rounded-2xl object-cover shadow-2xl border border-white/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5000+ Students</p>
                    <p className="text-sm text-gray-500">Active Learners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">5,000+</div>
              <div className="text-sm text-gray-600 font-medium">Active Students</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">200+</div>
              <div className="text-sm text-gray-600 font-medium">Expert Faculty</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-sm text-gray-600 font-medium">Academic Programs</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-1">95%</div>
              <div className="text-sm text-gray-600 font-medium">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4">
                  About ISMT College
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Shaping Tomorrow's Leaders Today
                </h2>
                <p className="text-gray-600 md:text-lg leading-relaxed">
                  For over 25 years, ISMT College has been at the forefront of higher education, providing students with
                  comprehensive academic programs and practical skills needed to excel in today's competitive world.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Accredited Excellence</h4>
                    <p className="text-sm text-gray-600">Recognized by National Education Board</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Faculty</h4>
                    <p className="text-sm text-gray-600">Industry professionals and researchers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Globe className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Global Network</h4>
                    <p className="text-sm text-gray-600">International partnerships and exchanges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <BookOpen className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Modern Curriculum</h4>
                    <p className="text-sm text-gray-600">Industry-aligned and future-ready</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Students+in+Modern+Classroom"
                alt="Students collaborating in a modern classroom setting"
                width={600}
                height={500}
                className="rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-xs text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Academic Programs
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Discover Your Path to Success
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Choose from our diverse range of undergraduate and graduate programs designed to prepare you for the
              careers of tomorrow.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Business Administration</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive business education covering management, finance, marketing, and entrepreneurship with
                  real-world applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    4 Years
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Bachelor's
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Internships
                  </Badge>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Business+Students"
                  alt="Business students in discussion"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Computer Science</CardTitle>
                <CardDescription className="text-gray-600">
                  Cutting-edge technology education with focus on software development, AI, cybersecurity, and data
                  science.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    4 Years
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Bachelor's
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Tech Labs
                  </Badge>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Computer+Lab"
                  alt="Students working in computer lab"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Engineering</CardTitle>
                <CardDescription className="text-gray-600">
                  Multiple engineering disciplines including civil, mechanical, electrical, and software engineering
                  with hands-on projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    4 Years
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Bachelor's
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Research
                  </Badge>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Engineering+Lab"
                  alt="Engineering students in laboratory"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Health Sciences</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive healthcare education including nursing, pharmacy, medical technology, and public health
                  programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    4 Years
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Bachelor's
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Clinical
                  </Badge>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Medical+Students"
                  alt="Medical students in clinical setting"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                  <Palette className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Liberal Arts</CardTitle>
                <CardDescription className="text-gray-600">
                  Broad-based education in humanities, social sciences, creative arts, and critical thinking skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    4 Years
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Bachelor's
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Creative
                  </Badge>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Art+Students"
                  alt="Art students in creative workspace"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Microscope className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Graduate Programs</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced degrees including MBA, MS in various fields, and doctoral programs with research
                  opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    1-3 Years
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Master's/PhD
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Research
                  </Badge>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Graduate+Research"
                  alt="Graduate students conducting research"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Student Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">What Our Students Say</h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Hear from our graduates and current students about their transformative experiences at ISMT College.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "ISMT College provided me with not just education, but a complete transformation. The faculty's
                  support and the practical approach to learning prepared me for my dream job in tech."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=Sarah"
                    alt="Sarah Johnson"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Computer Science '23</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "The business program at ISMT gave me real-world experience through internships and projects. I
                  started my own company before graduation!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=Michael"
                    alt="Michael Chen"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-gray-600">Business Admin '22</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-purple-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "The research opportunities and mentorship I received in the graduate program exceeded my
                  expectations. I'm now pursuing my PhD at a top university."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=Emily"
                    alt="Emily Rodriguez"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-gray-600">Engineering MS '23</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section id="campus" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Campus Life
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Experience Campus Excellence
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Discover our state-of-the-art facilities, vibrant student life, and supportive community that makes ISMT
              College feel like home.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Building className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Modern Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      State-of-the-art classrooms, laboratories, and research facilities equipped with the latest
                      technology.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Digital Library</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Extensive collection of books, journals, and digital resources accessible 24/7.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Student Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Over 50 clubs and organizations for diverse interests and leadership development.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Star className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Sports Complex</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Complete sports facilities including gym, courts, fields, and fitness center.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Campus+Facilities"
                alt="ISMT College campus facilities and student areas"
                width={500}
                height={400}
                className="rounded-2xl object-cover shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=250&width=350&text=Student+Dormitories"
                alt="Modern student dormitories"
                width={350}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Student Housing</h4>
                <p className="text-sm opacity-90">Modern dormitories and apartments</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=250&width=350&text=Dining+Hall"
                alt="Campus dining facilities"
                width={350}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Dining Services</h4>
                <p className="text-sm opacity-90">Diverse culinary options and meal plans</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=250&width=350&text=Recreation+Center"
                alt="Campus recreation center"
                width={350}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Recreation Center</h4>
                <p className="text-sm opacity-90">Fitness, wellness, and social activities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Admissions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Start Your Journey With Us
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Learn about our admission process, requirements, and important dates to begin your path to success.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Important Dates</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Application Deadline</span>
                  <Badge className="bg-blue-600">March 15, 2024</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Entrance Exam</span>
                  <Badge className="bg-green-600">April 20, 2024</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Results Announcement</span>
                  <Badge className="bg-purple-600">May 10, 2024</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium">Admission Confirmation</span>
                  <Badge className="bg-orange-600">June 1, 2024</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span>Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-600">Undergraduate Programs:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>High School Diploma or equivalent</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Minimum GPA of 3.0</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Entrance examination</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Personal statement</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-600">Graduate Programs:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Bachelor's degree</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Minimum GPA of 3.5</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>GRE/GMAT scores</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Letters of recommendation</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span>Ready to Apply?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Take the first step towards your future. Our comprehensive application process is designed to help us
                  understand your unique potential.
                </p>
                <div className="space-y-3">
                  <Link href="/apply">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Application
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Brochure
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Schedule Campus Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Contact Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get in Touch</h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Have questions? We're here to help you with admissions, programs, campus visits, and more.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Campus Address</p>
                    <p className="text-sm text-gray-600">
                      123 Education Street
                      <br />
                      Knowledge City, KC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone Numbers</p>
                    <p className="text-sm text-gray-600">
                      Main: +1 (555) 123-4567
                      <br />
                      Admissions: +1 (555) 123-4568
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email Addresses</p>
                    <p className="text-sm text-gray-600">
                      info@ismtcollege.edu
                      <br />
                      admissions@ismtcollege.edu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
                <CardDescription>Visit us during these hours for in-person assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
                <div className="pt-4 space-y-2">
                  <Button className="w-full">Schedule a Campus Visit</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Virtual Tour
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=350&text=Campus+Map"
                alt="ISMT College campus map and location"
                width={350}
                height={400}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-semibold text-lg mb-2">Find Us</h4>
                <p className="text-sm opacity-90">Located in the heart of Knowledge City</p>
                <Button variant="secondary" size="sm" className="mt-3">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Contact Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get in Touch</h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Have questions? We're here to help you with admissions, programs, campus visits, and more.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Campus Address</p>
                    <p className="text-sm text-gray-600">
                      123 Education Street
                      <br />
                      Knowledge City, KC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone Numbers</p>
                    <p className="text-sm text-gray-600">
                      Main: +1 (555) 123-4567
                      <br />
                      Admissions: +1 (555) 123-4568
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email Addresses</p>
                    <p className="text-sm text-gray-600">
                      info@ismtcollege.edu
                      <br />
                      admissions@ismtcollege.edu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
                <CardDescription>Visit us during these hours for in-person assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
                <div className="pt-4 space-y-2">
                  <Button className="w-full">Schedule a Campus Visit</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Virtual Tour
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=350&text=Campus+Map"
                alt="ISMT College campus map and location"
                width={350}
                height={400}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-semibold text-lg mb-2">Find Us</h4>
                <p className="text-sm opacity-90">Located in the heart of Knowledge City</p>
                <Button variant="secondary" size="sm" className="mt-3">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <div>
                  <span className="text-xl font-bold">ISMT College</span>
                  <p className="text-xs text-gray-400 -mt-1">Excellence Since 1995</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering minds, shaping futures. Excellence in education with a commitment to innovation, diversity,
                and student success.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="hover:text-white transition-colors">
                    Academic Programs
                  </Link>
                </li>
                <li>
                  <Link href="#admissions" className="hover:text-white transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#campus" className="hover:text-white transition-colors">
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link href="/apply" className="hover:text-white transition-colors">
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Student Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Digital Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Career Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Financial Aid
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Student Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Course Catalog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Faculty Directory
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Alumni Network
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News & Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                &copy; 2024 ISMT College. All rights reserved. | Privacy Policy | Terms of Service Developed by Rohit kumar Thakur
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Accredited by National Education Board</span>
                <Badge variant="outline" className="text-xs">
                  ISO 9001:2015
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
