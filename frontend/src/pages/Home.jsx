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
  Phone,
  Facebook,
  Instagram,
  Send
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [prayerForm, setPrayerForm] = useState({ name: '', email: '', request: '' });
  const [connectForm, setConnectForm] = useState({ name: '', email: '', phone: '', message: '' });

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/8k2u4zsp_IMG_0615.jpeg" 
                alt="Royalhouse Chapel Kent Mission" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-900">Royalhouse Chapel</h1>
                <p className="text-xs text-blue-700">Kent Mission</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">About</a>
              <a href="#vision" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Vision</a>
              <a href="#prayer" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Prayer</a>
              <a href="#connect" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Connect</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  Welcome to Our Church Family
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                A Place Where You
                <span className="block text-blue-700">Belong & Grow</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We are a Christ-centered, Bible-believing church committed to worship, discipleship, and community impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Us This Sunday
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition-all"
                  onClick={() => document.getElementById('prayer').scrollIntoView({ behavior: 'smooth' })}
                >
                  Need Prayer?
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-blue-700 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&q=80" 
                  alt="Church community" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-700/10 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-700/10 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Us</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are a family of believers united in faith, growing in God's Word, and passionate about 
              sharing the love of Jesus with the people of Kent and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Church className="w-8 h-8 text-blue-700" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Christ-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base">
                  Our foundation is built on the teachings of Jesus Christ, and everything we do centers around His love and grace.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-blue-700" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Bible-Believing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base">
                  We believe in the authority and truth of God's Word, and we are committed to teaching and living by it.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-700" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base">
                  We are passionate about making a positive difference in our community through service and love.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="vision" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-blue-200 shadow-xl bg-white">
              <CardHeader className="bg-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <p className="text-2xl font-semibold text-slate-900 leading-relaxed">
                  Touching our generation with the power of God
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 shadow-xl bg-white">
              <CardHeader className="bg-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-blue-700" />
                  </div>
                  <p className="text-slate-700">
                    Bring people into God's presence through <strong>PRAYER, PRAISE and WORSHIP</strong>
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-700" />
                  </div>
                  <p className="text-slate-700">
                    Preach messages of hope that are relevant to the <strong>SPIRITUAL and PHYSICAL</strong> needs of the people
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-700" />
                  </div>
                  <p className="text-slate-700">
                    Bring comfort to God's people and provide them with a place and an atmosphere of <strong>love, care, sharing, and fellowship</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-20 px-4 bg-blue-700 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Journey With Us</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-95">
            We would be honoured to have you worship with us! Whether you're new to church, returning to faith, 
            or looking for a church home, you'll find a warm welcome and a loving community with us.
          </p>
          <p className="text-lg mb-10 opacity-90">
            Come as you are and experience a place where you can belong, grow, and thrive. 
            Your seat is already prepared — we can't wait to meet you!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
          >
            Connect With Us Today
          </Button>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section id="prayer" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Need Prayer?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              No matter what you're facing, you don't have to face it alone. We are here to stand with you, 
              believe with you, and support you through every season of life through prayer.
            </p>
          </div>

          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
              <CardTitle className="text-2xl text-slate-900">Submit Your Prayer Request</CardTitle>
              <CardDescription className="text-base">
                We believe in the power of prayer, and we are ready to agree with you for breakthrough, healing, and peace.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handlePrayerSubmit} className="space-y-6">
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
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Submit Prayer Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Connect With Us</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We'd love to stay in touch! Please share your details so we can welcome you, support you, 
              and keep you updated on upcoming services and events.
            </p>
          </div>

          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
              <CardTitle className="text-2xl text-slate-900">Get Connected</CardTitle>
              <CardDescription className="text-base">
                We can't wait to get to know you!
              </CardDescription>
            </CardHeader>
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
                    placeholder="Tell us a little about yourself or any questions you have..."
                    rows={4}
                    value={connectForm.message}
                    onChange={(e) => setConnectForm({ ...connectForm, message: e.target.value })}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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
                  <a href="mailto:rcikentmission@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                    rcikentmission@gmail.com
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
                  href="mailto:rcikentmission@gmail.com"
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
