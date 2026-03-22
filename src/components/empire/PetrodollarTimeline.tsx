"use client";

import { motion } from "framer-motion";

const events = [
  { year: "1974", title: "The Original Deal", body: "US Treasury Secretary William Simon and Henry Kissinger negotiate with Saudi Arabia: OPEC sells oil in dollars only. The US receives dollar recycling into Treasury bonds. Saudi Arabia gets military protection. The architecture that has funded American deficits for five decades is born.", pre2022: true },
  { year: "2000", title: "Iraq Switches to Euros", body: "Saddam Hussein announces Iraq will sell oil in euros, not dollars. The first direct challenge to petrodollar supremacy by an OPEC member. Within three years, the US invades Iraq. The euro oil account is switched back to dollars within weeks of Baghdad falling.", pre2022: true },
  { year: "2009", title: "China\u2013Brazil Yuan\u2013Real Pact", body: "The world\u2019s largest emerging economy and Latin America\u2019s biggest begin settling trade in yuan and reais, bypassing the dollar entirely. Quiet. Technical. The beginning of the plumbing that will eventually route around SWIFT.", pre2022: true },
  { year: "2011", title: "Gaddafi\u2019s Gold Dinar", body: "Declassified Hillary Clinton emails later reveal that one of the primary concerns driving Western intervention in Libya was Gaddafi\u2019s plan to create a pan-African gold-backed currency to replace the dollar for oil transactions across the continent. Gaddafi is removed. The gold dinar plan dies with him.", pre2022: true },
  { year: "2012", title: "Iran Pioneers Dollar Bypass", body: "Sanctioned out of the dollar system entirely, Iran pioneers what other nations will later study carefully: how to trade energy outside the petrodollar framework. Gold, barter, rupees, yuan. Iran becomes the world\u2019s first live test case for post-dollar energy trade.", pre2022: true },
  { year: "2014", title: "Power of Siberia Deal", body: "Following the first Ukraine crisis and Western sanctions, Russia and China announce the Power of Siberia pipeline deal. Pricing and settlement structures deliberately designed to operate outside dollar-dominated clearing. The eastern energy corridor begins forming.", pre2022: true },
  { year: "2015", title: "CIPS Goes Live", body: "The Cross-Border Interbank Payment System goes live. Smaller than SWIFT, limited in reach \u2014 but the infrastructure exists. A payment highway that does not touch the US dollar system.", pre2022: true },
  { year: "2018", title: "The Petroyuan Launches", body: "The Shanghai International Energy Exchange opens yuan-priced crude oil futures \u2014 the \u201cpetroyuan.\u201d For the first time, there is a credible, liquid, internationally accessible mechanism to price oil outside the dollar. Russia and Iran immediately begin using it.", pre2022: true },
  { year: "2019", title: "India\u2013Iran Rupee Oil", body: "Under US sanctions pressure, India engineers rupee-denominated payments for Iranian crude. A template for bilateral energy trade in local currencies.", pre2022: true },
  { year: "2022", title: "Russian Reserves Frozen", body: "The US freezes $300 billion in Russian sovereign reserves. Russia is expelled from SWIFT. The US demonstrates to every nation holding dollar reserves that those reserves are conditionally held \u2014 subject to confiscation if Washington decides. This single decision accelerates dedollarisation more than all previous events combined.", pre2022: false },
  { year: "2022", title: "Rubles for Gas", body: "Putin demands European nations pay for Russian gas in rubles \u2014 a direct strike at the petrodollar norm. Several European nations quietly comply rather than freeze.", pre2022: false },
  { year: "2022", title: "Xi Visits Saudi Arabia", body: "Xi Jinping visits Saudi Arabia. The two nations announce discussions on yuan-denominated oil pricing. For the first time, the nation at the heart of the original petrodollar deal publicly signals willingness to transact in a competing currency.", pre2022: false },
  { year: "2023", title: "First LNG in Yuan", body: "A French major energy company completes the first liquefied natural gas trade settled entirely in Chinese yuan, cleared through the Shanghai Petroleum and Natural Gas Exchange. A Western energy company participates in the petroyuan system. The taboo is broken.", pre2022: false },
  { year: "2023", title: "Brazil Exits Dollar with China", body: "Brazil officially announces it will conduct all trade with China \u2014 its largest trading partner \u2014 in yuan and reais. No dollar intermediary. The largest economy in Latin America exits the petrodollar for its most important trading relationship.", pre2022: false },
  { year: "2023", title: "India\u2013Russia Dirham Route", body: "India, buying Russian oil at a heavy discount following Western sanctions, engineers payment mechanisms using UAE dirhams and Indian rupees. Entirely outside the dollar system.", pre2022: false },
  { year: "2023", title: "BRICS Expands", body: "BRICS invites six new members including, critically, Saudi Arabia and Iran simultaneously \u2014 the two regional powers the US has spent decades keeping apart. The bloc now represents over 40% of global GDP by purchasing power parity.", pre2022: false },
  { year: "2024", title: "Petrodollar Deal Expires", body: "The 1974 agreement between the US and Saudi Arabia \u2014 the original petrodollar deal \u2014 expires. Saudi Arabia does not renew it. The kingdom quietly begins accepting yuan, euros, and other currencies for oil. The foundational agreement of dollar hegemony simply ceases to exist.", pre2022: false },
  { year: "2025", title: "Asian Monetary Fund Calls", body: "Southeast Asian nations \u2014 Malaysia, Indonesia, Thailand \u2014 formally discuss reducing dollar dependency in intraregional trade. Malaysia\u2019s Prime Minister publicly calls for an \u201cAsian Monetary Fund.\u201d", pre2022: false },
];

export default function PetrodollarTimeline() {
  return (
    <div className="my-16 md:my-24">
      <div className="relative border-l-2 border-rule ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
        {events.map((event, i) => (
          <motion.div
            key={`${event.year}-${event.title}`}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
          >
            {/* Dot on timeline */}
            <div className={`absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] w-3 h-3 rounded-full border-2 ${
              event.pre2022
                ? "border-muted/40 bg-white"
                : "border-primary bg-primary"
            }`} />

            <p className={`font-mono text-[11px] tracking-[0.2em] uppercase mb-1 ${
              event.pre2022 ? "text-muted/50" : "text-primary"
            }`}>
              {event.year}
            </p>
            <h4 className={`font-playfair text-lg mb-2 ${
              event.pre2022 ? "text-muted" : "text-text"
            }`}>
              {event.title}
            </h4>
            <p className={`font-lora text-sm leading-relaxed ${
              event.pre2022 ? "text-muted/60" : "text-text/80"
            }`}>
              {event.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
