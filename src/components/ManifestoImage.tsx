
import { useEffect, useState } from 'react';

interface ManifestoImageProps {
  imageNumber: string;
  altText: string;
}

const ManifestoImage = ({ imageNumber, altText }: ManifestoImageProps) => {
  const [error, setError] = useState(false);
  const imageUrl = `https://github.com/SentientIQ/manifesto/raw/main/Manifesto%20Images/${imageNumber}`;

  useEffect(() => {
    // Reset error state when imageNumber changes
    setError(false);
  }, [imageNumber]);

  return (
    <div className="manifesto-image-container">
      {error ? (
        <div className="bg-manifesto-darkPurple text-manifesto-lightPurple p-8 rounded-lg text-center">
          <p className="font-medium">Image {imageNumber} not found</p>
          <p className="text-sm mt-2">Path: {imageUrl}</p>
        </div>
      ) : (
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-auto rounded shadow-md"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default ManifestoImage;
