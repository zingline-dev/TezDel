import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Image, FileText, Share2 } from 'lucide-react';

// Inline Instagram icon — lucide-react's installed version doesn't include it
function InstagramIcon({ size = 22, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

type PostStatus = 'idle' | 'posting' | 'success' | 'error';

const DEFAULT_CAPTION = `🛑 Sick of paying crazy delivery fees just to get your favorite local food in Bhubaneswar?

The system is broken. Restaurants pay 30% to the apps, and YOU pay the hidden markup.

Enter TezDel. We are Bhubaneswar's first 100% commission-free food delivery platform. Fair for the restaurants, cheaper for you.

🔗 Hit the link in our bio to join the exclusive waitlist and support local!

#Bhubaneswar #BhubaneswarBuzz #FoodieBhubaneswar #TezDel #ZeroCommission #Odisha #SupportLocal`;

const DEFAULT_SLIDES = [
  'd:\\TezDel\\Frontend\\TezDel_Web\\src\\assets\\Post1.png',
  'd:\\TezDel\\Frontend\\TezDel_Web\\src\\assets\\Post2.png',
  'd:\\TezDel\\Frontend\\TezDel_Web\\src\\assets\\Post3.png',
];

export default function SocialTools() {
  const [caption, setCaption] = useState(DEFAULT_CAPTION);
  const [slides] = useState<string[]>(DEFAULT_SLIDES);
  const [status, setStatus] = useState<PostStatus>('idle');
  const [log, setLog] = useState('');
  const [requestId, setRequestId] = useState('');

  async function handlePost() {
    setStatus('posting');
    setLog('');
    setRequestId('');

    try {
      const response = await fetch('http://127.0.0.1:8787/api/social/instagram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caption, slides }),
      });

      const data = await response.json() as {
        ok: boolean;
        output?: string;
        requestId?: string;
        error?: string;
      };

      if (data.ok) {
        setStatus('success');
        setLog(data.output ?? 'Carousel posted successfully.');
        setRequestId(data.requestId ?? '');
      } else {
        setStatus('error');
        setLog(data.error ?? data.output ?? 'Post failed.');
      }
    } catch (error) {
      setStatus('error');
      setLog(error instanceof Error ? error.message : 'Could not reach Brain API.');
    }
  }

  return (
    <section className="social-tools" id="social" aria-label="Social Tools">
      <div className="section-title-row">
        <div>
          <p className="section-kicker">Marketing Automation</p>
          <h2>Social Publishing Tools</h2>
        </div>
        <span className="model-pill ollama">
          <span className="model-dot" />
          Instagram · Upload-Post API
        </span>
      </div>

      {/* Instagram Carousel Publisher */}
      <div className="social-card">
        <div className="social-card-head">
          <div className="social-icon-wrap">
            <InstagramIcon size={22} />
          </div>
          <div>
            <h3>Instagram Carousel Publisher</h3>
            <p>Post 3-slide branded carousel directly to TezDel's Instagram feed via Upload-Post API.</p>
          </div>
        </div>

        {/* Slides Preview */}
        <div className="social-slides-preview">
          {slides.map((slide, i) => (
            <div key={slide} className="social-slide-chip">
              <Image size={14} aria-hidden="true" />
              <span>Slide {i + 1}: {slide.split('\\').pop()}</span>
            </div>
          ))}
        </div>

        {/* Caption Editor */}
        <label className="task-box" htmlFor="instagram-caption">
          <span className="social-label-row">
            <FileText size={14} aria-hidden="true" />
            Caption &amp; Hashtags
          </span>
          <textarea
            id="instagram-caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={8}
          />
        </label>

        {/* Post Button */}
        <button
          className="primary-action wide"
          type="button"
          onClick={handlePost}
          disabled={status === 'posting'}
          id="post-instagram-btn"
        >
          {status === 'posting' ? (
            <Loader2 className="spin" size={18} aria-hidden="true" />
          ) : (
            <Send size={18} aria-hidden="true" />
          )}
          {status === 'posting' ? 'Posting to Instagram…' : 'Post Carousel to Instagram'}
        </button>

        {/* Status Output */}
        {status !== 'idle' && (
          <div className={`social-output ${status}`}>
            <div className="output-head">
              <span>
                {status === 'success' && <CheckCircle size={16} aria-hidden="true" />}
                {status === 'error' && <AlertCircle size={16} aria-hidden="true" />}
                {status === 'posting' && <Loader2 className="spin" size={16} aria-hidden="true" />}
                {status === 'success' ? 'Posted successfully' : status === 'error' ? 'Post failed' : 'Publishing…'}
              </span>
              {requestId && <small>Request ID: {requestId}</small>}
            </div>
            <pre>{log}</pre>
          </div>
        )}
      </div>

      {/* Info note */}
      <div className="library-howto">
        <Share2 size={18} aria-hidden="true" />
        <p>
          Posting triggers <code>scripts/post_to_instagram.py</code> via the Brain API.
          The Brain API must be running (<code>npm run api</code>) and Python must be installed.
        </p>
      </div>
    </section>
  );
}
