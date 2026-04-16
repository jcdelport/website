"use client";

import { useState } from "react";
import styles from "./EcosystemStack.module.css";

const layersData = [
  {
    id: "c01",
    num: "01",
    layerClass: styles.layer1,
    calloutClass: styles.c01,
    title: "Brand, UI/UX & Storytelling",
    desc: "Strategic brand identity, interface design and user experience foundation.",
    svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  },
  {
    id: "c02",
    num: "02",
    layerClass: styles.layer2,
    calloutClass: styles.c02,
    title: "Content Creation Engine",
    desc: "Graphic design, copywriting, videography and photography for campaign-ready brand communication.",
    svgPath: "M4 4h3l2-2h6l2 2h3c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
  },
  {
    id: "c03",
    num: "03",
    layerClass: styles.layer3,
    calloutClass: styles.c03,
    title: "Website Platform",
    desc: "High-performance website built for credibility, visibility and conversion.",
    svgPath: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm1.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
  },
  {
    id: "c04",
    num: "04",
    layerClass: styles.layer4,
    calloutClass: styles.c04,
    title: "App & Client Portal",
    desc: "Secure user environment for engagement, dashboards and interaction.",
    svgPath: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-5-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"
  },
  {
    id: "c05",
    num: "05",
    layerClass: styles.layer5,
    calloutClass: styles.c05,
    title: "CMS Content Engine",
    desc: "Structured content management for pages, posts, media and updates.",
    svgPath: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
  },
  {
    id: "c06",
    num: "06",
    layerClass: styles.layer6,
    calloutClass: styles.c06,
    title: "CRM & Lead Flow",
    desc: "Lead capture, pipeline management and customer relationship tracking.",
    svgPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
  },
  {
    id: "c07",
    num: "07",
    layerClass: styles.layer7,
    calloutClass: styles.c07,
    title: "ERP & Operations Core",
    desc: "Internal workflows, reporting, operational systems and business logic.",
    svgPath: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49-.12-.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
  },
  {
    id: "c08",
    num: "08",
    layerClass: styles.layer8,
    calloutClass: styles.c08,
    title: "Store, Funnels & Integrations",
    desc: "Online store, sales funnels, automations, payment gateways and integrations.",
    svgPath: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
  }
];

export default function EcosystemStack() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isInteracting = activeIndex !== null;

  return (
    <div className={styles.root}>
      <section className={`${styles.scene} ${isInteracting ? styles.isInteracting : ""}`}>
        
        <div className={styles.stackCore}>
          {layersData.map((layer, index) => (
            <div 
              key={`layer-${layer.id}`}
              className={`${styles.layer} ${layer.layerClass} ${activeIndex === index ? styles.active : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <svg className={styles.layerIcon} viewBox="0 0 24 24">
                <path d={layer.svgPath} />
              </svg>
            </div>
          ))}
        </div>

        <div className={styles.desktopOnly}>
          {layersData.map((layer, index) => (
            <div 
              key={`callout-${layer.id}`}
              className={`${styles.callout} ${layer.calloutClass} ${activeIndex === index ? styles.active : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={styles.num}>{layer.num}</div>
              <div className={styles.textWrapper}>
                <div className={styles.title}>{layer.title}</div>
                <div className={styles.desc}>{layer.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mobileList}>
          {layersData.map((layer) => (
            <div key={`mobile-${layer.id}`} className={styles.mobileCard}>
              <div className={styles.num}>{layer.num}</div>
              <div className={styles.textWrapper}>
                <div className={styles.title}>{layer.title}</div>
                <div className={styles.desc}>{layer.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
