"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { User, GraduationCap, FileText, CheckCircle, ChevronLeft, ChevronRight, Upload } from "lucide-react"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  nationality: string
  address: string
  city: string
  state: string
  zipCode: string

  // Academic Background
  highSchoolName: string
  graduationYear: string
  gpa: string
  previousCollege: string
  previousDegree: string

  // Program Selection
  programType: string
  program: string
  startTerm: string

  // Essays and Additional Info
  personalStatement: string
  whyISMT: string
  careerGoals: string
  extracurriculars: string

  // Documents
  hasTranscripts: boolean
  hasRecommendations: boolean
  hasTestScores: boolean

  // Agreement
  agreeToTerms: boolean
  agreeToContact: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  highSchoolName: "",
  graduationYear: "",
  gpa: "",
  previousCollege: "",
  previousDegree: "",
  programType: "",
  program: "",
  startTerm: "",
  personalStatement: "",
  whyISMT: "",
  careerGoals: "",
  extracurriculars: "",
  hasTranscripts: false,
  hasRecommendations: false,
  hasTestScores: false,
  agreeToTerms: false,
  agreeToContact: false,
}

const programs = {
  undergraduate: [
    "Business Administration",
    "Computer Science",
    "Engineering",
    "Health Sciences",
    "Liberal Arts",
    "Psychology",
    "Communications",
  ],
  graduate: [
    "MBA - Master of Business Administration",
    "MS Computer Science",
    "MS Engineering",
    "MS Health Sciences",
    "MA Liberal Arts",
    "MS Psychology",
  ],
}

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1: // Personal Information
        if (!formData.firstName) newErrors.firstName = "First name is required"
        if (!formData.lastName) newErrors.lastName = "Last name is required"
        if (!formData.email) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
        if (!formData.phone) newErrors.phone = "Phone number is required"
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
        if (!formData.gender) newErrors.gender = "Gender is required"
        if (!formData.address) newErrors.address = "Address is required"
        if (!formData.city) newErrors.city = "City is required"
        break

      case 2: // Academic Background
        if (!formData.highSchoolName) newErrors.highSchoolName = "High school name is required"
        if (!formData.graduationYear) newErrors.graduationYear = "Graduation year is required"
        if (!formData.gpa) newErrors.gpa = "GPA is required"
        break

      case 3: // Program Selection
        if (!formData.programType) newErrors.programType = "Program type is required"
        if (!formData.program) newErrors.program = "Program is required"
        if (!formData.startTerm) newErrors.startTerm = "Start term is required"
        break

      case 4: // Essays
        if (!formData.personalStatement) newErrors.personalStatement = "Personal statement is required"
        if (!formData.whyISMT) newErrors.whyISMT = "This field is required"
        break

      case 5: // Final Review
        if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setIsSubmitted(true)
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your application to ISMT College. We have received your information and will review it
            shortly.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm">
              <strong>Application ID:</strong> ISMT-{Date.now()}
            </p>
            <p className="text-sm mt-1">
              You will receive a confirmation email at <strong>{formData.email}</strong> within 24 hours.
            </p>
          </div>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(1)
              setFormData(initialFormData)
            }}
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle>Application for Admission</CardTitle>
            <Badge variant="outline">
              Step {currentStep} of {totalSteps}
            </Badge>
          </div>
          <Progress value={progress} className="w-full" />
          <CardDescription>Complete all steps to submit your application to ISMT College</CardDescription>
        </CardHeader>
      </Card>

      {/* Form Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {currentStep === 1 && <User className="h-5 w-5" />}
            {currentStep === 2 && <GraduationCap className="h-5 w-5" />}
            {currentStep === 3 && <FileText className="h-5 w-5" />}
            {currentStep === 4 && <FileText className="h-5 w-5" />}
            {currentStep === 5 && <CheckCircle className="h-5 w-5" />}
            <span>
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Academic Background"}
              {currentStep === 3 && "Program Selection"}
              {currentStep === 4 && "Essays & Additional Information"}
              {currentStep === 5 && "Review & Submit"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                    className={errors.dateOfBirth ? "border-red-500" : ""}
                  />
                  {errors.dateOfBirth && <p className="text-sm text-red-500 mt-1">{errors.dateOfBirth}</p>}
                </div>
                <div>
                  <Label>Gender *</Label>
                  <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                    <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-sm text-red-500 mt-1">{errors.gender}</p>}
                </div>
                <div>
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input
                    id="nationality"
                    value={formData.nationality}
                    onChange={(e) => updateFormData("nationality", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateFormData("address", e.target.value)}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && <p className="text-sm text-red-500 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" value={formData.state} onChange={(e) => updateFormData("state", e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData("zipCode", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Academic Background */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="highSchoolName">High School Name *</Label>
                  <Input
                    id="highSchoolName"
                    value={formData.highSchoolName}
                    onChange={(e) => updateFormData("highSchoolName", e.target.value)}
                    className={errors.highSchoolName ? "border-red-500" : ""}
                  />
                  {errors.highSchoolName && <p className="text-sm text-red-500 mt-1">{errors.highSchoolName}</p>}
                </div>
                <div>
                  <Label htmlFor="graduationYear">Graduation Year *</Label>
                  <Select
                    value={formData.graduationYear}
                    onValueChange={(value) => updateFormData("graduationYear", value)}
                  >
                    <SelectTrigger className={errors.graduationYear ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() - i
                        return (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                  {errors.graduationYear && <p className="text-sm text-red-500 mt-1">{errors.graduationYear}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="gpa">GPA/Grade Average *</Label>
                <Input
                  id="gpa"
                  placeholder="e.g., 3.8 or 85%"
                  value={formData.gpa}
                  onChange={(e) => updateFormData("gpa", e.target.value)}
                  className={errors.gpa ? "border-red-500" : ""}
                />
                {errors.gpa && <p className="text-sm text-red-500 mt-1">{errors.gpa}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="previousCollege">Previous College/University (if any)</Label>
                  <Input
                    id="previousCollege"
                    value={formData.previousCollege}
                    onChange={(e) => updateFormData("previousCollege", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="previousDegree">Previous Degree (if any)</Label>
                  <Input
                    id="previousDegree"
                    value={formData.previousDegree}
                    onChange={(e) => updateFormData("previousDegree", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Program Selection */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <Label>Program Type *</Label>
                <RadioGroup
                  value={formData.programType}
                  onValueChange={(value) => {
                    updateFormData("programType", value)
                    updateFormData("program", "") // Reset program selection
                  }}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="undergraduate" id="undergraduate" />
                    <Label htmlFor="undergraduate">Undergraduate (Bachelor's Degree)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="graduate" id="graduate" />
                    <Label htmlFor="graduate">Graduate (Master's/PhD)</Label>
                  </div>
                </RadioGroup>
                {errors.programType && <p className="text-sm text-red-500 mt-1">{errors.programType}</p>}
              </div>

              {formData.programType && (
                <div>
                  <Label>Select Program *</Label>
                  <Select value={formData.program} onValueChange={(value) => updateFormData("program", value)}>
                    <SelectTrigger className={errors.program ? "border-red-500" : ""}>
                      <SelectValue placeholder="Choose your program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs[formData.programType as keyof typeof programs]?.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.program && <p className="text-sm text-red-500 mt-1">{errors.program}</p>}
                </div>
              )}

              <div>
                <Label>Preferred Start Term *</Label>
                <Select value={formData.startTerm} onValueChange={(value) => updateFormData("startTerm", value)}>
                  <SelectTrigger className={errors.startTerm ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select start term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fall-2024">Fall 2024</SelectItem>
                    <SelectItem value="spring-2025">Spring 2025</SelectItem>
                    <SelectItem value="summer-2025">Summer 2025</SelectItem>
                    <SelectItem value="fall-2025">Fall 2025</SelectItem>
                  </SelectContent>
                </Select>
                {errors.startTerm && <p className="text-sm text-red-500 mt-1">{errors.startTerm}</p>}
              </div>
            </div>
          )}

          {/* Step 4: Essays */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="personalStatement">Personal Statement *</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Tell us about yourself, your background, and what makes you unique. (500-1000 words)
                </p>
                <Textarea
                  id="personalStatement"
                  rows={6}
                  value={formData.personalStatement}
                  onChange={(e) => updateFormData("personalStatement", e.target.value)}
                  className={errors.personalStatement ? "border-red-500" : ""}
                />
                {errors.personalStatement && <p className="text-sm text-red-500 mt-1">{errors.personalStatement}</p>}
              </div>

              <div>
                <Label htmlFor="whyISMT">Why ISMT College? *</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  What attracts you to ISMT College and your chosen program? (300-500 words)
                </p>
                <Textarea
                  id="whyISMT"
                  rows={4}
                  value={formData.whyISMT}
                  onChange={(e) => updateFormData("whyISMT", e.target.value)}
                  className={errors.whyISMT ? "border-red-500" : ""}
                />
                {errors.whyISMT && <p className="text-sm text-red-500 mt-1">{errors.whyISMT}</p>}
              </div>

              <div>
                <Label htmlFor="careerGoals">Career Goals</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Describe your career aspirations and how this program will help you achieve them.
                </p>
                <Textarea
                  id="careerGoals"
                  rows={4}
                  value={formData.careerGoals}
                  onChange={(e) => updateFormData("careerGoals", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="extracurriculars">Extracurricular Activities</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  List your involvement in clubs, sports, volunteer work, or other activities.
                </p>
                <Textarea
                  id="extracurriculars"
                  rows={3}
                  value={formData.extracurriculars}
                  onChange={(e) => updateFormData("extracurriculars", e.target.value)}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Upload className="h-4 w-4 mr-2" />
                  Required Documents
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Please confirm you have the following documents ready to upload:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="transcripts"
                      checked={formData.hasTranscripts}
                      onCheckedChange={(checked) => updateFormData("hasTranscripts", checked as boolean)}
                    />
                    <Label htmlFor="transcripts" className="text-sm">
                      Official transcripts from all previous schools
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="recommendations"
                      checked={formData.hasRecommendations}
                      onCheckedChange={(checked) => updateFormData("hasRecommendations", checked as boolean)}
                    />
                    <Label htmlFor="recommendations" className="text-sm">
                      Letters of recommendation (2-3 required)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="testScores"
                      checked={formData.hasTestScores}
                      onCheckedChange={(checked) => updateFormData("hasTestScores", checked as boolean)}
                    />
                    <Label htmlFor="testScores" className="text-sm">
                      Standardized test scores (SAT/ACT for undergrad, GRE/GMAT for grad)
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Application Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>
                      <strong>Name:</strong> {formData.firstName} {formData.lastName}
                    </p>
                    <p>
                      <strong>Email:</strong> {formData.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {formData.phone}
                    </p>
                    <p>
                      <strong>Date of Birth:</strong> {formData.dateOfBirth}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Program Type:</strong> {formData.programType}
                    </p>
                    <p>
                      <strong>Program:</strong> {formData.program}
                    </p>
                    <p>
                      <strong>Start Term:</strong> {formData.startTerm}
                    </p>
                    <p>
                      <strong>High School:</strong> {formData.highSchoolName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the{" "}
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      Terms and Conditions
                    </Button>{" "}
                    and confirm that all information provided is accurate. *
                  </Label>
                </div>
                {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToContact"
                    checked={formData.agreeToContact}
                    onCheckedChange={(checked) => updateFormData("agreeToContact", checked as boolean)}
                  />
                  <Label htmlFor="agreeToContact" className="text-sm">
                    I agree to receive communications from ISMT College regarding my application and enrollment.
                  </Label>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> After submitting this application, you will receive an email with instructions
                  for uploading your required documents and paying the application fee ($50).
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Card>
        <CardContent className="flex justify-between items-center py-4">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </div>

          {currentStep < totalSteps ? (
            <Button onClick={nextStep} className="flex items-center space-x-2">
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              Submit Application
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
