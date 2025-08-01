import { useState } from 'react';
import Button from '../common/Button';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }

    setLoading(true);
    setError(null);
    setImageUrl(null); 

    try {
     
      await new Promise(resolve => setTimeout(resolve, 2000)); 

      let generatedImage = '';
      if (prompt.toLowerCase().includes('cat')) {
        generatedImage = 'https://via.placeholder.com/400x300?text=Cute+Cat+Image';
      } else if (prompt.toLowerCase().includes('dog')) {
        generatedImage = 'https://via.placeholder.com/400x300?text=Happy+Dog+Image';
      } else if (prompt.toLowerCase().includes('space')) {
        generatedImage = 'https://via.placeholder.com/400x300?text=Galactic+View';
      } else {
        generatedImage = 'https://via.placeholder.com/400x300?text=Generated+Image';
      }

      setImageUrl(generatedImage);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Image Generator AI</h2>
      <input
        type="text"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your image prompt (e.g., 'a cat in space')"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Button
        buttonLabel={loading ? 'Generating...' : 'Generate Image'}
        buttonBackgroundColor="blue"
        action={handleGenerateImage}
        buttonSize="w-full"
      />

      {imageUrl && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Generated Image:</h3>
          <img src={imageUrl} alt="Generated AI Image" className="rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;