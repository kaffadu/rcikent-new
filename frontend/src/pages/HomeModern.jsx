import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Church,
  Heart,
  BookOpen,
  Users,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Send,
  Menu,
  X,
  Play,
  ArrowRight,
  Calendar,
  Clock
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [prayerForm, setPrayerForm] = useState({ name: '', email: '', request: '' });
  const [connectForm, setConnectForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const featuredVideos = [
    {
      id: 1,
      title: "Sunday Service - God's Love",
      description: "Experience powerful worship and teaching",
      videoId: "KFpzbTPWXkY",
      category: "Sermon"
    },
    {
      id: 2,
      title: "Worship Night Highlights",
      description: "Celebrating God's presence together",
      videoId: "mhHkV-jXRCQ",
      category: "Worship"
    },
    {
      id: 3,
      title: "Testimony - Changed Life",
      description: "Stories of transformation through faith",
      videoId: "7hIGKVe4wz0",
      category: "Testimony"
    },
    {
      id: 4,
      title: "Community Outreach",
      description: "Serving our community with love",
      videoId: "Zp0N5PJxamE",
      category: "Ministry"
    },
    {
      id: 5,
      title: "Prayer and Intercession",
      description: "Join us in powerful corporate prayer",
      videoId: "qPbSkDaPZVs",
      category: "Prayer"
    },
    {
      id: 6,
      title: "Youth Service Highlights",
      description: "Next generation worship and teaching",
      videoId: "3gJ3vxZ6r_U",
      category: "Youth"
    }
  ];

  const handlePrayerSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Prayer Request Submitted",
      description: "We will be praying for you. God bless you!",
    });
    setPrayerForm({ name: '', email: '', request: '' });
  };

  const handleConnectSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thank You for Connecting!",
      description: "We'll be in touch with you soon.",
    });
    setConnectForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-lg shadow-sm z-50 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/8k2u4zsp_IMG_0615.jpeg" 
                alt="Royalhouse Chapel Kent Mission" 
                className="w-14 h-14 rounded-full object-cover shadow-md"
              />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Royalhouse Chapel</h1>
                <p className="text-xs text-blue-700 font-semibold">Kent Mission</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-slate-900 font-semibold hover:text-blue-700 transition-colors">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-700 transition-colors">About</a>
              <a href="#vision" className="text-slate-700 hover:text-blue-700 transition-colors">Vision</a>
              <a href="/gallery" className="text-slate-700 hover:text-blue-700 transition-colors">Gallery</a>
              <a href="/give" className="text-slate-700 hover:text-blue-700 transition-colors">Support Us</a>
              <Button 
                size="sm"
                className="bg-blue-700 hover:bg-blue-800 text-white"
                onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Connected
              </Button>
            </nav>
            <button 
              className="md:hidden text-slate-700 hover:text-blue-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a href="/" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#vision" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Vision</a>
              <a href="/gallery" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="/give" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Support Us</a>
              <a href="#prayer" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Prayer</a>
              <a href="#connect" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Connect</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/0cedpo9t_IMG_0618.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">Join us Sundays at 10:00 AM</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to<br />
              <span className="text-blue-200">Royalhouse Chapel</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              A Christ-centered, Bible-believing church committed to worship, discipleship, and community impact
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-6 text-lg shadow-xl"
                onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
              >
                Plan Your Visit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg backdrop-blur-sm"
                onClick={() => document.getElementById('videos').scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Messages
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Service Times */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">Sunday Service</p>
                <p className="text-lg font-bold text-slate-900">10:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">Location</p>
                <p className="text-lg font-bold text-slate-900">Northfleet Technology College</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Recent Messages & Highlights</h2>
            <p className="text-xl text-slate-600">Catch up on what God is doing in our church family</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <Card 
                key={video.id}
                className="group overflow-hidden border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video bg-slate-900">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-blue-700 text-white text-xs font-semibold rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-slate-600">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We are a family of believers united in faith, growing in God's Word, and passionate about 
                sharing the love of Jesus with the people of Kent and beyond.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Our mission is to touch our generation with the power of God through worship, discipleship, 
                and community impact.
              </p>
              <Button 
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white"
                onClick={() => document.getElementById('vision').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More About Our Vision
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="border-2 border-blue-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Church className="w-7 h-7 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">Christ-Centered</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Everything we do centers around the teachings and love of Jesus Christ</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-7 h-7 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">Bible-Believing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Committed to teaching and living by the authority of God's Word</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">Community Impact</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Making a positive difference through service, love, and outreach</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 bg-blue-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-2xl opacity-95 font-semibold">Touching our generation with the power of God</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-blue-700" />
                </div>
                <CardTitle className="text-xl">Prayer, Praise & Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">Bringing people into God's presence through authentic worship and heartfelt prayer</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-blue-700" />
                </div>
                <CardTitle className="text-xl">Messages of Hope</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">Preaching relevant messages that address both spiritual and physical needs</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-blue-700" />
                </div>
                <CardTitle className="text-xl">Love & Fellowship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">Creating an atmosphere of love, care, sharing, and genuine community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section id="prayer" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">We're Here to Pray With You</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              No matter what you're facing, you don't have to face it alone. Share your prayer request with us.
            </p>
          </div>

          <Card className="border-2 border-blue-200 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handlePrayerSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="prayer-name">Your Name</Label>
                    <Input
                      id="prayer-name"
                      placeholder="Enter your name"
                      value={prayerForm.name}
                      onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prayer-email">Email Address</Label>
                    <Input
                      id="prayer-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={prayerForm.email}
                      onChange={(e) => setPrayerForm({ ...prayerForm, email: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prayer-request">Prayer Request</Label>
                  <Textarea
                    id="prayer-request"
                    placeholder="Share your prayer request with us..."
                    rows={6}
                    value={prayerForm.request}
                    onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                    required
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg font-semibold"
                >
                  Submit Prayer Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get Connected</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We'd love to stay in touch and keep you updated on upcoming services and events.
            </p>
          </div>

          <Card className="border-2 border-blue-200 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleConnectSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="connect-name">Full Name</Label>
                    <Input
                      id="connect-name"
                      placeholder="Enter your full name"
                      value={connectForm.name}
                      onChange={(e) => setConnectForm({ ...connectForm, name: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="connect-email">Email Address</Label>
                    <Input
                      id="connect-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={connectForm.email}
                      onChange={(e) => setConnectForm({ ...connectForm, email: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="connect-phone">Phone Number (Optional)</Label>
                  <Input
                    id="connect-phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={connectForm.phone}
                    onChange={(e) => setConnectForm({ ...connectForm, phone: e.target.value })}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="connect-message">Message (Optional)</Label>
                  <Textarea
                    id="connect-message"
                    placeholder="Tell us a little about yourself..."
                    rows={4}
                    value={connectForm.message}
                    onChange={(e) => setConnectForm({ ...connectForm, message: e.target.value })}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Connect With Us
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/8k2u4zsp_IMG_0615.jpeg" 
                  alt="Royalhouse Chapel Kent Mission" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">Royalhouse Chapel</h3>
                  <p className="text-sm text-blue-400">Kent Mission</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                A Christ-centered, Bible-believing church committed to worship, discipleship, and community impact.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Visit Us</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-300">Northfleet Technology College</p>
                    <p className="text-slate-400 text-sm">Colyer Rd, Northfleet</p>
                    <p className="text-slate-400 text-sm">Gravesend DA11 8BG</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@rcikent.org.uk" className="text-slate-300 hover:text-blue-400 transition-colors">
                    info@rcikent.org.uk
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Connect With Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/rcikent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com/rcikent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:info@rcikent.org.uk"
                  className="w-12 h-12 bg-slate-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Royalhouse Chapel Kent Mission. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
