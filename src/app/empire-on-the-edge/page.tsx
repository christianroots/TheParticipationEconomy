"use client";

import { motion } from "framer-motion";
import EENavigation from "@/components/empire/EENavigation";
import EEHero from "@/components/empire/EEHero";
import EEFooter from "@/components/empire/EEFooter";
import EEBackToTop from "@/components/empire/EEBackToTop";
import PartDivider from "@/components/empire/PartDivider";
import StatCardGrid from "@/components/empire/StatCard";
import PetrodollarTimeline from "@/components/empire/PetrodollarTimeline";
import HistoricalTimeline from "@/components/empire/HistoricalTimeline";
import AsymmetryTable from "@/components/empire/AsymmetryTable";
import TaiwanScenarioCards from "@/components/empire/TaiwanScenarioCards";
import USDebtChart from "@/components/empire/charts/USDebtChart";
import USDReservesChart from "@/components/empire/charts/USDReservesChart";
import MilitarySpendingChart from "@/components/empire/charts/MilitarySpendingChart";
import GoldPurchasesChart from "@/components/empire/charts/GoldPurchasesChart";
import PetrodollarDeclineChart from "@/components/empire/charts/PetrodollarDeclineChart";
import EnergyCapacityChart from "@/components/empire/charts/EnergyCapacityChart";
import PlanningTimelineChart from "@/components/empire/charts/PlanningTimelineChart";
import DecisionSpeedChart from "@/components/empire/charts/DecisionSpeedChart";
import AssetPerformanceChart from "@/components/empire/charts/AssetPerformanceChart";
import USOverreachChart from "@/components/empire/charts/USOverreachChart";
import NavalShipbuildingChart from "@/components/empire/charts/NavalShipbuildingChart";

/* ── Reusable inline components ─────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      className="font-playfair text-3xl md:text-4xl lg:text-[2.75rem] text-text leading-tight mb-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      className="font-lora text-lg md:text-xl text-muted italic mb-10 leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="font-lora text-[17px] md:text-lg text-text/90 leading-[1.85] space-y-6 mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <motion.blockquote
      className="my-14 md:my-20 py-8 md:py-10 px-6 md:px-10 border-t border-b border-primary/20 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-playfair text-xl md:text-2xl lg:text-[1.65rem] text-text italic leading-relaxed max-w-2xl mx-auto">
        {children}
      </p>
    </motion.blockquote>
  );
}

function OriginalQuote({ children }: { children: React.ReactNode }) {
  return (
    <motion.blockquote
      className="my-14 md:my-20 py-8 md:py-10 px-6 md:px-10 border-t border-b border-amber-500/30 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-playfair text-xl md:text-2xl lg:text-[1.65rem] text-text italic leading-relaxed max-w-2xl mx-auto">
        {children}
      </p>
      <p className="font-mono text-[10px] text-amber-600 mt-4 tracking-[0.2em] uppercase">
        &mdash; The Great Reset Thesis, 2020
      </p>
    </motion.blockquote>
  );
}

function Divider() {
  return <hr className="border-t border-rule my-16 md:my-24" />;
}

function ChartContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 md:my-14 max-w-chart mx-auto">
      {children}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────── */

