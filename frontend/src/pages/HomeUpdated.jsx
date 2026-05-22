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
  ArrowRight,
  Calendar,
  Clock,
  HandHeart,
  DollarSign,
  Waves
} from 'lucide-react';
import { toast } from 'sonner';

const API_URL = process.env.REACT_APP_API_URL || '';

const Home = () => {
  const [prayerForm, setPrayerForm] = useState({ name: '', email: '', request: '' });
  const [connectForm, setConnectForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submittingPrayer, setSubmittingPrayer] = useState(false);
  const [submittingConnect, setSubmittingConnect] = useState(false);

  const handlePrayerSubmit = async (e) => {
    e.preventDefault();
    setSubmittingPrayer(true);
    try {
      await fetch(`${API_URL}/api/prayer-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prayerForm),
      });
      toast.success("Prayer Request Submitted", {
        description: "We will be praying for you. God bless you!",
      });
      setPrayerForm({ name: '', email: '', request: '' });
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setSubmittingPrayer(false);
    }
  };

  const handleConnectSubmit = async (e) => {
    e.preventDefault();
    setSubmittingConnect(true);
    try {
      await fetch(`${API_URL}/api/connect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(connectForm),
      });
      toast.success("Thank You for Connecting!", {
        description: "We'll be in touch with you soon.",
      });
      setConnectForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setSubmittingConnect(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/8k2u4zsp_IMG_0615.jpeg" 
                alt="Royalhouse Chapel Kent Mission" 
                className="w-14 h-14 rounded-full object-cover shadow-md"
              />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Royalhouse Chapel Kent</h1>
                <p className="text-xs text-blue-700 font-semibold">Touching Our Generation</p>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-900 font-semibold hover:text-blue-700 transition-colors">Home</a>
              <button onClick={() => document.getElementById('who-we-are').scrollIntoView({ behavior: 'smooth' })} className="text-slate-700 hover:text-blue-700 transition-colors">Who We Are</button>
              <button onClick={() => document.getElementById('new-here').scrollIntoView({ behavior: 'smooth' })} className="text-slate-700 hover:text-blue-700 transition-colors">New Here?</button>
              <button onClick={() => document.getElementById('plan-your-visit').scrollIntoView({ behavior: 'smooth' })} className="text-slate-700 hover:text-blue-700 transition-colors">Plan Your Visit</button>
              <button onClick={() => document.getElementById('support').scrollIntoView({ behavior: 'smooth' })} className="text-slate-700 hover:text-blue-700 transition-colors">Support Us</button>
              <div className="flex items-center gap-2 border-l border-slate-200 pl-4 ml-2">
                <a href="https://www.facebook.com/rcikent" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="https://instagram.com/rcikent" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="https://www.tiktok.com/@rcikent" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black hover:bg-slate-800 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white text-xs font-bold">
                  TT
                </a>
              </div>
              <Button
                size="sm"
                className="bg-blue-700 hover:bg-blue-800 text-white"
                onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
              >
                Connect With Us
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
              <a href="#/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2">Home</a>
              <button className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2 text-left" onClick={() => { document.getElementById('who-we-are').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>Who We Are</button>
              <button className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2 text-left" onClick={() => { document.getElementById('new-here').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>New Here?</button>
              <button className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2 text-left" onClick={() => { document.getElementById('plan-your-visit').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>Plan Your Visit</button>
              <button className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2 text-left" onClick={() => { document.getElementById('support').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>Support Us</button>
              <button className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2 text-left" onClick={() => { document.getElementById('prayer').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>Prayer</button>
              <button className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2 text-left" onClick={() => { document.getElementById('connect').scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>Connect</button>
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
            <source src={`${process.env.PUBLIC_URL}/videos/worship.mp4`} type="video/mp4" />
            <img 
              src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/0cedpo9t_IMG_0618.jpg"
              alt="Church worship"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Royalhouse Chapel<br />
            <span className="text-blue-200">Kent Mission</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-8 opacity-95 font-light max-w-4xl mx-auto">
            Touching Our Generation with the Power of God
          </p>

          {/* Service Times Bar */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-white">
              <Church className="w-4 h-4 text-blue-200" />
              <span className="text-sm font-semibold">Sunday Service</span>
              <span className="text-blue-200 font-bold">10:00 AM</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-white">
              <Heart className="w-4 h-4 text-blue-200" />
              <span className="text-sm font-semibold">Friday Online Prayer</span>
              <span className="text-blue-200 font-bold">8:00 PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              onClick={() => document.getElementById('when-we-meet').scrollIntoView({ behavior: 'smooth' })}
            >
              Service Times
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent z-20"></div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 px-4 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 relative overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        {/* Glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Who We Are</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-blue-100 leading-relaxed mb-16">
            <p>
              Royalhouse Chapel Kent is a Christian church passionate about helping people experience
              the presence and power of God. We are a welcoming and diverse church family committed
              to prayer, worship, biblical teaching, and building genuine relationships within our
              community.
            </p>
            <p>
              Our church brings together people from across Gravesend, Northfleet, Dartford, Ebbsfleet
              Valley, and Rochester, creating a vibrant church community where people can grow in faith
              and support one another in everyday life.
            </p>
            <p>
              We gather weekly at Northfleet Technology College, where we come together to worship
              God, pray, hear practical teaching from the Bible, and experience a loving church family.
            </p>
            <p>
              As a growing church, we are passionate about seeing lives transformed by the love of Jesus.
              People from many different backgrounds come together as one community, united by faith
              and a shared desire to grow spiritually and make a positive impact in our local area.
            </p>
            <p>
              We believe church is more than just a Sunday gathering. It is a place where people can find
              hope, encouragement, and support through every stage of life. Our aim is to create an
              atmosphere where everyone feels welcomed, valued, and able to encounter God personally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-blue-500/30 border-b border-white/20 px-8 py-6">
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <div className="px-8 py-8">
                <p className="text-xl font-semibold text-blue-100 leading-relaxed">
                  Touching our generation with the power of God, impacting lives through worship,
                  teaching, prayer, and community outreach.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-blue-500/30 border-b border-white/20 px-8 py-6">
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <div className="px-8 py-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-400/30 border border-blue-300/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-bold text-blue-200">
                    1
                  </div>
                  <p className="text-blue-100">
                    Bring people into God's presence through <strong className="text-white">prayer, praise, and worship</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-400/30 border border-blue-300/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-bold text-blue-200">
                    2
                  </div>
                  <p className="text-blue-100">
                    Preach messages of hope addressing both <strong className="text-white">spiritual and practical needs</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-400/30 border border-blue-300/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-bold text-blue-200">
                    3
                  </div>
                  <p className="text-blue-100">
                    Provide a place of <strong className="text-white">love, care, fellowship, and support</strong> for all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Here Section */}
      <section id="new-here" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">New Here?</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed mb-12">
            <p>
              Visiting a church for the first time can feel like a big step, but at Royalhouse Chapel Kent 
              we want you to feel relaxed, welcomed, and at home from the moment you arrive.
            </p>
            <p>
              We are a friendly Christian church serving the communities of Gravesend, Northfleet, 
              Dartford, Ebbsfleet Valley, and surrounding areas.
            </p>
            <p>
              We gather every week at Northfleet Technology College, where we come together to worship 
              God, grow in faith, and build meaningful relationships.
            </p>
            <p>
              Our heart is to create a place where people can experience God's presence through prayer, 
              praise, and worship, hear encouraging messages from the Bible, and connect with a 
              supportive community.
            </p>
            <p>
              We believe that every person has a role to play in what God is doing through the church. 
              Whether you are exploring faith, looking for a church home, or wanting to grow deeper in 
              your relationship with God, there is a place for you at Royalhouse Chapel Kent.
            </p>
            <p className="font-semibold text-blue-700">
              Join us at Northfleet Technology College and be part of a community committed to faith, 
              hope, and transformation.
            </p>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-6 text-lg"
              onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
            >
              Connect With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Plan Your Visit Section */}
      <section id="plan-your-visit" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Plan Your Visit</h2>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-700 leading-relaxed text-center mb-8">
              We would love to welcome you to Royalhouse Chapel Kent, a church where people come 
              together to encounter God, experience hope, and build meaningful relationships.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Whether you're exploring faith for the first time, returning to church, or looking for a place to 
              belong, we want you to feel at home from the moment you arrive.
            </p>
          </div>

          {/* When We Meet */}
          <div id="when-we-meet" className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">When We Meet</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 border-blue-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center">
                      <Church className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Sunday Service</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-blue-700 mb-2">10:00 AM</p>
                  <p className="text-slate-600">Join us for worship, teaching, and fellowship</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Friday Online Prayer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-blue-700 mb-2">8:00 PM</p>
                  <p className="text-slate-600">Connect with us online for prayer and intercession</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Location</h3>
            <Card className="border-2 border-blue-200 shadow-xl max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Northfleet Technology College</h4>
                    <p className="text-slate-700">Colyer Road</p>
                    <p className="text-slate-700">Northfleet</p>
                    <p className="text-slate-700">Gravesend</p>
                    <p className="text-slate-700 font-semibold">DA11 8BG</p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com/?q=Northfleet+Technology+College+Gravesend+DA11+8BG" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-700 hover:bg-blue-800">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">A Warm Welcome</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    You'll be greeted by our welcoming team who will help you feel at home from the moment you arrive.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Waves className="w-6 h-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">Prayer, Praise & Worship</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Experience passionate worship through music and prayer as we encounter God's presence together.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">Practical Bible Teaching</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Receive relevant messages that address both your spiritual and practical needs in everyday life.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">A Caring Community</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Church is more than a weekly gathering. It's a place where people build genuine 
                    relationships. At Royalhouse Chapel Kent you'll find a community that values love, care, 
                    fellowship, and support.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-slate-700 font-semibold">
                Come As You Are
              </p>
              <p className="text-slate-600 mt-2">
                You don't need to dress a certain way or have everything figured out to attend. Simply come 
                as you are and experience the welcoming environment of our church family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Us Section */}
      <section id="support" className="py-20 px-4 bg-gradient-to-br from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Support Us</h2>
            <p className="text-xl opacity-95 max-w-4xl mx-auto leading-relaxed">
              Royalhouse Chapel Kent exists to serve God, support our community, and impact lives. 
              Everything we do—from our weekly services to outreach programs—is made possible through 
              the generosity and dedication of people who believe in our mission.
            </p>
            <p className="text-lg opacity-90 mt-4 max-w-4xl mx-auto">
              Your support allows us to continue spreading hope, offering practical help, and creating a 
              church where people can grow spiritually and experience God's love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Give</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90 mb-4">
                  Giving is a meaningful way to partner with God in the work of His church. Your financial 
                  support helps us continue spreading hope, providing care, creating spaces of fellowship, and 
                  equipping people to grow spiritually.
                </p>
                <p className="opacity-90 mb-4">
                  Every gift, no matter the size, makes a difference and allows us to fulfil our vision of 
                  touching our generation with the power of God.
                </p>
                <a href="#/give">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full">
                    Bank Details
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <HandHeart className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90 mb-4">
                  Support the church by volunteering your time and talents. Whether it's helping at events, 
                  joining a ministry team, or contributing to our community outreach, your involvement makes 
                  a real difference in people's lives.
                </p>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 w-full"
                  onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
                >
                  Join a Team
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Pray</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90 mb-4">
                  Prayer is the foundation of all we do. Support us by praying for our leadership, our 
                  congregation, and our mission to touch our generation with the power of God.
                </p>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 w-full"
                  onClick={() => document.getElementById('prayer').scrollIntoView({ behavior: 'smooth' })}
                >
                  Join the Prayer Team
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl opacity-95">
              Together, we can continue to transform lives, build community, and bring God's presence to 
              the people around us.
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section id="prayer" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Prayer Requests</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe in the power of prayer. Share your request and let us stand with you in faith.
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
                  disabled={submittingPrayer}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg font-semibold"
                >
                  {submittingPrayer ? 'Submitting...' : 'Submit Prayer Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section id="connect" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Connect With Us</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We would love to hear from you! Whether you have questions, want to get involved, or need 
              prayer, there are several ways to connect with Royalhouse Chapel Kent.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Contact Form</h3>
            <p className="text-center text-slate-600 mb-8">
              Please use the form below to send us a message. We'll get back to you as soon as possible.
            </p>
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
                    <Label htmlFor="connect-message">Message</Label>
                    <Textarea
                      id="connect-message"
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      value={connectForm.message}
                      onChange={(e) => setConnectForm({ ...connectForm, message: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submittingConnect}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {submittingConnect ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Social Media & Visit Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Social Media</CardTitle>
                <CardDescription>Stay connected and follow us online for updates, messages, and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/rcikent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://instagram.com/rcikent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@rcikent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black hover:bg-slate-800 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white font-bold"
                  >
                    TT
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Visit Us</CardTitle>
                <CardDescription>We meet for services and prayer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p className="font-semibold">Sunday Service</p>
                    <p className="text-sm">10:00 AM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Friday Online Prayer</p>
                    <p className="text-sm">8:00 PM</p>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm">Come and experience God's presence in a warm, welcoming environment.</p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Northfleet+Technology+College+Gravesend+DA11+8BG" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full mt-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-blue-700">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Stay Connected</h2>
          <p className="text-blue-100 mb-8">Get updates on services, events, and church news delivered to your inbox.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                toast.success("You're subscribed!", { description: "Thanks for joining — we'll keep you updated." });
                e.target.reset();
              }
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="flex-1 max-w-sm px-4 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
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
                  <h3 className="text-xl font-bold">Royalhouse Chapel Kent</h3>
                  <p className="text-sm text-blue-400">Touching Our Generation</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                A Christ-centered church in Gravesend, Northfleet, and Dartford, committed to worship, discipleship, and community impact.
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
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Service Times</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white">Sunday Service</p>
                  <p className="text-slate-400">10:00 AM</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Friday Online Prayer</p>
                  <p className="text-slate-400">8:00 PM</p>
                </div>
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
