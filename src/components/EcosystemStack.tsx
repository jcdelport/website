"use client";

import { useState } from "react";
import styles from "./EcosystemStack.module.css";

const layersData = [
  {
    id: "c01",
    num: "01",
    layerClass: styles.layer1,
    calloutClass: styles.c01,
    title: "Revenue Capture Engine",
    desc: "A high-performance booking ecosystem engineered to optimize chair occupancy and automate yield management.",
    svgPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
  },
  {
    id: "c02",
    num: "02",
    layerClass: styles.layer2,
    calloutClass: styles.c02,
    title: "The Retail Atelier",
    desc: "Native e-commerce and inventory infrastructure. From seamless client skincare sales to automated professional product procurement and stock control.",
    svgPath: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
  },
  {
    id: "c03",
    num: "03",
    layerClass: styles.layer3,
    calloutClass: styles.c03,
    title: "Operational ERP Core",
    desc: "The central hub for staff management. Integrated tracking of complex commission structures, real-time performance analytics, and multi-territory scheduling.",
    svgPath: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49-.12-.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
  },
  {
    id: "c04",
    num: "04",
    layerClass: styles.layer4,
    calloutClass: styles.c04,
    title: "App & Client Portal",
    desc: "Secure, brand-aligned mobile environments for direct client engagement and retention.",
    svgPath: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-5-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"
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
