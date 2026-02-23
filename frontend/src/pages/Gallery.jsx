import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { X, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'worship', name: 'Worship Services' },
    { id: 'fellowship', name: 'Fellowship' },
    { id: 'prayer', name: 'Prayer Meetings' },
    { id: 'events', name: 'Special Events' },
  ];

  const photos = [
    // Worship Services
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1579975096649-e773152b04cb?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'worship',
      title: 'Sunday Worship',
      description: 'Praising God together in worship'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'worship',
      title: 'Worship Experience',
      description: 'Hearts lifted in praise'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1580243152089-98da42694285?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'worship',
      title: 'Worship Night',
      description: 'Coming together in His presence'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/29551036/pexels-photo-29551036.jpeg',
      category: 'worship',
      title: 'Community Worship',
      description: 'United in faith and worship'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/28486794/pexels-photo-28486794.jpeg',
      category: 'worship',
      title: 'Praise Service',
      description: 'Glorifying God in song'
    },
    // Fellowship
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1550096141-1b21804f1812?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'fellowship',
      title: 'Fellowship Circle',
      description: 'Building community together'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1761055480021-8ed55505bc9f?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'fellowship',
      title: 'Church Gathering',
      description: 'Our church home'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1550096197-9fececec9ca5?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'fellowship',
      title: 'Community Time',
      description: 'Sharing life together'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1551327420-4b280d52cc68?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'fellowship',
      title: 'Fellowship Event',
      description: 'Growing in community'
    },
    // Prayer Meetings
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1543702404-38c2035462ad?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'prayer',
      title: 'Prayer Meeting',
      description: 'Seeking God together'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1623096939009-cb651b7700f9?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'prayer',
      title: 'Prayer Time',
      description: 'United in prayer'
    },
    // Special Events
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1712171755076-a5e104ae458b?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'events',
      title: 'Celebration Service',
      description: 'Celebrating God\'s goodness'
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1683456532217-49617ee6a16f?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'events',
      title: 'Special Event',
      description: 'Church celebration'
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1634334867745-376b3c609ed9?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'events',
      title: 'Community Event',
      description: 'Special church gathering'
    },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    setSelectedImage(filteredPhotos[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
    const nextIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredPhotos[nextIndex]);
  };

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
              <a href="/gallery" className="text-blue-700 font-semibold">Gallery</a>
              <a href="/give" className="text-slate-700 hover:text-blue-700 transition-colors font-medium">Support Us</a>
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
                className="text-blue-700 font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="/give" 
                className="text-slate-700 hover:text-blue-700 transition-colors font-medium py-2"
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

      {/* Header Spacing */}
      <div className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl opacity-90">Moments from our church family</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 px-4 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={
                  selectedCategory === category.id
                    ? 'bg-blue-700 hover:bg-blue-800 text-white'
                    : 'border-blue-200 text-blue-700 hover:bg-blue-50'
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map(photo => (
              <Card
                key={photo.id}
                className="group overflow-hidden cursor-pointer border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
                onClick={() => handleImageClick(photo)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-3"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-3"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-6xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg opacity-80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
