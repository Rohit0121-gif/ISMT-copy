import ApplicationForm from "@/components/application-form"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Apply to ISMT College</h1>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Take the first step towards your future. Complete our comprehensive application form to join the ISMT
            College community.
          </p>
        </div>
        <ApplicationForm />
      </div>
    </div>
  )
}