export default function EmpireOnTheEdgePage() {
  return (
    <main className="bg-white text-text min-h-screen">
      <EENavigation />
      <EEBackToTop />
      <EEHero />

      <div className="max-w-content mx-auto px-6 md:px-8">

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART I — THE FRAMEWORK                             */}
        {/* ═══════════════════════════════════════════════════ */}
        <PartDivider
          id="part-one"
          part="Part I"
          title="The Framework"
          subtitle="The financial architecture, the debt cycle, and the real prize beneath the wars"
        />

        {/* ─────────────────────────────────────────────────── */}
        {/* 01 · Where We Left Off                             */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="where-we-left-off" className="pt-8">
          <SectionLabel>01 &middot; Where We Left Off</SectionLabel>
          <SectionHeading>In 2020, I Made Three Predictions</SectionHeading>

          <Body>
            <p>
              In 2020, during COVID, I wrote a paper called The Great Reset. Not the conspiracy theory &mdash; a structural argument about what happens when an empire reaches the late stage of a long-term debt cycle. When the money printer has been running for decades. When wealth concentration hits historically dangerous levels. When the gap between financial assets and productive capacity becomes so wide that the whole machine starts to wobble.
            </p>
            <p>
              That paper made three predictions. Two were right. One was spectacularly wrong. And the distinction between them is the most important thing to understand before reading this one.
            </p>
          </Body>

          <Subheading>What I Got Right: The Shape of Things to Come</Subheading>

          <Body>
            <p>
              The 2020 paper argued that we were in the late stages of a long-term debt cycle &mdash; the kind that plays out over 75&ndash;100 years and ends, historically, in one of three ways: inflation, default, or war. Usually some combination of all three.
            </p>
            <p>
              It argued that social unrest was structurally inevitable. Not because people are inherently angry, but because the economic conditions that produce anger &mdash; stagnant real wages, unaffordable housing, a sense that the system is rigged &mdash; were already locked in.
            </p>
          </Body>

          <OriginalQuote>
            &ldquo;When wealth concentration reaches these levels, social instability is not a risk. It is a mathematical certainty. The only question is the form it takes.&rdquo;
          </OriginalQuote>

          <Body>
            <p>
              What followed: Black Lives Matter became the largest protest movement in American history. The Capitol was stormed. Political polarisation in both the US and UK reached levels not seen since the 1930s. None of this was hard to predict. The economic preconditions were already in place.
            </p>
            <p>
              The paper argued that war was not a risk but a structural feature of late-cycle imperial dynamics. That empires in decline do not go quietly. They escalate. They find external enemies to justify internal spending. They militarise their foreign policy because the alternative &mdash; admitting that the domestic economic model is broken &mdash; is politically impossible.
            </p>
          </Body>

          <OriginalQuote>
            &ldquo;Major geopolitical conflict is not a tail risk. It is structurally overdue. The question is not whether, but where.&rdquo;
          </OriginalQuote>

          <Body>
            <p>
              What followed: Russia invaded Ukraine in February 2022. The West committed over $200 billion in support. The Middle East erupted again in October 2023. The Houthis closed the Red Sea to commercial shipping. Iran and Israel exchanged direct military strikes for the first time. COVID itself, in many ways, functioned as a proxy conflict &mdash; an event that accelerated the decoupling between the US and China, collapsed supply chains, and forced governments to print money on a scale that made 2008 look modest.
            </p>
            <p>
              The paper argued that wealth concentration would continue to accelerate, that the policy response to COVID would make it worse, not better, and that the asset-owning class would emerge from the crisis significantly richer while the working and middle classes would fall further behind.
            </p>
          </Body>

          <OriginalQuote>
            &ldquo;Quantitative easing does not create wealth. It redistributes it &mdash; from those who earn to those who own.&rdquo;
          </OriginalQuote>

          <Body>
            <p>
              What followed: UK average house prices rose from &pound;236,000 in early 2020 to over &pound;290,000 by 2024. Real wages, adjusted for inflation, remain below their 2008 peak in most Western economies. The top 1% of wealth holders now control a larger share of total assets than at any point since the Gilded Age.
            </p>
          </Body>

          <Subheading>What I Got Wrong: The Speed</Subheading>

          <Body>
            <p>
              Here&rsquo;s where I was wrong. I implied the transition would be faster than it has been. I underestimated the system&rsquo;s ability to absorb punishment and keep going. The US printed $4.5 trillion during COVID and the dollar didn&rsquo;t collapse. It strengthened. The Fed raised rates at the fastest pace in modern history and the economy didn&rsquo;t break. It slowed, but it held. Which, frankly, I did not expect.
            </p>
            <p>
              But the structural argument wasn&rsquo;t wrong. The timing was. These transitions take 10&ndash;30 years, not 2&ndash;5. The decline of sterling as the world&rsquo;s reserve currency took roughly 30 years. Even after Bretton Woods in 1944, it remained in use for international trade well into the 1960s. Empires don&rsquo;t fall. They erode.
            </p>
            <p>
              COVID cracked the surface. Ukraine cracked it further. The Middle East cracked it further still. Taiwan, when it comes, will crack it wide open.
            </p>
          </Body>

          <PullQuote>
            &ldquo;COVID was not the nail in the coffin. It was the first crack in the wall. Ukraine was the second. The Middle East is the third. Taiwan will be the fourth.&rdquo;
          </PullQuote>

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 02 · The Numbers Don't Lie                         */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="the-numbers" className="pt-8">
          <SectionLabel>02 &middot; The Numbers Don&rsquo;t Lie</SectionLabel>
          <SectionHeading>The Debt Machine Has No Off Switch</SectionHeading>
          <Subheading>
            The US national debt has crossed $36 trillion. It added $9 trillion in five years. The interest alone now exceeds the entire defence budget.
          </Subheading>

          <StatCardGrid
            stats={[
              {
                label: "US National Debt",
                value: "$36T+",
                description: "Up from $27T in 2020. Added $9 trillion in five years.",
              },
              {
                label: "Annual Interest",
                value: "$1T+",
                description: "The US now spends more servicing its debt than on its entire defence budget.",
              },
              {
                label: "Debt-to-GDP",
                value: "124%",
                description: "A ratio that historically only ends one of two ways: inflation or default.",
              },
              {
                label: "Deficit Funding",
                value: "Borrowed",
                description: "The dollar\u2019s reserve currency status is the only reason the US can run these deficits.",
              },
            ]}
          />

          <ChartContainer>
            <USDebtChart />
          </ChartContainer>

          <Body>
            <p>
              The dollar&rsquo;s reserve currency status is not a footnote. It is the single most important structural advantage the United States possesses. Full stop. It is the reason the US can run deficits that would bankrupt any other country. The reason it can print trillions without triggering hyperinflation. The reason its military operates at a scale nobody else can afford. Remove this one advantage and the entire machine seizes.
            </p>
            <p>
              Understand this one fact, and you understand every war since 2001. Understand what threatens it, and you understand every war that is coming.
            </p>
          </Body>

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 03 · The Imperial Pattern                          */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="imperial-pattern" className="pt-8">
          <SectionLabel>03 &middot; The Imperial Pattern</SectionLabel>
          <SectionHeading>Superpowers Always Overspend Their Way Out</SectionHeading>

          <Body>
            <p>
              This has happened before. Five times, in fact. The British Empire did it. The Spanish Empire did it. The Ottoman Empire did it. The Dutch did it. The Romans did it. The pattern is always the same: rise through productive advantage, consolidation through military and financial dominance, decline through overextension, debt, and the slow erosion of the currency that underwrote the whole system. The mechanism varies. The pattern is identical.
            </p>
            <p>
              The US version runs on one specific piece of financial architecture: the petrodollar. In 1974, Henry Kissinger struck a deal with Saudi Arabia. The Saudis would price all oil in dollars. In return, the US would guarantee their security. Every country that wanted oil &mdash; which is every country &mdash; needed dollars. This created permanent global demand for the currency, which allowed America to print far more of it than its domestic economy justified. The entire global financial system runs on a handshake deal from 1974. Let that sink in.
            </p>
            <p>
              And every serious threat to this arrangement has been met with force. Saddam Hussein announced in 2000 that Iraq would price oil in euros. He was removed from power three years later. Gaddafi proposed a gold-backed African currency for oil trading. He was killed. Russia demanded roubles for gas. It was sanctioned and its reserves frozen. You can draw your own conclusions about the pattern.
            </p>
          </Body>

          <ChartContainer>
            <MilitarySpendingChart />
          </ChartContainer>

          <ChartContainer>
            <USDReservesChart />
          </ChartContainer>

          <ChartContainer>
            <GoldPurchasesChart />
          </ChartContainer>

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 04 · The Real Prize                                */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="the-real-prize" className="pt-8">
          <SectionLabel>04 &middot; The Real Prize</SectionLabel>
          <SectionHeading>It Was Never About Democracy. It Was Always About Energy.</SectionHeading>

          <Body>
            <p>
              The common denominator across every conflict of the last fifty years is energy. Oil, gas, and now the electricity required to power the AI revolution. Every geopolitical decision the US has made since 1974 can be mapped to energy access and the financial architecture that depends on it.
            </p>
            <p>
              AI has changed the equation, but it has not changed the variable. AI is, at its core, an energy problem. The models require extraordinary amounts of compute. The compute requires extraordinary amounts of electricity. The electricity requires physical infrastructure &mdash; power plants, grid capacity, cooling systems &mdash; that cannot be built overnight.
            </p>
          </Body>

          <Subheading>The Energy-AI Stack</Subheading>

          <Body>
            <p>
              The chain is simple and the logic is inescapable: oil revenues fund state capacity. State capacity funds infrastructure. Infrastructure delivers energy. Energy powers data centres. Data centres run AI. AI delivers economic and military superiority. This is not a theory. It is the operating logic of every serious government on earth right now.
            </p>
            <p>
              Russia&rsquo;s gas was Europe&rsquo;s competitive advantage for decades &mdash; cheap energy meant cheap manufacturing, cheap heating, cheap everything. Cutting off Russian gas did not just raise energy bills. It removed a structural economic advantage that Europe had relied on for a generation. Europe is now paying 3&ndash;4x what the US and China pay for industrial energy. That is not a temporary inconvenience. It is a permanent setback in the AI race.
            </p>
            <p>
              China understands the energy-AI stack with absolute clarity. It is building nuclear reactors, solar capacity, and grid infrastructure at a pace that makes Western planning processes look absurd. China approved 10 new nuclear reactors in 2023 alone. The UK has managed to begin construction on one in the last 20 years &mdash; Hinkley Point C, which is over budget and behind schedule.
            </p>
          </Body>

          <ChartContainer>
            <EnergyCapacityChart />
          </ChartContainer>

          <StatCardGrid
            stats={[
              {
                label: "AI Energy Demand",
                value: "2x / 2yrs",
                description: "Global data centre energy consumption is doubling approximately every two years.",
              },
              {
                label: "Nuclear Reactors",
                value: "China: 10+",
                description: "China approved 10+ new reactors in 2023. The US has 2 under construction. The UK has 1.",
              },
              {
                label: "Strait of Hormuz",
                value: "20% of Oil",
                description: "21 miles wide. 20% of global oil passes through it daily. Iran controls the northern shore.",
              },
              {
                label: "TSMC Taiwan",
                value: "92%",
                description: "Taiwan produces 92% of the world\u2019s most advanced semiconductors. All in one place.",
              },
            ]}
          />

          <Subheading>Why the US Will Lose the AI Race</Subheading>

          <Body>
            <p>
              The US has the best AI research labs in the world. It has the most advanced models. It has the deepest talent pool. And it will likely lose the race anyway. Not because its technology is inferior, but because its ability to translate technological advantage into physical infrastructure has been crippled by decades of regulatory accumulation, legal challenge, and institutional sclerosis.
            </p>
            <p>
              The speed at which a country can convert intent into infrastructure &mdash; the speed at which it can approve, build, and connect a new power station, a new data centre, a new transmission line &mdash; is the binding constraint on AI dominance. China can do this in months. The US takes years. The UK takes decades.
            </p>
          </Body>

          <PullQuote>
            &ldquo;China understands this with absolute clarity. The West understands it intellectually but cannot act on it at speed.&rdquo;
          </PullQuote>
        </section>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART II — THE WARS                                 */}
        {/* ═══════════════════════════════════════════════════ */}
        <PartDivider
          id="part-two"
          part="Part II"
          title="The Wars"
          subtitle="Three active fronts, one underlying logic — and the human cost nobody accounts for"
        />

        {/* ─────────────────────────────────────────────────── */}
        {/* 05 · War One: Ukraine                              */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="ukraine" className="pt-8">
          <SectionLabel>05 &middot; War One</SectionLabel>
          <SectionHeading>The Proxy War That Broke the Rules</SectionHeading>

          <Body>
            <p>
              In February 2022, Russia invaded Ukraine. The West&rsquo;s response was unprecedented in speed and scale: financial sanctions, asset freezes, weapons shipments, intelligence sharing, and over $200 billion in committed aid. NATO, an alliance that had spent decades looking for a purpose after the Cold War, suddenly had one.
            </p>
            <p>
              But the most consequential action was not military. It was financial. The US and its allies froze approximately $300 billion in Russian central bank reserves held in Western institutions. This was an extraordinary move. It told every non-aligned country in the world that dollar-denominated reserves &mdash; the foundation of the global financial system &mdash; could be confiscated if you ended up on the wrong side of a geopolitical dispute.
            </p>
          </Body>

          <Subheading>What Ukraine Actually Did to the Dollar</Subheading>

          <Body>
            <p>
              The freezing of Russian reserves did not just punish Russia. It changed the calculus for every central bank in the world. If dollar reserves can be frozen, then dollar reserves are not truly yours. They are yours conditionally &mdash; contingent on continued alignment with US foreign policy.
            </p>
            <p>
              The response was immediate and structural. Central banks across the global south began diversifying away from the dollar. Gold purchases by central banks hit record levels in 2022 and 2023. China accelerated the development of its cross-border payment systems. The BRICS nations began serious discussions about alternative reserve arrangements. Saudi Arabia &mdash; the keystone of the petrodollar system &mdash; began accepting yuan for oil.
            </p>
          </Body>

          <StatCardGrid
            stats={[
              {
                label: "Aid Committed",
                value: "$200B+",
                description: "Borrowed money, sent overseas, in a conflict with no clear end state.",
              },
              {
                label: "Reserves Frozen",
                value: "$300B",
                description: "The moment the world learned that dollar reserves are not safe.",
              },
            ]}
          />

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 05b · The Petrodollar                              */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="petrodollar" className="pt-8">
          <SectionLabel>05b &middot; The Petrodollar</SectionLabel>
          <SectionHeading>A Timeline of Defection</SectionHeading>

          <Body>
            <p>
              In 1974, Henry Kissinger secured an agreement with Saudi Arabia that would underpin the next fifty years of American financial dominance: all oil would be priced and sold in US dollars. In return, the US would guarantee Saudi security. This single arrangement &mdash; the petrodollar system &mdash; created permanent global demand for the dollar, allowing the US to run deficits, print money, and project military power at a scale no other nation could match.
            </p>
            <p>
              That system held for half a century. It is now being dismantled &mdash; not by a single dramatic event, but by a cascade of quiet defections.
            </p>
          </Body>

          <ChartContainer>
            <PetrodollarDeclineChart />
          </ChartContainer>

          <PetrodollarTimeline />

          <PullQuote>
            &ldquo;The petrodollar did not end on a single day. No press conference. No dramatic announcement. It is dissolving the way Hemingway described bankruptcy &mdash; gradually, then all at once.&rdquo;
          </PullQuote>

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 06 · Gaza and Iran                                 */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="gaza-iran" className="pt-8">
          <SectionLabel>06 &middot; Wars Two &amp; Three</SectionLabel>
          <SectionHeading>Gaza, Iran, and the Nothing to Lose Problem</SectionHeading>

          <Body>
            <p>
              On October 7th 2023, Hamas launched the most significant attack on Israeli soil in fifty years. Israel&rsquo;s response was immediate, devastating, and &mdash; in the eyes of much of the world &mdash; disproportionate. What followed was not just a war in Gaza. It was a multi-front escalation that drew in Hezbollah, the Houthis, and eventually Iran directly. For the first time, Iran and Israel exchanged direct military strikes. The Red Sea was effectively closed to commercial shipping. The Strait of Hormuz &mdash; through which 20% of the world&rsquo;s oil passes daily &mdash; sat on a knife edge.
            </p>
            <p>
              I want to be clear about something before going further. This paper is not pro-war. It is not pro any side in any of these conflicts. It is an attempt to understand the structural forces that produce them. But understanding structural forces should not require abandoning moral clarity. Bombs do not build schools. Invasions do not produce democracies. Occupations do not create peace. These are not left-wing positions or right-wing positions. They are observable facts.
            </p>
            <p>
              The question is not whether these wars are morally justified. The question is what structural function they serve and what happens next.
            </p>
          </Body>

          <Subheading>What the Cab Driver Told Me</Subheading>

          <Body>
            <p>
              A few months ago, I got into a cab in London. The driver was from Afghanistan. We got talking about the state of the world &mdash; as you do in London cabs &mdash; and I asked him what he thought about everything that was happening. He said something I haven&rsquo;t been able to stop thinking about.
            </p>
            <p>
              He said: &ldquo;You know, when I was young, Afghanistan was a normal place. Girls went to school. People went to restaurants. There were cinemas. It was not perfect, but it was a country. Then the Russians came. Then the Americans came. Then the Taliban came back. And now my country does not exist anymore. Not really.&rdquo;
            </p>
            <p>
              He paused and said: &ldquo;Every time a big country decides to help, a small country gets destroyed.&rdquo;
            </p>
            <p>
              Afghanistan is the template. Twenty years. Two trillion dollars. Thousands of Western soldiers killed. Tens of thousands of Afghan civilians killed. And the end result? The Taliban retook the country in eleven days. Everything that was supposedly built &mdash; the schools, the institutions, the democratic infrastructure &mdash; evaporated. The only lasting legacy is the destruction.
            </p>
          </Body>

          <Subheading>The Immigration Argument Nobody Wants to Have Honestly</Subheading>

          <Body>
            <p>
              Here is the connection that almost nobody in mainstream politics is willing to make explicitly: the countries that produce the largest numbers of refugees and economic migrants are, overwhelmingly, countries that the West has bombed, invaded, sanctioned, or destabilised in the last thirty years. Iraq, Syria, Afghanistan, Libya, Somalia, Yemen &mdash; the list of origin countries for migration flows maps almost perfectly onto the list of countries subjected to Western military intervention.
            </p>
            <p>
              This is not a coincidence. It is a causal chain. You cannot destroy a country&rsquo;s infrastructure, collapse its institutions, and kill its civilians &mdash; and then express surprise when its population moves. They move because you made their home uninhabitable. The immigration debate in the West is conducted almost entirely without reference to this causal chain, which makes it fundamentally dishonest.
            </p>
          </Body>

          <PullQuote>
            &ldquo;The honest version of the immigration debate starts about twenty years earlier, in the rooms where the decision to invade was made.&rdquo;
          </PullQuote>

          <Subheading>The Fundamental Asymmetry</Subheading>

          <AsymmetryTable />

          <Body>
            <p>
              The Hormuz Equation is the simplest version of this asymmetry. The Strait of Hormuz is 21 miles wide. Twenty percent of the world&rsquo;s oil passes through it every day. Iran controls the northern shore. If Iran closes the strait &mdash; which it can, at least temporarily &mdash; the global economy goes into immediate crisis. Oil prices don&rsquo;t rise by 10%. They rise by 100% or more. And Iran knows this. It is the ultimate asymmetric leverage: a small country with a big chokepoint.
            </p>
            <p>
              This is Iran&rsquo;s nuclear option &mdash; not a nuclear weapon, but the ability to shut down the global energy supply. It is the reason Iran has not been invaded despite decades of hostile rhetoric. The cost is simply too high.
            </p>
          </Body>

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 07 · Taiwan                                        */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="taiwan" className="pt-8">
          <SectionLabel>07 &middot; War on the Horizon</SectionLabel>
          <SectionHeading>Taiwan and the End of Deterrence</SectionHeading>

          <Body>
            <p>
              Taiwan produces 92% of the world&rsquo;s most advanced semiconductors. TSMC, a single company on a single island, manufactures the chips that power virtually every advanced technology on earth &mdash; from iPhones to F-35 fighter jets to the GPU clusters that train AI models. There is no substitute. There is no alternative supply. If Taiwan goes offline, the global technology industry stops.
            </p>
            <p>
              China has watched Ukraine closely. It has drawn specific lessons. The West&rsquo;s response to Russia &mdash; sanctions, asset freezes, supply chain disruption &mdash; was painful for Russia but not fatal. Russia found alternative buyers for its energy. It deepened its relationship with China and India. It built workarounds for the financial system. The lesson for China is clear: Western economic weapons are serious but survivable, if you prepare.
            </p>
          </Body>

          <Subheading>What China Has Already Done</Subheading>

          <Body>
            <p>
              China is preparing. The digital yuan is designed to operate outside the SWIFT system. Gold purchases by the People&rsquo;s Bank of China have accelerated dramatically. China&rsquo;s naval shipbuilding programme now produces more tonnage per year than the entire US Navy possesses. Supply chain redundancy is being built across every critical sector.
            </p>
            <p>
              None of this means invasion is imminent. But it means the deterrence framework that has kept the peace for decades is eroding. China is systematically reducing the cost of conflict while increasing its capability to execute it.
            </p>
          </Body>

          <ChartContainer>
            <NavalShipbuildingChart />
          </ChartContainer>

          <Subheading>The Taiwan Dilemma</Subheading>

          <Body>
            <p>
              The US faces an impossible choice. Defend Taiwan and risk direct military confrontation with a nuclear-armed superpower. Abandon Taiwan and lose access to the semiconductor supply chain that underpins its entire technology sector, its military capability, and its economic future. There is no good option. There is only the least catastrophic one.
            </p>
          </Body>

          <TaiwanScenarioCards />

          <PullQuote>
            &ldquo;China is not preparing to fight the US economically. It is preparing to make fighting economically irrelevant.&rdquo;
          </PullQuote>
        </section>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART III — THE DIAGNOSIS                           */}
        {/* ═══════════════════════════════════════════════════ */}
        <PartDivider
          id="part-three"
          part="Part III"
          title="The Diagnosis"
          subtitle="Why the West is losing — not to China, but to itself"
        />

        {/* ─────────────────────────────────────────────────── */}
        {/* 08 · The West Got Soft                             */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="the-west-got-soft" className="pt-8">
          <SectionLabel>08 &middot; The Diagnosis</SectionLabel>
          <SectionHeading>The West Didn&rsquo;t Get Beaten. It Got Soft.</SectionHeading>

          <Body>
            <p>
              I have an allotment. I love it. I grow vegetables, drink tea, and argue with my neighbour about compost. It is one of the great pleasures of English life. But getting it took two years on a waiting list, and if I wanted to build a small shed on it, I would need planning permission &mdash; a process that can take six months and involves submitting drawings to a council office that is open three days a week.
            </p>
            <p>
              Two years to get an allotment. Six months to get permission for a shed. In the time it takes to approve my shed, China builds a nuclear reactor. That is not a trivial observation. It is a civilisational signal.
            </p>
            <p>
              The planning and regulatory architecture of the Western world &mdash; the United States, the United Kingdom, and Europe &mdash; has metastasised over the last fifty years into something that was never intended: a system so encrusted with process, consultation, legal challenge, and bureaucratic risk-aversion that it has become structurally incapable of building things at the speed the current moment demands.
            </p>
          </Body>

          <ChartContainer>
            <PlanningTimelineChart />
          </ChartContainer>

          <Subheading>The Legal-Bureaucratic Doom Loop</Subheading>

          <Body>
            <p>
              The regulatory architecture of the West was not designed to prevent progress. It was designed to prevent harm. But it has evolved, through fifty years of accretion, into something that prevents both. The mechanism is a four-step doom loop.
            </p>
            <p>
              Step one: a legitimate concern is raised &mdash; environmental impact, community disruption, safety. A consultation process is created. Step two: the consultation process is weaponised by opponents of the project, who use it not to improve the project but to delay or kill it. Step three: the process expands to accommodate the weaponisation. More stages, more reviews, more opportunities for legal challenge. Step four: talented people stop trying. The best engineers, the most ambitious developers, the most capable project managers &mdash; they leave for jurisdictions where things can actually get built.
            </p>
          </Body>

          <ChartContainer>
            <DecisionSpeedChart />
          </ChartContainer>

          <Body>
            <p>
              HS2 &mdash; a railway line connecting London and Birmingham &mdash; was first proposed in 2009. Fifteen years later, it has been descoped, delayed, and partially cancelled. The budget has risen from &pound;33 billion to over &pound;100 billion. Hinkley Point C, Britain&rsquo;s first new nuclear power station in a generation, was approved in 2016. It is not expected to be operational until 2031 at the earliest. The budget has roughly doubled. California&rsquo;s High Speed Rail project was approved by voters in 2008. It was supposed to cost $33 billion and be completed by 2020. The current estimate is $128 billion and the completion date is somewhere in the 2030s.
            </p>
            <p>
              Meanwhile, China builds high-speed rail at roughly 1,000 kilometres per year. It has constructed the world&rsquo;s largest high-speed rail network &mdash; over 42,000 kilometres &mdash; in less than 20 years.
            </p>
          </Body>

          <Subheading>We Optimise for &ldquo;I&rdquo; Not &ldquo;We&rdquo;</Subheading>

          <Body>
            <p>
              The deeper issue is cultural. Western democracies have optimised, over the last half century, for individual rights, individual expression, and individual protection. These are not bad things. But they have been optimised to the point where collective action &mdash; the ability to do big things together, quickly &mdash; has been severely compromised.
            </p>
            <p>
              The allotment waiting list is a perfect microcosm. Everyone agrees allotments are good. Councils agree. Health authorities agree. The public agrees. But try to create a new allotment site and you will discover that the process &mdash; land assessment, environmental review, public consultation, planning application, utilities connection &mdash; takes years and costs more than the allotment will ever produce. The problem is not that anyone opposes allotments. The problem is that the system has no fast lane for things everyone agrees on.
            </p>
            <p>
              China&rsquo;s advantage is not that it suppresses individual rights (though it does). Its advantage is that it can mobilise collective resources toward a defined goal at extraordinary speed. When China decides to build something, it builds it. The authoritarian model has enormous costs &mdash; costs that this paper does not minimise. But in the specific domain of infrastructure speed, the advantage is real and it is decisive.
            </p>
          </Body>

          <Subheading>A National Emergency Requires Emergency Rules</Subheading>

          <Body>
            <p>
              The West has done this before. During World War II, Britain built airfields in weeks. The US constructed the Pentagon in 16 months. The Manhattan Project went from concept to operational weapon in three years. The Hoover Dam was built in five years, ahead of schedule and under budget. These were not achieved by ignoring safety or quality. They were achieved by recognising that the ordinary pace of bureaucratic decision-making was incompatible with the urgency of the moment.
            </p>
            <p>
              We are in an equivalent moment now. The AI race, the energy transition, the semiconductor competition &mdash; these are not leisurely policy discussions. They are existential competitions that will determine the shape of the global order for the next century. And the West is approaching them with the planning apparatus of peacetime.
            </p>
          </Body>

          <PullQuote>
            &ldquo;The AI race, the energy race, the semiconductor race &mdash; these are not lost in laboratories. They are lost in planning committees.&rdquo;
          </PullQuote>

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 09 · Power Backed by Paper                         */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="power-backed-by-paper" className="pt-8">
          <SectionLabel>09 &middot; The Core Thesis</SectionLabel>
          <SectionHeading>Power Backed by Paper: The Final Cycle</SectionHeading>

          <Body>
            <p>
              All three wars &mdash; Ukraine, the Middle East, and the coming confrontation over Taiwan &mdash; are not separate conflicts. They are different fronts in a single, structural contest: the fight to retain the US dollar&rsquo;s reserve currency status and the financial architecture that depends on it.
            </p>
            <p>
              The dollar system requires global confidence. Confidence requires stability. Stability requires military dominance. Military dominance requires spending. Spending requires borrowing. Borrowing requires confidence. This is the loop. And the loop is tightening.
            </p>
            <p>
              The specific trap the US finds itself in is this: every war it fights to defend dollar dominance costs money. That money is borrowed. The borrowing increases the debt. The debt erodes confidence in the dollar. The erosion of confidence makes the next war more likely and more expensive. It is a doom loop, and there is no obvious exit.
            </p>
          </Body>

          <ChartContainer>
            <USOverreachChart />
          </ChartContainer>

          <Subheading>The BRICS Counter-Architecture</Subheading>

          <Body>
            <p>
              The BRICS nations &mdash; Brazil, Russia, India, China, South Africa, and the growing list of countries that have joined or applied to join &mdash; are not an alliance in the Western sense. They do not have a unified military command or a shared ideology. What they have is a shared interest in building financial infrastructure that does not depend on the US dollar.
            </p>
            <p>
              The New Development Bank. The Contingent Reserve Arrangement. Bilateral currency swap agreements. The digital yuan. Gold accumulation. CIPS (China&rsquo;s alternative to SWIFT). None of these, individually, replaces the dollar system. But collectively, they represent the plumbing of a post-dollar world. The pipes are being laid while the West argues about whether the plumbing is necessary.
            </p>
          </Body>
        </section>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART IV — WHAT NEXT                                */}
        {/* ═══════════════════════════════════════════════════ */}
        <PartDivider
          id="part-four"
          part="Part IV"
          title="What Next"
          subtitle="The arc of history, asset implications, and the constructive case for the decade ahead"
        />

        {/* ─────────────────────────────────────────────────── */}
        {/* 10 · Historical Arc                                */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="bretton-woods" className="pt-8">
          <SectionLabel>10 &middot; The Arc</SectionLabel>
          <SectionHeading>From Bretton Woods to the Breaking Point</SectionHeading>

          <HistoricalTimeline />

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 11 · Implications                                  */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="implications" className="pt-8">
          <SectionLabel>11 &middot; Implications</SectionLabel>
          <SectionHeading>What This Means For You</SectionHeading>

          <Subheading>
            The timeline is accelerating. The risks are crystallising. And the implications for how you think about money, work, and the future are profound.
          </Subheading>

          <Subheading>The Asset Landscape Has Changed</Subheading>

          <Body>
            <p>
              Gold has moved from $1,700 to over $3,000 since the 2020 paper. That is not speculation. It is a signal. Central banks are buying gold at record levels because they no longer trust that dollar-denominated reserves are safe. Gold is the oldest form of money, and in a world where paper currencies are being debased and digital currencies are being weaponised, it is reasserting itself as the ultimate store of value.
            </p>
            <p>
              Bitcoin is maturing into something more serious than the speculative asset it was in 2020. The approval of spot Bitcoin ETFs in the US, the growing institutional adoption, and the structural case for a non-sovereign store of value in a world of monetary debasement &mdash; all of these point to Bitcoin playing a larger role in the next decade. But its trajectory is scenario-dependent. In a world of orderly dollar decline, Bitcoin thrives. In a world of capital controls and financial repression, its path is more complex.
            </p>
          </Body>

          <ChartContainer>
            <AssetPerformanceChart />
          </ChartContainer>

          <Subheading>The Infrastructure &amp; Immigration Opportunity</Subheading>

          <Body>
            <p>
              The immigration debate and the infrastructure crisis are the same problem viewed from different angles. The West needs to build &mdash; energy infrastructure, data centres, housing, transport. It cannot build fast enough with the labour it has. Immigration provides the labour. But the planning system cannot process the building, and the political system cannot process the immigration.
            </p>
            <p>
              The countries that solve this simultaneously &mdash; that reform planning to enable building and reform immigration to enable the workforce that builds &mdash; will be the ones that remain competitive. The countries that treat these as separate problems, to be argued about in separate committees by separate interest groups, will fall behind.
            </p>
          </Body>

          <Subheading>The AI Flip: More Hands, Not Fewer</Subheading>

          <Body>
            <p>
              The standard narrative about AI and labour is that it destroys jobs. This is true for a specific category of work: routine knowledge work, administrative processing, and middle-management tasks that consist primarily of moving information from one format to another. In those categories, AI displacement will be significant and relatively fast.
            </p>
            <p>
              But the second-order effect is the opposite. AI accelerates the economy. A faster economy demands more physical infrastructure. More data centres need to be built. More power stations need to be commissioned. More grid capacity needs to be installed. More housing needs to be constructed. All of this requires physical labour &mdash; the one category of work that AI cannot do.
            </p>
            <p>
              The reframe is simple: in the AI economy, the scarce resource is not intelligence. It is physical labour. The person who can wire a data centre, build a house, install solar panels, or lay fibre optic cable is not displaced by AI. They are made more valuable by it. The faster AI makes the digital economy run, the more it depends on the physical workers who build and maintain the infrastructure that supports it.
            </p>
            <p>
              Immigration is well-matched to this labour market. The physical skills required for infrastructure construction &mdash; electrical work, plumbing, welding, concrete work, general construction &mdash; are precisely the skills that many immigrant populations bring. The demand is structural and growing. The supply is constrained domestically. The match is obvious to everyone except those determined not to see it.
            </p>
          </Body>

          <Subheading>The Geopolitical Bets</Subheading>

          <Body>
            <p>
              India is the best positioned major economy for the next two decades. It has the demographics &mdash; a young, growing population. It has the strategic positioning &mdash; courted by both the US and China, committed to neither. It has the technological capacity &mdash; a deep talent pool in software and engineering. And it has the one thing that neither the US nor China can easily replicate: the ability to play both sides of the great power competition while building its own capacity.
            </p>
          </Body>

          <Divider />
        </section>

        {/* ─────────────────────────────────────────────────── */}
        {/* 12 · Conclusion                                    */}
        {/* ─────────────────────────────────────────────────── */}
        <section id="conclusion" className="pt-8 pb-16">
          <SectionLabel>12 &middot; Conclusion</SectionLabel>
          <SectionHeading>The Only Constant Is the Cycle</SectionHeading>

          <Body>
            <p>
              Every element of the late-cycle pattern is now visible. The debt is unsustainable. The currency is under structural pressure. The wars are multiplying. The alliances are shifting. The challengers are building. The domestic political systems are paralysed by polarisation and process. The task is not prediction. It is pattern recognition.
            </p>
            <p>
              The US will not collapse. It remains the most powerful economy on earth, with the deepest capital markets, the best universities, and the most innovative technology sector. But the dollar will not retain its current dominance. The financial architecture of the post-war order is being rebuilt in real time &mdash; by people who are not asking permission and not sending press releases. The question is not whether this transition happens. It is how fast, how messy, and who positions themselves correctly for it.
            </p>
          </Body>

          <PullQuote>
            &ldquo;History does not ask for your permission to repeat itself.&rdquo;
          </PullQuote>

          <Divider />
        </section>

        {/* ═══════════════════════════════════════════════════ */}
        {/* SOURCES                                            */}
        {/* ═══════════════════════════════════════════════════ */}
        <section className="pb-16">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-6">
            Sources &amp; Methodology
          </p>
          <div className="font-mono text-[11px] text-muted/70 leading-[1.9] space-y-2">
            <p>
              US national debt and deficit data: US Treasury Department, Bureau of the Fiscal Service.
              Debt-to-GDP ratios: International Monetary Fund (IMF) World Economic Outlook database.
              Military spending: Stockholm International Peace Research Institute (SIPRI) Military Expenditure Database.
            </p>
            <p>
              Gold reserves and central bank purchases: World Gold Council annual reports 2020&ndash;2024.
              Petrodollar and currency reserve data: IMF Currency Composition of Official Foreign Exchange Reserves (COFER).
              Semiconductor supply chain: Center for Strategic and International Studies (CSIS) reports on Taiwan and TSMC.
            </p>
            <p>
              Energy infrastructure and AI power demand: International Energy Agency (IEA) Data Centres &amp; Networks reports.
              Nuclear reactor construction: World Nuclear Association country profiles.
              Naval shipbuilding data: CSIS China Power Project; US Congressional Research Service.
            </p>
            <p>
              Infrastructure project timelines: UK National Audit Office (HS2, Hinkley Point C); California High-Speed Rail Authority annual reports.
              BRICS financial architecture: New Development Bank annual reports; People&rsquo;s Bank of China cross-border payment statistics.
            </p>
            <p className="pt-2 text-muted/50">
              All projections are illustrative models built from the underlying data.
              This is a work of analysis and argument, not financial or investment advice.
            </p>
          </div>
        </section>
      </div>

      <EEFooter />
    </main>
  );
}
