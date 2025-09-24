import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  onClose: () => void;
}

export function ImageTranslator({ onClose }: Props) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [extractedText, setExtractedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { currentLanguage, translations } = useLanguage();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setExtractedText('');
      setTranslatedText('');
      setDetectedLanguage('');
    }
  };

  const processImage = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);
    
    // Simulate OCR processing
    setTimeout(() => {
      // Mock extracted text based on common campus scenarios
      const mockTexts = [
        { 
          text: "कैंटीन आज बंद है - रसोई की सफाई के लिए। कल सुबह 8 बजे खुलेगा।", 
          language: "Hindi",
          translation: "Canteen is closed today - for kitchen cleaning. Will open tomorrow at 8 AM."
        },
        { 
          text: "లైబ్రరీ గంటలు: సోమవారం నుండి శనివారం వరకు ఉదయం 8 నుండి రాత్రి 10 వరకు", 
          language: "Telugu",
          translation: "Library hours: Monday to Saturday 8 AM to 10 PM"
        },
        {
          text: "Placement Drive - Tech Companies\nDate: 15th March 2024\nTime: 10:00 AM\nVenue: Auditorium",
          language: "English",
          translation: "Placement Drive - Tech Companies\nDate: 15th March 2024\nTime: 10:00 AM\nVenue: Auditorium"
        }
      ];
      
      const randomMock = mockTexts[Math.floor(Math.random() * mockTexts.length)];
      setExtractedText(randomMock.text);
      setDetectedLanguage(randomMock.language);
      setTranslatedText(randomMock.translation);
      setIsProcessing(false);
    }, 2000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setExtractedText('');
      setTranslatedText('');
      setDetectedLanguage('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Image Text Translator
        </h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"
        >
          {!previewUrl ? (
            <div>
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Drag and drop an image here, or click to select
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                Supports JPG, PNG, GIF up to 10MB
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Select Image
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full max-h-64 mx-auto rounded-lg shadow-sm"
              />
              <div className="flex justify-center space-x-3">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                >
                  Change Image
                </button>
                <button
                  onClick={processImage}
                  disabled={isProcessing}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded transition-colors"
                >
                  {isProcessing ? 'Processing...' : 'Extract Text'}
                </button>
              </div>
            </div>
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Processing Indicator */}
        {isProcessing && (
          <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            <span className="text-blue-600 dark:text-blue-400">
              Extracting text from image...
            </span>
          </div>
        )}

        {/* Results */}
        {extractedText && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Extracted Text */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Extracted Text
                </h3>
                {detectedLanguage && (
                  <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                    {detectedLanguage}
                  </span>
                )}
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-white whitespace-pre-wrap">
                  {extractedText}
                </p>
              </div>
            </div>

            {/* Translated Text */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Translation ({currentLanguage === 'en' ? 'English' : 
                            currentLanguage === 'hi' ? 'Hindi' : 'Telugu'})
              </h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-white whitespace-pre-wrap">
                  {translatedText}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {extractedText && (
          <div className="flex justify-center space-x-3">
            <button
              onClick={() => navigator.clipboard.writeText(extractedText)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
            >
              Copy Original
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(translatedText)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Copy Translation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}