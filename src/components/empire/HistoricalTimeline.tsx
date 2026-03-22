"use client";

import { motion } from "framer-motion";

const events = [
  { year: "1944", title: "Bretton Woods", body: "The last time the global monetary system reset. The pound fell. The dollar rose. It is backed by gold at $35 per ounce. The US owns 65% of the world\u2019s gold reserves." },
  { year: "1971", title: "Nixon Closes the Gold Window", body: "Nixon ends the convertibility of dollars to gold. The dollar is now backed by nothing but faith. This is where our current system begins \u2014 and where its terminal countdown starts." },
  { year: "1974", title: "The Petrodollar", body: "Saudi Arabia agrees to price oil exclusively in dollars. All oil-importing nations must hold dollars. This creates artificial, permanent demand for the dollar \u2014 the genius of Kissinger\u2019s design." },
  { year: "2008", title: "The Financial Crisis", body: "The penultimate short-term debt cycle collapses. The Fed prints $700B+ in emergency measures. The long-term debt cycle continues its descent." },
  { year: "2020", title: "COVID \u2014 The Money Printer", body: "$6 trillion printed in months. M2 money supply surges. The original thesis written. Bitcoin breaks $20,000 for the first time, then retreats. The ground is laid." },
  { year: "2022", title: "Ukraine \u2014 Financial Weaponisation", body: "Russia invades. $300B in reserves frozen. Every nation watching learns: dollar reserves are not neutral. Dedollarisation becomes a policy priority globally." },
  { year: "2023", title: "The Middle East Ignites", body: "Hamas attacks October 7th. US deploys two carrier groups. Houthi attacks on Red Sea shipping begin. Direct US\u2013Iran missile exchanges. The Middle East front opens simultaneously with Ukraine." },
  { year: "2024\u20132025", title: "The Fiscal Trap", body: "Annual interest payments on US debt exceed $1 trillion for the first time in history. US fighting on two proxy fronts. BRICS expands to include Iran, Saudi Arabia, UAE, Egypt, Ethiopia." },
  { year: "2025\u2013?", title: "Taiwan", body: "The question is not if. The question is when, and whether US credibility will have already been spent by then. The semiconductor chokepoint. The Pacific deterrence test. The final dominoes." },
  { year: "2030s", title: "The Reset", body: "The long-term debt cycle completes. A new monetary architecture emerges \u2014 likely multipolar, digital, partially gold-backed. The question is whether the transition is managed or catastrophic." },
];

export default function HistoricalTimeline() {
  return (
    <div className="my-16 md:my-24">
      <div className="relative border-l-2 border-rule ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
        {events.map((event, i) => (
          <motion.div
            key={event.year}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
          >
            <div className="absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] w-3 h-3 rounded-full border-2 border-primary bg-primary" />
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary mb-1">
              {event.year}
            </p>
            <h4 className="font-playfair text-lg text-text mb-2">
              {event.title}
            </h4>
            <p className="font-lora text-sm text-text/80 leading-relaxed">
              {event.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
