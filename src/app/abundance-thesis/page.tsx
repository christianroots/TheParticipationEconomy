"use client";

import { motion } from "framer-motion";
import ATNavigation from "@/components/abundance/ATNavigation";
import ATHero from "@/components/abundance/ATHero";
import ATFooter from "@/components/abundance/ATFooter";
import ATBackToTop from "@/components/abundance/ATBackToTop";
import PropositionsOverview from "@/components/abundance/PropositionsOverview";
import AnimatedSection from "@/components/AnimatedSection";
import HistoricPriceChart from "@/components/abundance/charts/HistoricPriceChart";
import ManufacturingLabourChart from "@/components/abundance/charts/ManufacturingLabourChart";
import GoodsServicesChart from "@/components/abundance/charts/GoodsServicesChart";
import SoloEconomyChart from "@/components/abundance/charts/SoloEconomyChart";
import ProductivityChart from "@/components/abundance/charts/ProductivityChart";
import BlueCollarPremiumChart from "@/components/abundance/charts/BlueCollarPremiumChart";
import DrivingJobsChart from "@/components/abundance/charts/DrivingJobsChart";
import AIEnergyChart from "@/components/abundance/charts/AIEnergyChart";
import ApprenticeshipChart from "@/components/abundance/charts/ApprenticeshipChart";

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

