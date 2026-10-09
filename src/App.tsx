import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ProsAndCons } from './components/ProsAndCons';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AcquisitionModal } from './components/AcquisitionModal';
import { CartDrawer } from './components/CartDrawer';
import { DiplomaticContactModal } from './components/DiplomaticContactModal';
import { CAMOUFLAGE_OPTIONS, WEAPON_LOADOUTS, CamouflageOption, WeaponLoadout } from './data/su57Data';

export default function App() {
  const [selectedCamo, setSelectedCamo] = useState<CamouflageOption>(CAMOUFLAGE_OPTIONS[0]);
  const [selectedLoadout, setSelectedLoadout] = useState<WeaponLoadout>(WEAPON_LOADOUTS[0]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  
  // Modals & Drawers
  const [isAcquisitionOpen, setIsAcquisitionOpen] = useState<boolean>(false);
  const [acquisitionMode, setAcquisitionMode] = useState<'deposit' | 'full'>('deposit');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const handleOpenAcquisition = (mode: 'deposit' | 'full' = 'deposit') => {
    setAcquisitionMode(mode);
    setIsAcquisitionOpen(true);
  };

  const handleAddToCart = () => {
    setCartCount(1);
    setIsAddedToCart(true);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = () => {
    setCartCount(0);
    setIsAddedToCart(false);
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col selection:bg-red-600/30 selection:text-red-200">
      {/* Top Bar Navigation */}
      <Header
        onOpenAcquisition={handleOpenAcquisition}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenAcquisition={handleOpenAcquisition}
          onAddToCart={handleAddToCart}
          isAddedToCart={isAddedToCart}
        />

        {/* 2. Core Features Grid */}
        <FeaturesGrid />

        {/* 3. Deep Pros & Cons Section */}
        <ProsAndCons />

        {/* 4. Technical Specifications & Interactive Customizer */}
        <TechnicalSpecs
          selectedCamo={selectedCamo}
          onSelectCamo={setSelectedCamo}
          selectedLoadout={selectedLoadout}
          onSelectLoadout={setSelectedLoadout}
          onConfigureNow={() => handleOpenAcquisition('deposit')}
        />

        {/* 5. Final CTA Section */}
        <FinalCTA
          onOpenAcquisition={handleOpenAcquisition}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Slide-out Drawers */}
      <AcquisitionModal
        isOpen={isAcquisitionOpen}
        onClose={() => setIsAcquisitionOpen(false)}
        defaultMode={acquisitionMode}
        selectedCamo={selectedCamo}
        selectedLoadout={selectedLoadout}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartCount={cartCount}
        onRemoveItem={handleRemoveFromCart}
        selectedCamo={selectedCamo}
        selectedLoadout={selectedLoadout}
        onProceedToCheckout={() => handleOpenAcquisition('deposit')}
      />

      <DiplomaticContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
