import React, { useState } from 'react';
import './App.css';
import AddressBar from './components/AddressBar';
import Webview from './components/WebView';

function App() {
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleNavigate = (url: never) => {
    const newHistory = [...history];
    newHistory.splice(currentIndex + 1, history.length - currentIndex, url);
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
  };

  const handleUrlChange = (newUrl:never) => {
    // Add the new URL to the history
    const newHistory = [...history];
    newHistory.splice(currentIndex + 1, history.length - currentIndex, newUrl);
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleForward = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="browser">
      <AddressBar 
        currentUrl={history[currentIndex]}
        onNavigate={handleNavigate} 
        onBack={handleBack} 
        onForward={handleForward} 
      />
      <Webview url={history[currentIndex]} onUrlChange={handleUrlChange}/>
    </div>
  );
}

export default App;
