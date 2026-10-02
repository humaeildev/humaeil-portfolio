import React, { useEffect, useRef, useState } from 'react';

const PDFJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs';
const WORKER_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';

function loadPdfjsFromCDN() {
  return new Promise((resolve, reject) => {
    // If already loaded, return it
    if (window.__pdfjs__) return resolve(window.__pdfjs__);

    import(/* @vite-ignore */ PDFJS_CDN)
      .then((pdfjs) => {
        pdfjs.GlobalWorkerOptions.workerSrc = WORKER_CDN;
        window.__pdfjs__ = pdfjs;
        resolve(pdfjs);
      })
      .catch(reject);
  });
}

export const PdfViewer = ({ url, onClose }) => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const renderPdf = async () => {
      try {
        setLoading(true);
        setError(null);

        const pdfjs = await loadPdfjsFromCDN();
        const pdf = await pdfjs.getDocument(url).promise;

        if (cancelled) return;

        setNumPages(pdf.numPages);
        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = '';

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (cancelled) break;

          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 1.8 });

          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.cssText = `
            width: 100%;
            height: auto;
            display: block;
            margin-bottom: 12px;
            border-radius: 8px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.35);
          `;

          const ctx = canvas.getContext('2d');
          await page.render({ canvasContext: ctx, viewport }).promise;

          if (!cancelled && containerRef.current) {
            containerRef.current.appendChild(canvas);
          }
        }

        if (!cancelled) setLoading(false);
      } catch (err) {
        if (!cancelled) {
          setError('Could not load the document. Please check your internet connection.');
          setLoading(false);
          console.error(err);
        }
      }
    };

    renderPdf();
    return () => { cancelled = true; };
  }, [url]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center"
      style={{ backgroundColor: 'rgba(8,8,8,0.94)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 mt-6 mb-6 flex flex-col rounded-2xl overflow-hidden"
        style={{
          maxHeight: 'calc(100vh - 48px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 shrink-0"
          style={{
            background: 'rgba(20,20,20,0.99)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E24A26] inline-block" />
            <span className="text-white text-sm font-semibold tracking-wide">Project Document</span>
            {numPages > 0 && (
              <span className="text-white/35 text-xs ml-1">— {numPages} pages</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all text-lg"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable pages area */}
        <div
          className="overflow-y-auto flex-1 px-6 py-6"
          style={{
            background: 'rgba(14,14,14,0.99)',
            scrollbarWidth: 'thin',
            scrollbarColor: '#E24A26 transparent',
          }}
        >
          {loading && (
            <div className="flex flex-col items-center justify-center py-32 gap-5">
              <div
                className="w-12 h-12 rounded-full border-2 border-[#E24A26] border-t-transparent"
                style={{ animation: 'spin 0.8s linear infinite' }}
              />
              <p className="text-white/40 text-sm tracking-wide">Rendering document pages…</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <span className="text-3xl">⚠️</span>
              <p className="text-red-400 text-sm text-center max-w-xs">{error}</p>
            </div>
          )}

          <div ref={containerRef} />
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
