import React, { useState } from 'react';
import { Brain, Wand2, Sparkles, Zap, RefreshCw } from 'lucide-react';

function App() {
  const [inputs, setInputs] = useState({
    problem: '',
    audience: '',
  });
  const [isThinking, setIsThinking] = useState(false);
  const [solution, setSolution] = useState(null);

  const generateInnovation = () => {
    setIsThinking(true);
    // Simulate creative thinking process
    setTimeout(() => {
      const innovations = [
        {
          name: `Mind${inputs.problem.slice(0, 4)}`,
          description: `A revolutionary platform that uses neural networks to solve ${inputs.problem} for ${inputs.audience} through immersive experiences.`,
          impact: "Transform how people interact with technology while promoting sustainable solutions.",
          revenue: "Subscription-based model with premium features for enterprise clients."
        },
        {
          name: `Eco${inputs.audience.slice(0, 4)}`,
          description: `Sustainable technology that empowers ${inputs.audience} to overcome ${inputs.problem} using renewable energy and smart algorithms.`,
          impact: "Reduce environmental impact while solving critical challenges.",
          revenue: "Usage-based pricing with impact-sharing model."
        },
        {
          name: `Future${Math.random().toString(36).slice(2, 6)}`,
          description: `Next-generation solution that combines quantum computing and biomimicry to help ${inputs.audience} tackle ${inputs.problem}.`,
          impact: "Pioneer new approaches to age-old problems using cutting-edge technology.",
          revenue: "Hybrid model combining licensing and success-based fees."
        }
      ];
      setSolution(innovations[Math.floor(Math.random() * innovations.length)]);
      setIsThinking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 via-pink-200 to-yellow-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="relative">
            <div className="absolute -left-4 -top-4">
              <Brain className="w-12 h-12 text-violet-600 animate-pulse" />
            </div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600">
              Innovation Forge
            </h1>
          </div>
          <p className="text-gray-700 text-lg">
            Transform Problems into Revolutionary Solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  What problem needs solving?
                </label>
                <textarea
                  value={inputs.problem}
                  onChange={(e) => setInputs(prev => ({ ...prev, problem: e.target.value }))}
                  placeholder="e.g., Mental health accessibility, Food waste, Digital privacy"
                  className="w-full h-32 px-4 py-3 rounded-xl border-2 border-violet-200 focus:border-violet-400 focus:ring focus:ring-violet-200 focus:ring-opacity-50 transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Who are we helping?
                </label>
                <textarea
                  value={inputs.audience}
                  onChange={(e) => setInputs(prev => ({ ...prev, audience: e.target.value }))}
                  placeholder="e.g., Remote workers, Small businesses, Students"
                  className="w-full h-32 px-4 py-3 rounded-xl border-2 border-violet-200 focus:border-violet-400 focus:ring focus:ring-violet-200 focus:ring-opacity-50 transition-all resize-none"
                />
              </div>

              <button
                onClick={generateInnovation}
                disabled={!inputs.problem || !inputs.audience || isThinking}
                className="w-full bg-gradient-to-r from-violet-600 to-pink-600 text-white py-4 rounded-xl font-medium hover:from-violet-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {isThinking ? (
                  <>
                    <RefreshCw className="w-6 h-6 animate-spin" />
                    Forging Innovation...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-6 h-6" />
                    Forge Innovation
                  </>
                )}
              </button>
            </div>
          </div>

          {solution && (
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-violet-600" />
                <h2 className="text-3xl font-bold text-gray-800">{solution.name}</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-violet-50 rounded-xl p-4">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="bg-pink-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-pink-600" />
                      <h3 className="font-semibold text-gray-800">Impact Potential</h3>
                    </div>
                    <p className="text-gray-700">{solution.impact}</p>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-yellow-600" />
                      <h3 className="font-semibold text-gray-800">Revenue Model</h3>
                    </div>
                    <p className="text-gray-700">{solution.revenue}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;