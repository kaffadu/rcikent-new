import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Church, CreditCard, Building2, Copy, Check, Heart, Menu, X } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Give = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast({
      title: "Copied to clipboard!",
      description: `${fieldName} has been copied.`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bankDetails = {
    accountName: "RCI Missions Kent",
    sortCode: "30-99-50",
    accountNumber: "45392762"
  };

  const paypalEmail = "info@rcikent.org.uk";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_rhkent-worship/artifacts/8k2u4zsp_IMG_0615.jpeg" 
                alt="Royalhouse Chapel Kent Mission" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-900">Royalhouse Chapel</h1>
                <p className="text-xs text-blue-700">Kent Mission</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Home</a>
              <a href="/#about" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">About</a>
              <a href="/#vision" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Vision</a>
              <a href="/gallery" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Gallery</a>
              <a href="/give" className="text-blue-700 font-semibold">Give</a>
              <a href="/#prayer" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Prayer</a>
              <a href="/#connect" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Connect</a>
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
          <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="/" 
                className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/#about" 
                className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/#vision" 
                className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vision
              </a>
              <a 
                href="/gallery" 
                className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="/give" 
                className="text-blue-700 font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Give
              </a>
              <a 
                href="/#prayer" 
                className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prayer
              </a>
              <a 
                href="/#connect" 
                className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Heart className="w-16 h-16 mx-auto mb-4 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Give to God's Work</h1>
          <p className="text-xl mb-4 opacity-95 leading-relaxed">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, 
            for God loves a cheerful giver."
          </p>
          <p className="text-lg opacity-90">- 2 Corinthians 9:7</p>
        </div>
      </div>

      {/* Giving Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Generosity Makes a Difference</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Thank you for your generosity! Your giving helps us spread the Gospel, support our community, 
              and advance God's kingdom. Every contribution, regardless of size, makes an eternal impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bank Transfer Card */}
            <Card className="border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Bank Transfer</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Make a direct bank transfer using the details below
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  {/* Account Name */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <label className="text-sm font-semibold text-slate-600 block mb-2">Account Name</label>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-900">{bankDetails.accountName}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.accountName, "Account Name")}
                        className="hover:bg-blue-100"
                      >
                        {copiedField === "Account Name" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-blue-700" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Sort Code */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <label className="text-sm font-semibold text-slate-600 block mb-2">Sort Code</label>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-900">{bankDetails.sortCode}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.sortCode, "Sort Code")}
                        className="hover:bg-blue-100"
                      >
                        {copiedField === "Sort Code" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-blue-700" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <label className="text-sm font-semibold text-slate-600 block mb-2">Account Number</label>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-900">{bankDetails.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.accountNumber, "Account Number")}
                        className="hover:bg-blue-100"
                      >
                        {copiedField === "Account Number" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-blue-700" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    <strong>Note:</strong> Please use your name as the payment reference so we can acknowledge your gift.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* PayPal Card */}
            <Card className="border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">PayPal</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Give securely through PayPal
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  {/* PayPal Email */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <label className="text-sm font-semibold text-slate-600 block mb-2">PayPal Email</label>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-900 break-all">{paypalEmail}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(paypalEmail, "PayPal Email")}
                        className="hover:bg-blue-100"
                      >
                        {copiedField === "PayPal Email" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-blue-700" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <a
                      href={`https://www.paypal.com/paypalme/${paypalEmail.split('@')[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button 
                        size="lg"
                        className="bg-blue-700 hover:bg-blue-800 text-white w-full"
                      >
                        Give via PayPal
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-3">
                    <strong>How to give:</strong>
                  </p>
                  <ol className="text-sm text-slate-600 space-y-2 list-decimal list-inside">
                    <li>Log in to your PayPal account</li>
                    <li>Click "Send" or "Send Money"</li>
                    <li>Enter our email: {paypalEmail}</li>
                    <li>Enter your donation amount</li>
                    <li>Complete the transaction</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ways Your Giving Helps */}
          <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-white to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 text-center">How Your Giving Makes an Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Church className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Ministry & Worship</h3>
                  <p className="text-slate-600">Supporting our worship services, ministry programs, and spiritual growth initiatives</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Community Outreach</h3>
                  <p className="text-slate-600">Reaching out to our local community with love, care, and practical support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Church Operations</h3>
                  <p className="text-slate-600">Maintaining our facilities and resources to serve our growing church family</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thank You Message */}
          <div className="text-center mt-12 p-8 bg-blue-700 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Thank You for Your Generosity!</h3>
            <p className="text-lg opacity-95 max-w-2xl mx-auto">
              Your partnership in the Gospel means the world to us. May God bless you abundantly 
              as you invest in His kingdom work here at Royalhouse Chapel Kent Mission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
