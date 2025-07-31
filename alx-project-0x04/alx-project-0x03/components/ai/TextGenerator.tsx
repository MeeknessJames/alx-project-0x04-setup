import { useState } from 'react';
import Button from '../common/Button';

const TextGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateText = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedText(null); // Clear previous text

    try {
      // Simulate API call to a text generation AI
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

      let simulatedResponse = '';
      if (prompt.toLowerCase().includes('hello')) {
        simulatedResponse = 'Hello there! How can I assist you today?';
      } else if (prompt.toLowerCase().includes('weather')) {
        simulatedResponse = 'The weather is currently sunny with a slight breeze. Expect clear skies.';
      } else if (prompt.toLowerCase().includes('joke')) {
        simulatedResponse = 'Why don’t scientists trust atoms? Because they make up everything!';
      } else {
        simulatedResponse = `This is a simulated AI response for: "${prompt}".`;
      }

      setGeneratedText(simulatedResponse);
    } catch (err) {
      setError('Failed to generate text. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Text Generator AI</h2>
      <textarea
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
        placeholder="Enter your text prompt here (e.g., 'write a short story about a cat')"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Button
        buttonLabel={loading ? 'Generating...' : 'Generate Text'}
        buttonBackgroundColor="blue"
        action={handleGenerateText}
        buttonSize="w-full"
      />

      {generatedText && (
        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md w-full text-left">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Generated Text:</h3>
          <p className="text-gray-800 whitespace-pre-wrap">{generatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextGenerator;