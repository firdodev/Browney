import { useCallback, useEffect, useRef } from "react";

const Webview = ({ url, onUrlChange }) => {

    const ref = useRef<HTMLElement>(null);
  
    const handleUrlChange = useCallback((e) => {
      onUrlChange(e.url);
    }, [onUrlChange]);
  
    useEffect(() => {
      const webview = ref.current;
  
      if (webview) {
        webview.addEventListener('did-navigate', handleUrlChange);
        webview.addEventListener('did-navigate-in-page', handleUrlChange);
  
        return () => {
          webview.removeEventListener('did-navigate', handleUrlChange);
          webview.removeEventListener('did-navigate-in-page', handleUrlChange);
        };
      }
    }, [handleUrlChange]);
  
    return (
      <webview ref={ref} src={url} style={{ width: '100%', height: '100%' }}></webview>
    );
  };
  

export default Webview;