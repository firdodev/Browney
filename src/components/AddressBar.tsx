import { useState, useEffect } from "react";

const AddressBar = ({ currentUrl, onNavigate, onBack, onForward }) => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        // Update the URL state when the currentUrl prop changes
        setUrl(currentUrl);
    }, [currentUrl]);

    const handleNavigate = () => {
      let formattedUrl = url;
      if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
        formattedUrl = `https://${formattedUrl}`;
      }
      if (formattedUrl) {
        onNavigate(formattedUrl);
      }
    };

    return (
      <div className="address-bar">
        <button onClick={onBack} className="nav-button">
          <svg className="icon" /* SVG for Back Icon */ />
        </button>
        <button onClick={onForward} className="nav-button">
          <svg className="icon" /* SVG for Forward Icon */ />
        </button>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL and press Enter"
          onKeyDown={(e) => e.key === 'Enter' && handleNavigate()}
        />
        <button onClick={handleNavigate}>Go</button>
      </div>
    );
};

export default AddressBar;