export default function AbundanceThesisPage() {
  return (
    <main className="bg-white text-text min-h-screen">
      <ATNavigation />
      <ATBackToTop />
      <ATHero />

      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* ═══════════════════════════════════════════════════ */}
        {/* A Personal Note                                    */}
        {/* ═══════════════════════════════════════════════════ */}
        <AnimatedSection className="pt-20 md:pt-28">
          <SectionLabel>A Personal Note</SectionLabel>
          <Body>
            <p>
              Eighteen months ago, I was in a darker place about all of this. Not
              personally — but intellectually. I could see clearly what AI was going
              to do to the labour market, and the picture felt brutal. White collar
              jobs, hollowed out. A generation of graduates, displaced. The knowledge
              economy, the one we&rsquo;d all been told to aim for, quietly collapsing
              under the weight of software that could do the same work in seconds.
            </p>
            <p>
              What changed my mind wasn&rsquo;t wishful thinking. It was following the
              second and third-order effects further than most people bother to. It
              was asking not just what AI destroys, but what it creates in the
              destruction. It was noticing that deflationary technologies don&rsquo;t
              shrink economies. They expand them.
            </p>
            <p>
              Three propositions sit at the heart of this argument. They form a chain
              of causation. Understand all three together, and the picture is not
              frightening. It is, quietly, extraordinary.
            </p>
          </Body>
        </AnimatedSection>

        <Divider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* Three Propositions Overview                        */}
        {/* ═══════════════════════════════════════════════════ */}
        <section id="propositions">
          <PropositionsOverview />
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* PROPOSITION ONE — THE GREAT DEFLATION              */}
        {/* ═══════════════════════════════════════════════════ */}
        <section id="proposition-one" className="pt-8">
          <SectionLabel>Proposition One</SectionLabel>
          <SectionHeading>The Great Deflation</SectionHeading>
          <Subheading>
            AI is the most powerful deflationary force in human history — and that
            is unambiguously good news
          </Subheading>

          <Body>
            <p>
              Deflation has a bad reputation in economics because economists mostly
              encounter it in the context of recession: prices fall because demand
              collapses, because people stop spending, because confidence evaporates.
              That kind of deflation — demand-side deflation — is genuinely harmful.
            </p>
            <p>
              But supply-side deflation — prices falling because things become
              dramatically cheaper to produce — is a different animal entirely. It
              is, in fact, the engine of almost all human economic progress. The
              price of light has fallen by a factor of roughly one thousand over the
              last two centuries. The price of computing power has halved roughly
              every eighteen months for five decades. The price of sequencing a human
              genome went from three billion dollars in 2003 to under two hundred
              today. Every one of these was a deflationary event. Every one of them
              made us, unambiguously, wealthier.
            </p>
          </Body>

          {/* Chart 1 — Historic Price of Things */}
          <ChartContainer>
            <HistoricPriceChart />
          </ChartContainer>

          <Body>
            <p>
              AI is producing supply-side deflation across a category of human
              activity that has never been significantly deflationary before:
              knowledge work. A task that required a team of ten can now be done by
              one person with the right tools. A project that took three months can
              take three weeks. A capability that was only available to large
              businesses is now available to anyone with a laptop and a monthly
              subscription.
            </p>
            <p>
              But AI-driven deflation does not stop at the borders of the knowledge
              economy. China&rsquo;s so-called dark factories — automated facilities
              that operate with minimal human presence, lights off, no heating
              required for a workforce that isn&rsquo;t there — are not a curiosity.
              They are the opening act of a wholesale transformation in how physical
              goods are made. A robotic manufacturing line does not take breaks, does
              not require benefits, does not need a canteen. It runs continuously, at
              consistent output quality, and the cost of operating it falls as the
              technology improves.
            </p>
          </Body>

          {/* Chart 2 — Manufacturing Labour Cost */}
          <ChartContainer>
            <ManufacturingLabourChart />
          </ChartContainer>

          <Body>
            <p>
              Labour, across most categories of manufacturing, is the dominant cost.
              Remove it by an order of magnitude, and the price of manufactured goods
              does not nudge downward. It falls through the floor.
            </p>
            <p>
              For thirty years, offshoring kept goods prices flat while services kept
              climbing. AI is the first technology in history that attacks services
              deflation directly.
            </p>
          </Body>

          {/* Chart 3 — Goods vs Services Inflation */}
          <ChartContainer>
            <GoodsServicesChart />
          </ChartContainer>

          <Body>
            <p>
              This is the first time in history that deflation hits both sides
              simultaneously. AI compresses the cost of services embedded in every
              product; robotics compresses the cost of making the product itself. For
              the first time, both input categories are deflationary at once.
            </p>
          </Body>

          <PullQuote>
            &ldquo;Supply-side deflation is not recession. It is civilisation accelerating.&rdquo;
          </PullQuote>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* PROPOSITION TWO — END OF KNOWLEDGE WORKER CLASS    */}
        {/* ═══════════════════════════════════════════════════ */}
        <section id="proposition-two" className="pt-8">
          <SectionLabel>Proposition Two</SectionLabel>
          <SectionHeading>
            The End of the Knowledge Worker Class
          </SectionHeading>
          <Subheading>
            And why that is liberation, not loss
          </Subheading>

          <Body>
            <p>
              The knowledge economy, as it has existed for the last half century, is
              built on a specific logic: that certain types of intellectual work
              require enough specialisation, and enough collaboration, that they are
              best performed by large groups of people employed under a single roof.
              The law firm, the consulting firm, the investment bank — all of these
              are factories for producing intellectual output.
            </p>
            <p>
              AI dissolves the constraints that made those factories necessary. A
              single person with capable AI tools can now research, synthesise,
              model, design, write, and build at a level that previously required a
              team. The constraint was never human intelligence — it was human time.
              AI extends human time.
            </p>
            <p>
              What replaces the large knowledge-work employer is not unemployment. It
              is a proliferation of small, highly capable independent operators.
              Platforms like Upwork, which currently sit at the margins of serious
              professional work, are positioned to become central to how the economy
              allocates talent in the 2030s. The two problems that historically
              prevented solo professionals from operating at scale were finding
              clients and establishing trust. Platforms dissolve both. A verified
              track record, a portfolio of rated engagements — these are trust
              signals that transfer. Freelance will not merely survive the AI
              transition. It will emerge as one of the defining work arrangements of
              the decade.
            </p>
          </Body>

          {/* Chart 4 — Solo Economy */}
          <ChartContainer>
            <SoloEconomyChart />
          </ChartContainer>

          <Body>
            <p>
              The US alone formed 5.5 million new businesses in 2023 — a record
              high, 48% above 2019 levels. Each annual cohort of startups, at
              current survival rates, generates approximately 24 million jobs by year
              five. As AI improves both the survival odds and the growth rate of
              small firms, that figure rises.
            </p>
          </Body>

          <PullQuote>
            &ldquo;This is not the death of work. It is the death of unnecessary
            organisational complexity around work.&rdquo;
          </PullQuote>

          <Body>
            <p>
              One person with AI tools produces what ten people produced before.
              That is not a threat to employment — it is a transformation of what
              employment means. The output doesn&rsquo;t disappear. It gets
              redirected. The person who once managed a team of ten now operates
              alone, at equivalent output, and the nine others find new work in the
              expanding economy that cheaper services create.
            </p>
          </Body>

          {/* Chart 5 — AI Productivity Compression */}
          <ChartContainer>
            <ProductivityChart />
          </ChartContainer>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* PROPOSITION THREE — THE BLUE COLLAR PREMIUM        */}
        {/* ═══════════════════════════════════════════════════ */}
        <section id="proposition-three" className="pt-8">
          <SectionLabel>Proposition Three</SectionLabel>
          <SectionHeading>The Blue Collar Premium</SectionHeading>
          <Subheading>
            The most underanalysed consequence of AI is that it will make physical
            work dramatically more valuable
          </Subheading>

          <Body>
            <p>
              AI cannot lay a floor. It cannot wire a house, fit a kitchen, service
              a boiler, fix a pipe, build a wall, or pour a concrete foundation.
              These things require physical presence, physical dexterity, and
              physical judgment that no current or near-future AI system can replace.
            </p>
            <p>
              But this framing misses the actually important point. The blue collar
              trades are not merely safe from AI displacement. They are positioned to
              benefit enormously from it.
            </p>
            <p>
              Consider what happens when AI makes the rest of the economy run
              significantly faster. Businesses grow faster. Capital deployment speeds
              up. Consumer spending power increases. The economy, in aggregate, moves
              faster. A faster economy demands more of everything. More offices, more
              warehouses, more restaurants, more shops — all of which need to be
              built, fitted out, maintained, and periodically renovated.
            </p>
            <p>
              Now apply basic economics to physical labour in this environment.
              Demand for blue collar work increases. Supply is constrained — you
              cannot produce a skilled plumber in three months. Inelastic supply plus
              rising demand produces one outcome: rising prices. Wages go up.
              Significantly. Not as a matter of ideology, but as a matter of market
              mechanics.
            </p>
            <p>
              The trajectory has been visible for several years in the UK.
              Electricians, plumbers, and heating engineers already command rates that
              embarrass many professional salaries.
            </p>
          </Body>

          {/* Chart 6 — Blue Collar Premium */}
          <ChartContainer>
            <BlueCollarPremiumChart />
          </ChartContainer>

          <PullQuote>
            &ldquo;AI makes the system run faster. But the faster the system runs, the
            more it demands the things AI cannot do.&rdquo;
          </PullQuote>

          <Body>
            <p>
              The evidence is already visible. UK electricians and plumbers now
              command rates that embarrass many graduate starting salaries. The best
              apprenticeships in desirable trades are genuinely competitive. A young
              person entering a skilled trade today is, by most financial measures,
              making a better decision than a peer entering a generic university
              degree. AI will not reverse this trend. It will dramatically accelerate
              it.
            </p>
            <p>
              The 82 million professional driving jobs that AI threatens are a useful
              example of how to read this more carefully. 36 million of those drivers
              retire naturally by 2040 — the industry was already facing a driver
              shortage before a single autonomous vehicle hit the road commercially.
              The honest displacement figure is 46 million jobs over 15 years. Spread
              globally, in the economies most likely to adopt AV fastest — China,
              Europe, Japan, all of which face shrinking working-age populations —
              autonomous vehicles are not punching a hole in the labour market. They
              are filling one that demographics had already started digging.
            </p>
          </Body>

          {/* Chart 7 — Driving Jobs Model */}
          <ChartContainer>
            <DrivingJobsChart />
          </ChartContainer>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* THE WORLD IN 2030–2033                             */}
        {/* ═══════════════════════════════════════════════════ */}
        <section id="the-world-2030" className="pt-8">
          <SectionLabel>The World in 5–10 Years</SectionLabel>
          <SectionHeading>What 2030–2033 Actually Looks Like</SectionHeading>

          {/* Sub-section: Professional Services */}
          <Body>
            <p>
              <strong className="text-text font-semibold">
                Professional Services Become a Consumer Good.
              </strong>{" "}
              Legal advice, financial modelling, architectural drafting, medical
              second opinions — all of these become accessible at a fraction of
              their current cost. The professional class does not vanish. But the
              barrier to accessing professional-quality output drops to near zero.
              What was once a luxury becomes a utility.
            </p>
          </Body>

          {/* Sub-section: Solo Economy */}
          <Body>
            <p>
              <strong className="text-text font-semibold">
                The Solo Operator Economy Matures.
              </strong>{" "}
              By 2030, a significant share of the professional workforce operates
              independently. The platforms that connect them to clients have matured.
              Trust signals are robust. Payment infrastructure is reliable. The solo
              operator is not a freelancer on the margins — they are a serious
              economic actor, often earning more than their salaried peers, with more
              autonomy and lower overhead.
            </p>
          </Body>

          {/* Sub-section: Apprenticeships */}
          <Body>
            <p>
              <strong className="text-text font-semibold">
                Apprenticeships Become Competitive with Degrees.
              </strong>{" "}
              As the premium on physical work rises and the premium on generic
              knowledge work falls, the financial calculus of education shifts.
              A young person who enters a skilled trade at 18 — earning immediately,
              accumulating no debt, building equity through work — finds themselves
              financially ahead of their university-educated peers well into middle
              age.
            </p>
          </Body>

          {/* Chart 9 — Apprenticeship vs Degree */}
          <ChartContainer>
            <ApprenticeshipChart />
          </ChartContainer>

          {/* Sub-section: Energy */}
          <Body>
            <p>
              <strong className="text-text font-semibold">
                Energy Becomes the Binding Constraint.
              </strong>{" "}
              AI&rsquo;s growth is physically dependent on the workers it supposedly
              threatens. The data centres that power AI require enormous amounts of
              electricity. The infrastructure to generate, transmit, and distribute
              that electricity requires enormous amounts of physical labour. Every
              new data centre is a construction project. Every solar farm, every wind
              installation, every grid upgrade — these are blue collar jobs, created
              by the very technology that was supposed to eliminate them.
            </p>
          </Body>

          {/* Chart 8 — AI Energy & Infrastructure */}
          <ChartContainer>
            <AIEnergyChart />
          </ChartContainer>

          {/* Sub-section: Uneven Transition */}
          <Body>
            <p>
              <strong className="text-text font-semibold">
                The Transition Period Remains Uneven.
              </strong>{" "}
              None of this means the transition is painless. It will not be. Some
              regions will adapt faster than others. Some individuals will find the
              shift wrenching. Policy matters — education systems, retraining
              programmes, social safety nets all need to evolve. But the direction of
              travel, for a society willing to navigate the transition intelligently,
              is toward more abundance, not less.
            </p>
          </Body>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* CONCLUSION                                         */}
        {/* ═══════════════════════════════════════════════════ */}
        <section id="conclusion" className="pt-8 pb-16">
          <SectionLabel>Conclusion</SectionLabel>
          <SectionHeading>Why Optimism Is the Brave Position</SectionHeading>

          <Body>
            <p>
              There is a kind of intellectual comfort in pessimism about technology.
              It positions you as a serious person — someone who has not been taken
              in by the hype, who is alert to the downsides, who refuses to drink the
              Kool-Aid. Technophobia can feel like sophistication.
            </p>
            <p>
              I understand this. I felt it. Eighteen months ago, I looked at what AI
              was doing to knowledge work and I thought: this is going to be brutal.
              And I was not wrong that it will be disruptive, or that the disruption
              will be unevenly distributed, or that some people will be genuinely
              hurt by the transition.
            </p>
            <p>
              But I was wrong to let the first-order effects be the last word. A
              technology that makes professional services affordable to everyone is
              not a tool of dispossession. A shift from large employers to autonomous
              individual operators is not impoverishment — it is, for many people, a
              form of freedom they never had access to under the existing model. And
              a premium on physical, human-present work — in a world where so much
              else has been automated — is not a consolation prize. It is a
              revaluation, long overdue, of what is actually scarce and therefore
              valuable.
            </p>
            <p>
              The structural logic — deflation, autonomous work, the blue collar
              premium — is sound. The direction of travel, for a society willing to
              navigate the transition intelligently, is toward more abundance, not
              less. More choice, not less. More humanity in work, not less.
            </p>
            <p>
              That is what changed my mind. Not blind faith in technology, but the
              discipline of following the argument wherever it leads.
            </p>
          </Body>

          <PullQuote>
            &ldquo;The optimist&rsquo;s position on AI is not naive. It is the one
            that has done the work.&rdquo;
          </PullQuote>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* SOURCES                                            */}
        {/* ═══════════════════════════════════════════════════ */}
        <section className="pb-16">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-6">
            Sources &amp; Methodology
          </p>
          <div className="font-mono text-[11px] text-muted/70 leading-[1.9] space-y-2">
            <p>
              Historic price data: Nordhaus (2006) on cost of light; Our World in
              Data computing cost series; NIH genome sequencing cost data.
              Manufacturing labour costs: McKinsey Global Institute (2022).
            </p>
            <p>
              Goods/services inflation: US Bureau of Labor Statistics CPI series
              1990–2024. Business formation: US Census Bureau Business Formation
              Statistics (2023); UK Companies House active company data.
            </p>
            <p>
              Startup survival and Y5 employment: US Bureau of Labor Statistics
              Business Employment Dynamics; SBA Office of Advocacy. AI productivity:
              GitHub Copilot studies; Klarna AI implementation data.
            </p>
            <p>
              Trades earnings: ONS Annual Survey of Hours and Earnings (ASHE)
              2015–2024. Driving jobs: UITP Global Taxi &amp; Ride-hailing Figures
              2024; ATRI Truck Driver Demographics 2024; IRU Global Truck Driver
              Report 2024. AI energy: IEA Data Centres &amp; Networks report (2024).
            </p>
            <p className="pt-2 text-muted/50">
              All projections are illustrative models built from the underlying data.
              This is a work of analysis and argument, not financial or investment
              advice.
            </p>
          </div>
        </section>
      </div>

      <ATFooter />
    </main>
  );
}
