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
  Clock,
  Video,
  MessageCircle,
  Share2
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [prayerForm, setPrayerForm] = useState({ name: '', email: '', request: '' });
  const [connectForm, setConnectForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      description: "Join us for powerful worship, prayer, and teaching from God's Word",
      category: "Worship"
    },
    {
      id: 2,
      title: "Prayer Meeting",
      date: "Wednesdays",
      time: "7:00 PM",
      description: "Corporate prayer gathering - seeking God's face together",
      category: "Prayer"
    },
    {
      id: 3,
      title: "Youth Service",
      date: "Fridays",
      time: "6:30 PM",
      description: "Dynamic youth ministry with worship, teaching, and fellowship",
      category: "Youth"
    },
    {
      id: 4,
      title: "Bible Study",
      date: "Thursdays",
      time: "7:00 PM",
      description: "Deep dive into Scripture - growing in knowledge and faith",
      category: "Study"
    }
  ];

  const testimonies = [
    {
      id: 1,
      name: "Sarah M.",
      story: "God transformed my life at Royalhouse Chapel. The love and support I found here helped me through my darkest moments.",
      date: "December 2025"
    },
    {
      id: 2,
      name: "David K.",
      story: "Finding this church family changed everything. The genuine worship and powerful teaching have deepened my walk with God.",
      date: "November 2025"
    },
    {
      id: 3,
      name: "Grace T.",
      story: "I came looking for community and found a family. The prayer support and fellowship here are truly life-changing.",
      date: "October 2025"
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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Subscribed Successfully!",
      description: "You'll receive our weekly updates.",
    });
    setNewsletterEmail('');
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
            <nav className="hidden lg:flex items-center gap-6">
              <a href="/" className="text-slate-900 font-semibold hover:text-blue-700 transition-colors">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-700 transition-colors">Who We Are</a>
              <a href="#events" className="text-slate-700 hover:text-blue-700 transition-colors">Events</a>
              <a href="#new-here" className="text-slate-700 hover:text-blue-700 transition-colors">New Here?</a>
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
              className="lg:hidden text-slate-700 hover:text-blue-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a href="/" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Who We Are</a>
              <a href="#events" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Events</a>
              <a href="#new-here" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>New Here?</a>
              <a href="/give" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Support Us</a>
              <a href="#prayer" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Prayer</a>
              <a href="#connect" className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Connect</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Video Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/jjuutsnw_vidiofy_video_1771886787847.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/0cedpo9t_IMG_0618.jpg"
              alt="Church worship"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            Welcome to<br />
            <span className="text-blue-200">Royalhouse Chapel</span>
          </h1>
          <p className="text-xl md:text-3xl mb-12 opacity-95 font-light max-w-4xl mx-auto">
            Leading People to Encounter, Follow, and Proclaim Jesus
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-10 py-7 text-lg shadow-2xl"
              onClick={() => document.getElementById('new-here').scrollIntoView({ behavior: 'smooth' })}
            >
              Plan Your Visit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold px-10 py-7 text-lg backdrop-blur-sm"
              onClick={() => document.getElementById('events').scrollIntoView({ behavior: 'smooth' })}
            >
              View Events
            </Button>
          </div>
          
          {/* Service Times Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <Clock className="w-6 h-6" />
            <div className="text-left">
              <p className="text-sm font-semibold opacity-90">Sunday Services</p>
              <p className="text-xl font-bold">10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* Plan Your Visit / New Here Section */}
      <section id="new-here" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">New Here?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We'd be honored to have you join us! Here's everything you need to know for your first visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200 shadow-xl bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Service Times</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Sunday Services</h4>
                  <p className="text-2xl font-bold text-blue-700">10:00 AM - 12:00 PM</p>
                  <p className="text-slate-600 mt-1">Join us for worship, prayer, and powerful teaching</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Prayer Meetings</h4>
                  <p className="text-slate-700">Wednesdays at 7:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 shadow-xl bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg text-slate-900 mb-3">Northfleet Technology College</h4>
                <p className="text-slate-700 mb-2">Colyer Rd, Northfleet</p>
                <p className="text-slate-700 mb-6">Gravesend DA11 8BG</p>
                <a 
                  href="https://maps.google.com/?q=Northfleet+Technology+College+Gravesend" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-700 hover:bg-blue-800 w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Get Involved</h2>
            <p className="text-xl text-slate-600">Join us at our upcoming events and gatherings</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                        {event.category}
                      </div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About/Who We Are */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We are a Christ-centered, Bible-believing church committed to worship, discipleship, and community impact.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our mission is touching our generation with the power of God through authentic worship, 
                relevant teaching, and genuine community.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Prayer, Praise & Worship</h4>
                    <p className="text-slate-600">Bringing people into God's presence through authentic worship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Messages of Hope</h4>
                    <p className="text-slate-600">Preaching relevant messages that address real-life needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Love & Fellowship</h4>
                    <p className="text-slate-600">Creating an atmosphere of genuine community and care</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&q=80"
                alt="Church community"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies/Stories */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Radiant Stories</h2>
            <p className="text-xl opacity-95 max-w-3xl mx-auto">
              Real stories from real people experiencing God's faithfulness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonies.map((testimony) => (
              <Card key={testimony.id} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimony.name}</CardTitle>
                      <p className="text-sm opacity-75">{testimony.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90 italic">"{testimony.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section id="prayer" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">We're Here to Pray With You</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Share your prayer request - we believe in the power of agreement in prayer
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
                      className="border-blue-200 focus:border-blue-500"
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
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prayer-request">Prayer Request</Label>
                  <Textarea
                    id="prayer-request"
                    placeholder="How can we pray for you?"
                    rows={6}
                    value={prayerForm.request}
                    onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                    required
                    className="border-blue-200 focus:border-blue-500 resize-none"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Take Your Next Step</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We'd love to connect with you and help you find your place in our church family
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
                      className="border-blue-200 focus:border-blue-500"
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
                      className="border-blue-200 focus:border-blue-500"
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
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="connect-message">Message (Optional)</Label>
                  <Textarea
                    id="connect-message"
                    placeholder="Tell us how we can help you take your next step..."
                    rows={4}
                    value={connectForm.message}
                    onChange={(e) => setConnectForm({ ...connectForm, message: e.target.value })}
                    className="border-blue-200 focus:border-blue-500 resize-none"
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

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
          <p className="text-lg opacity-90 mb-8">Get weekly updates and announcements delivered to your inbox</p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button type="submit" className="bg-blue-700 hover:bg-blue-600 px-8">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16 px-4">
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
                Leading people to encounter, follow, and proclaim Jesus Christ.
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
