'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, Sliders } from 'lucide-react';

interface QuoteCalculatorProps {
  onOpenConsultation: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onOpenConsultation }) => {
  const [productType, setProductType] = useState('roller');
  const [width, setWidth] = useState(140); // cm
  const [height, setHeight] = useState(180); // cm
  const [windowCount, setWindowCount] = useState(2);
  const [fabricGrade, setFabricGrade] = useState<'standard' | 'luxury' | 'motorized'>('luxury');

  // Base price formulas per sq meter
  const rates: Record<string, number> = {
    roller: 45,
    zebra: 65,
    wooden: 95,
    blackout: 85,
    sheer: 60,
    motorized: 140,
  };

  const gradeMultipliers = {
    standard: 1.0,
    luxury: 1.25,
    motorized: 1.6,
  };

  const squareMeters = (width / 100) * (height / 100);
  const baseRate = rates[productType] || 50;
  const multiplier = gradeMultipliers[fabricGrade];
  
  const estimatedPerWindow = Math.round(squareMeters * baseRate * multiplier);
  const totalEstimatedCost = estimatedPerWindow * windowCount;

  return (
    <div className="bg-gradient-to-br from-secondary via-white to-secondary p-6 md:p-10 rounded-3xl border border-warmGrey shadow-card relative overflow-hidden">
      {/* Background Accent Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
        {/* Left Side: Inputs */}
        <div className="w-full lg:w-3/5 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-full">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Estimation Tool</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-accent">
              Estimate Your Window Cost
            </h3>
            <p className="text-gray-500 text-sm">
              Adjust dimensions to preview estimated pricing before booking your free in-home measurement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Product Selection */}
            <div>
              <label className="block text-xs font-semibold text-accent mb-2">Product Category</label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="roller">Sunscreen Roller Blinds</option>
                <option value="zebra">Dual-Shade Zebra Blinds</option>
                <option value="wooden">Basswood Wooden Venetian</option>
                <option value="blackout">Heavy Velvet Blackout Curtains</option>
                <option value="sheer">Ethereal Voile Sheer Linen</option>
                <option value="motorized">Smart Motorized Shades</option>
              </select>
            </div>

            {/* Fabric Grade */}
            <div>
              <label className="block text-xs font-semibold text-accent mb-2">Fabric / Feature Grade</label>
              <div className="grid grid-cols-3 gap-1 bg-white p-1 rounded-xl border border-gray-200">
                {(['standard', 'luxury', 'motorized'] as const).map((grade) => (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => setFabricGrade(grade)}
                    className={`py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                      fabricGrade === grade
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-gray-600 hover:text-accent'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Width & Height Sliders */}
          <div className="space-y-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div>
              <div className="flex justify-between text-xs font-semibold text-accent mb-1.5">
                <span>Window Width:</span>
                <span className="text-primary font-bold">{width} cm</span>
              </div>
              <input
                type="range"
                min={60}
                max={350}
                step={5}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer h-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-accent mb-1.5">
                <span>Window Height / Drop:</span>
                <span className="text-primary font-bold">{height} cm</span>
              </div>
              <input
                type="range"
                min={80}
                max={400}
                step={5}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer h-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <span className="text-xs font-semibold text-accent">Number of Windows:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setWindowCount(Math.max(1, windowCount - 1))}
                  className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center font-bold text-accent hover:bg-primary hover:text-white transition-colors"
                >
                  -
                </button>
                <span className="font-bold text-sm text-accent w-4 text-center">{windowCount}</span>
                <button
                  onClick={() => setWindowCount(windowCount + 1)}
                  className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center font-bold text-accent hover:bg-primary hover:text-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Price Summary & CTA */}
        <div className="w-full lg:w-2/5 bg-accent text-white p-6 md:p-8 rounded-3xl shadow-luxury space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Total Area</span>
              <span className="text-sm font-semibold text-primary-light">{(squareMeters * windowCount).toFixed(2)} m²</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Estimated Investment</span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl font-bold text-white">${totalEstimatedCost}</span>
                <span className="text-xs text-gray-300">USD (Approx.)</span>
              </div>
              <p className="text-[11px] text-gray-400 italic">
                * Includes fabrication, custom mechanism, and hardware.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-gray-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-light shrink-0" />
                <span>Free laser measurement in your home</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-light shrink-0" />
                <span>Includes 5-Year manufacturer warranty</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-light shrink-0" />
                <span>Professional installation available</span>
              </li>
            </ul>
          </div>

          <button
            onClick={onOpenConsultation}
            className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow-luxury flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Lock In Estimate & Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
