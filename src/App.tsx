import { Briefcase, Globe, PenTool, ShoppingBag, Laptop, Smartphone } from 'lucide-react';
import Navbar from './components/Navbar';
import OpportunityCard from './components/OpportunityCard';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Turn Your Skills Into Income
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover legitimate ways to earn money online in Africa
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Start Earning Today
            </button>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Income Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OpportunityCard
              title="Freelance Writing"
              description="Write content for businesses worldwide and earn in USD."
              icon={<PenTool className="h-6 w-6 text-blue-600" />}
              earnings="$200-$1000/month"
            />
            <OpportunityCard
              title="Digital Marketing"
              description="Help businesses grow their online presence."
              icon={<Globe className="h-6 w-6 text-blue-600" />}
              earnings="$300-$2000/month"
            />
            <OpportunityCard
              title="E-commerce"
              description="Start your online store and sell products globally."
              icon={<ShoppingBag className="h-6 w-6 text-blue-600" />}
              earnings="$500-$3000/month"
            />
            <OpportunityCard
              title="Virtual Assistant"
              description="Provide remote assistance to entrepreneurs."
              icon={<Laptop className="h-6 w-6 text-blue-600" />}
              earnings="$400-$1500/month"
            />
            <OpportunityCard
              title="App Testing"
              description="Test apps and websites for companies."
              icon={<Smartphone className="h-6 w-6 text-blue-600" />}
              earnings="$100-$500/month"
            />
            <OpportunityCard
              title="Online Consulting"
              description="Share your expertise with clients globally."
              icon={<Briefcase className="h-6 w-6 text-blue-600" />}
              earnings="$1000-$5000/month"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Connect-Afri</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Verified Opportunities</h3>
              <p className="text-gray-600">All opportunities are thoroughly vetted to ensure legitimacy.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Get mentorship from successful online entrepreneurs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">African Focus</h3>
              <p className="text-gray-600">Opportunities tailored for the African market and context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Okonjo"
              role="Freelance Writer"
              content="Connect-Afri helped me start my freelance writing career. Now I earn more than my previous 9-5 job!"
              image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800"
              earnings="$1,200/month"
            />
            <TestimonialCard
              name="John Mensah"
              role="Digital Marketer"
              content="The mentorship program was a game-changer. I learned how to attract international clients."
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800"
              earnings="$2,500/month"
            />
            <TestimonialCard
              name="Amina Diallo"
              role="E-commerce Entrepreneur"
              content="Started my online store through Connect-Afri's guidance. Now shipping products worldwide!"
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800"
              earnings="$3,000/month"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of Africans already earning online</p>
          <form className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-gray-900 mb-4"
            />
            <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Globe className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">Connect-Afri</span>
          </div>
          <p className="mb-4">Empowering Africans through digital opportunities</p>
          <div className="text-sm">
            © {new Date().getFullYear()} Connect-Afri. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;