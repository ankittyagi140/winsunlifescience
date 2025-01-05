'use client';

interface JobListing {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobListings: JobListing[] = [
 
  // Add more job listings as needed
];

const CareerPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4 bg-white py-16">
            <h1 className="text-4xl font-bold text-primary">Join Our Team</h1>
            <p className="text-xl text-gray-600">Be part of our mission to improve healthcare</p>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6 bg-white">
            {jobListings.map((job, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold text-primary">{job.title}</h2>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600">{job.department} · {job.location}</p>
                      <p className="text-gray-600">{job.type}</p>
                    </div>
                    <p className="mt-4 text-gray-700 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Join Us Section */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Why Join Winsun Life Sciences?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="text-primary text-4xl">🌱</div>
                <h3 className="font-semibold text-xl">Growth Opportunities</h3>
                <p className="text-gray-600">Continuous learning and career advancement paths</p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-primary text-4xl">🤝</div>
                <h3 className="font-semibold text-xl">Collaborative Culture</h3>
                <p className="text-gray-600">Work with talented professionals in a supportive environment</p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-primary text-4xl">💪</div>
                <h3 className="font-semibold text-xl">Impactful Work</h3>
                <p className="text-gray-600">Make a difference in healthcare and patient lives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;