"use client";

import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("alex@avdey.design");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    document
      .querySelectorAll(".full-row, .text-break, .case-study, .foot")
      .forEach((el) => io.observe(el));

    const videoIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const video = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("video").forEach((v) => {
      v.removeAttribute("autoplay");
      v.pause();
      videoIo.observe(v);
    });

    const smiley = document.getElementById("smiley");
    const handleScroll = () => {
      if (smiley) {
        const rotation = window.scrollY * 0.1;
        smiley.style.transform = `translate(-50%, -50%) rotateY(${rotation}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => { io.disconnect(); videoIo.disconnect(); window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <>
      <img id="smiley" src="/smiley.svg" alt="" className="smiley" />

      {/* HERO */}
      <div className="hero">
        <img src="/hero-logo.svg" alt="Avdey Design + Tembo" className="hero-logo" />
      </div>

      {/* PROPOSAL TEXT */}
      <div className="proposal-section">
        <div className="proposal-section-heading">
          <h3>What I Heard</h3>
        </div>
        <div className="proposal-section-body">
          <p>Tembo lets companies run any AI coding agent, any model, inside their own infrastructure without getting locked into one provider. The whole point is that you pick what works, you self-host it, and when something better comes along, you switch.</p>
          <p>Tembo is signing companies with 200–500 person engineering teams while being a team of eight, so the product is clearly working and it's got traction, but the brand hasn&apos;t caught up.</p>
        </div>
      </div>

      <div className="proposal-section">
        <div className="proposal-section-heading">
          <h3>The Goals</h3>
        </div>
        <div className="proposal-section-body">
          <p><strong>People know it&apos;s Tembo.</strong> Tembo is top of mind along with the big players, like Cursor or Devin, but clearly distinct, consistent across all the channels and visually unique.</p>
          <p><strong>Tembo looks serious enough for enterprise.</strong> When enterprise buyers look you up after a demo, the brand reinforces what your sales team just told them.</p>
          <p><strong>Tembo is a company people are excited to work with.</strong> The brand makes Tembo look like a company where talent actually wants to be.</p>
          <p><strong>Your team moves fast.</strong> Your sales and marketing people open a tool, type a few words and export a branded social graphic without a designer.</p>
          <p><strong>Tembo&apos;s brand still works when you go beyond engineering.</strong> When you expand beyond engineering into sales, growth, and the rest of the company, the brand scales naturally.</p>
        </div>
      </div>

      <div className="proposal-section">
        <div className="proposal-section-heading">
          <h3>Timeline</h3>
        </div>
        <div className="proposal-section-body">
          <p><strong>Weeks 1–2 — Strategy &amp; visual identity.</strong> We start with a couple of strategic workshops to understand narrative, positioning, audience and competitive landscape. Based on the strategy, we&apos;ll create 5 moodboards to start looking for a direction.</p>
          <p>After we agree on the broad directions, we&apos;ll develop 2 identity concepts, which can then be refined further.</p>
          <p><strong>Week 3 — Polish and toolkits.</strong> Once we pick and agree on the final direction, we&apos;ll move to actually applying it to your immediate tasks and creating templates, guidelines and tooling, so you can move quickly.</p>
          <p><strong>Weeks 4–6 — Website design.</strong> We&apos;ll audit the current website, analyze your sales calls and marketing to create a better website structure and write the copy to maximize conversion.</p>
          <p>We then move to design and start development in parallel as the pages are getting finished.</p>
          <p><strong>Weeks 6–8 — Development, polish and handoff.</strong> With designs finalized we focus on development, QA and final handoff of the project.</p>
        </div>
      </div>

      <div className="proposal-section">
        <div className="proposal-section-heading">
          <h3>Price</h3>
        </div>
        <div className="proposal-section-body">
          <p><strong>$20,000 total costs</strong></p>
          <ul>
            <li>$10,000 upfront (50%)</li>
            <li>$5,000 when we lock the identity (25%)</li>
            <li>$5,000 on final delivery (25%)</li>
          </ul>
        </div>
      </div>

      <div className="proposal-section">
        <div className="proposal-section-heading">
          <h3>Next</h3>
        </div>
        <div className="proposal-section-body">
          <p>If this feels right, I&apos;ll send a contract and we book the strategy workshop for the first week of April.</p>
        </div>
      </div>

      <div style={{ padding: "64px 48px" }}>
        <img src="/past-work.svg" alt="Past work" style={{ width: "100%", height: "auto", display: "block", opacity: 0.12 }} />
      </div>

      {/* LIVING ASSETS */}
      <div className="case-study" data-study="la">
        <div className="case-study-text">
          <p>Brand identity, website and product explorations for Living Assets</p>
          <p className="sub">Infrastructural AI company helping creatives protect and monetize their work.<br /><br />Backed by Antler. </p>
        </div>
        <div className="case-study-content">
          <div data-block="la-logo" style={{ display: "flex", justifyContent: "flex-start", paddingBottom: 12 }}>
            <div>
              <video src="/la-logo-video.mp4" autoPlay muted loop playsInline style={{ width: 180, height: 180, objectFit: "cover", display: "block", borderRadius: "50%" }} />
            </div>
          </div>

          <div data-block="la-splash" style={{ width: "60%", paddingBottom: 12, marginLeft: "auto" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto", background: "none", borderRadius: "var(--r)" }}>
                <img src="/la-splash.jpg" alt="Living Assets splash" style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
          </div>

          <div data-block="la-socials" className="trio" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto" }}>
                <img src="/la-socials.jpg" alt="Living Assets socials" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
            <div className="trio-card" style={{ visibility: "hidden" }}>
            </div>
          </div>

          <div data-block="la-poster" className="full-row single">
            <div className="card mid" style={{ overflow: "hidden" }}>
              <img src="/la-poster.jpg" alt="Living Assets poster" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          <div data-block="la-laptop" className="full-row single" style={{ display: "flex", justifyContent: "center", padding: "64px 0" }}>
            <img src="/la-laptop.png" alt="Living Assets laptop" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <div data-block="la-sticker-video" className="trio" style={{ gridTemplateColumns: "1fr 2fr" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ backgroundImage: "url(/la-sticker.jpg)", backgroundSize: "cover", backgroundPosition: "center", width: 180, height: 180, borderRadius: "50%" }}>
              </div>
            </div>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "auto", height: "auto", width: "100%", background: "none" }}>
                <video src="/la-video-2.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>

          <div data-block="la-video-left" style={{ display: "flex", justifyContent: "flex-start", paddingBottom: 12 }}>
            <div style={{ width: "33.333%" }}>
              <div className="trio-card">
                <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "1/1", height: "auto", width: "100%" }}>
                  <video src="/la-video.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>

          <div data-block="la-video-center" style={{ display: "flex", justifyContent: "center", paddingBottom: 12 }}>
            <div style={{ width: "33.333%" }}>
              <div className="trio-card">
                <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "1/1", height: "auto", width: "100%" }}>
                  <video src="/la-video3.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>

          <div data-block="la-video-right" style={{ display: "flex", justifyContent: "flex-end", paddingBottom: 12 }}>
            <div style={{ width: "33.333%" }}>
              <div className="trio-card">
                <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "1/1", height: "auto", width: "100%" }}>
                  <video src="/la-video4.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>

          <div data-block="la-graph-icons" className="trio" style={{ gridTemplateColumns: "2fr 1fr", alignItems: "end" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto", background: "none", borderRadius: "var(--r)" }}>
                <img src="/la-graph.jpg" alt="Living Assets graph" style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
            <div className="trio-card" style={{ alignSelf: "end" }}>
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1", background: "none", borderRadius: "var(--r)" }}>
                <img src="/la-icons.jpg" alt="Living Assets icons" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROVABLE */}
      <div className="case-study" data-study="provable">
        <div className="case-study-text">
          <p>Brand identity, website, product design for Provable</p>
          <p className="sub">Provable equips developers to build secure, private applications on Aleo.<br /><br />Backed by a16z, Soft Bank, Coinbase Ventures and others.</p>
        </div>
        <div className="case-study-content">
          <div data-block="provable-logo" className="trio" style={{ gridTemplateColumns: "1fr" }}>
            <div className="trio-card">
              <video src="/provable-logo.mp4" autoPlay muted loop playsInline style={{ width: 180, height: 180, objectFit: "cover", display: "block", borderRadius: "50%" }} />
            </div>
          </div>

          <div data-block="provable-pattern" className="trio" style={{ gridTemplateColumns: "1fr 2fr" }}>
            <div className="trio-card" style={{ visibility: "hidden" }}>
            </div>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto", background: "none", borderRadius: "var(--r)" }}>
                <video src="/provable-pattern.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
          </div>

          <div data-block="provable-poster" className="trio" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto" }}>
                <img src="/provable-poster.png" alt="Provable poster" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
            <div className="trio-card" style={{ visibility: "hidden" }}>
            </div>
          </div>

          <div data-block="provable-soc-sequence" style={{ paddingBottom: 12, borderRadius: "var(--r)", overflow: "hidden" }}>
            <video src="/provable-soc-sequence2.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <div data-block="provable-web" className="full-row single" style={{ paddingBottom: 12, borderRadius: "var(--r)", overflow: "hidden" }}>
            <video src="/provable-web.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <div data-block="provable-tool" style={{ paddingBottom: 12 }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto", background: "none", borderRadius: "var(--r)" }}>
                <video src="/provable-tool.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
          </div>

          <div data-block="provable-stickers" style={{ display: "flex", justifyContent: "flex-start", paddingBottom: 12 }}>
            <div style={{ width: "33.333%" }}>
              <div className="trio-card">
                <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "1/1", height: "auto", width: "100%" }}>
                  <img src="/provable-stickers.jpg" alt="Provable stickers" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <video src="/provable-coin.mp4" autoPlay muted loop playsInline style={{ width: 180, height: 180, objectFit: "cover", display: "block", borderRadius: "50%" }} />
            </div>
          </div>

          <div data-block="provable-super-poster" style={{ display: "flex", justifyContent: "center", paddingBottom: 12 }}>
            <div style={{ width: "33.333%" }}>
              <div className="trio-card">
                <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "auto", height: "auto", width: "100%", background: "none" }}>
                  <video src="/provable-super-poster.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
            </div>
          </div>

          <div data-block="provable-merch" style={{ display: "flex", justifyContent: "flex-end", paddingBottom: 12 }}>
            <div style={{ width: "33.333%" }}>
              <div className="trio-card">
                <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "1/1", height: "auto", width: "100%" }}>
                  <img src="/provable-merch.jpg" alt="Provable merch" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>

          <div data-block="provable-tool2-icons" className="trio" style={{ gridTemplateColumns: "2fr 1fr", alignItems: "end" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto", background: "none", borderRadius: "var(--r)" }}>
                <video src="/provable-tool2.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
            <div className="trio-card" style={{ alignSelf: "end" }}>
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1", background: "none", borderRadius: "var(--r)" }}>
                <img src="/provable-icons.jpg" alt="Provable icons" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AC */}
      <div className="case-study" data-study="ac">
        <div className="case-study-text">
          <p>Brand identity for Agentchain</p>
          <p className="sub">Web3 project democratizing financial data.<br /><br />Backed by ENS and Optimism.</p>
        </div>
        <div className="case-study-content">
          <div data-block="ac-logo" className="trio" style={{ gridTemplateColumns: "1fr" }}>
            <div className="trio-card">
              <video src="/ac-logo.mp4" autoPlay muted loop playsInline style={{ width: 180, height: 180, objectFit: "cover", display: "block", borderRadius: "50%" }} />
            </div>
          </div>

          <div data-block="ac-patterns" className="trio" style={{ gridTemplateColumns: "1fr 2fr" }}>
            <div className="trio-card" style={{ visibility: "hidden" }}>
            </div>
            <div className="trio-card" style={{ display: "flex", justifyContent: "flex-end" }}>
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1", background: "none", borderRadius: "var(--r)", width: "70%" }}>
                <video src="/ac-patterns.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
          </div>

          <div data-block="ac-splash" className="trio" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto" }}>
                <img src="/ac-splash.jpg" alt="AC splash" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
            <div className="trio-card" style={{ visibility: "hidden" }}>
            </div>
          </div>

          <div data-block="ac-billboards" style={{ paddingBottom: 12 }}>
            <video src="/ac-billboards.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--r)" }} />
          </div>

          <div data-block="ac-social" className="full-row single" style={{ paddingBottom: 12, borderRadius: "var(--r)", overflow: "hidden" }}>
            <img src="/ac-social.jpg" alt="AC social" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <div data-block="ac-ui" className="trio" style={{ gridTemplateColumns: "1fr" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto", background: "none", borderRadius: "var(--r)" }}>
                <video src="/ac-ui.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
          </div>

          <div data-block="ac-lightbox" style={{ display: "flex", justifyContent: "flex-end", paddingBottom: 12 }}>
            <div style={{ width: "66.666%" }}>
              <div className="trio-card">
                <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "auto", height: "auto", width: "100%", background: "none" }}>
                  <video src="/ac-lightbox.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
            </div>
          </div>

          <div data-block="ac-merch" style={{ display: "flex", justifyContent: "flex-start", paddingBottom: 12 }}>
            <div style={{ width: "33.333%" }}>
              <div className="trio-card">
                <div className="trio-media" style={{ overflow: "hidden", aspectRatio: "1/1", height: "auto", width: "100%" }}>
                  <img src="/ac-merch.jpg" alt="AC merch" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>

          <div data-block="ac-tool" className="trio" style={{ gridTemplateColumns: "1fr" }}>
            <div className="trio-card">
              <div className="trio-media" style={{ overflow: "hidden", padding: 0, aspectRatio: "auto", background: "none", borderRadius: "var(--r)" }}>
                <video src="/ac-tool.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--r)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-bar">
        <a href="mailto:alex@avdey.design" className="fixed-bar-cta">Let&apos;s do it</a>
        <div className="fixed-bar-icons">
          <a href="https://x.com/privetavdey" target="_blank" rel="noopener noreferrer" className="fixed-bar-icon" aria-label="X profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <button onClick={handleCopyEmail} className="fixed-bar-icon" aria-label="Copy email">
            {copied ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            )}
          </button>
          <a href="https://cal.com/avdeydesign/kickoff" target="_blank" rel="noopener noreferrer" className="fixed-bar-icon" aria-label="Book a call">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
          </a>
        </div>
      </div>
    </>
  );
}
