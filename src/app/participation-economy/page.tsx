"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";
import PullQuote from "@/components/PullQuote";
import BodyText from "@/components/BodyText";
import Divider from "@/components/Divider";
import StatCallout from "@/components/StatCallout";
import DataTable from "@/components/DataTable";
import FlowDiagram from "@/components/FlowDiagram";
import PortfolioChart from "@/components/PortfolioChart";
import HousingChart from "@/components/HousingChart";
import NationalChart from "@/components/NationalChart";
import FiscalChart from "@/components/FiscalChart";
import BenefitsGrid from "@/components/BenefitsGrid";
import ComparisonChart from "@/components/ComparisonChart";
import CommentSection from "@/components/CommentSection";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <BackToTop />
      <Hero />

      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Section 1 — Introduction */}
        <AnimatedSection id="introduction" className="pt-20 md:pt-28">
          <SectionLabel>Introduction</SectionLabel>
          <SectionHeading>
            Right. Some honesty.
          </SectionHeading>
          <BodyText>
            <p>
              I&rsquo;m not an economist. I didn&rsquo;t study it at university. I
              didn&rsquo;t go to university. I left school early and built things
              instead &mdash; businesses, mostly, and then rebuilt them when they
              broke, which they did with alarming regularity.
            </p>
            <p>
              But over the last fifteen years I&rsquo;ve sat across from a lot
              of people. Farmers and founders. Factory workers and fund managers.
              People running businesses at the edge, and people who feel the
              entire system is running away from them.
            </p>
            <p>
              And the same thing keeps coming up. Not as analysis &mdash; nobody
              sits at their kitchen table quoting Piketty. As a feeling. A quiet,
              stubborn sense that the maths doesn&rsquo;t add up. That something
              structural is off.
            </p>
            <p>
              People work hard. Properly hard. They earn decent money &mdash;
              more, often, than their parents did. They&rsquo;re sensible.
              They&rsquo;re not reckless. And yet the life they&rsquo;re
              working towards &mdash; the security, the ownership, the feeling
              of actually building something &mdash; keeps drifting a little
              further away. Every year. Without fail.
            </p>
          </BodyText>

          <PullQuote>
            Most people participate in the economy every single day. They just
            don&rsquo;t own any of it.
          </PullQuote>

          <BodyText>
            <p>
              They work in the system. They spend in the system. They power the
              system. They are the system. And the system doesn&rsquo;t give
              them a share. That&rsquo;s what this paper is trying to fix.
            </p>
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* Section 2 — The Human Cost */}
        <AnimatedSection id="the-human-cost" className="pt-4">
          <SectionLabel>Part One</SectionLabel>
          <SectionHeading>The Kitchen Table.</SectionHeading>
          <BodyText>
            <p>
              Picture someone you know. Late twenties, maybe early thirties.
              Earns decent money &mdash; &pound;35,000 a year, &pound;45,000
              even. Works hard. Doesn&rsquo;t drink away the weekends. Saves
              what they can.
            </p>
            <p>
              They&rsquo;re sitting at a kitchen table in a rented flat
              somewhere in a city that once felt exciting and now just feels
              expensive. They&rsquo;ve got their bank app open. They&rsquo;ve
              done this calculation before, but they do it again, because they
              keep thinking they must be getting something wrong.
            </p>
            <p>
              Rent: &pound;1,200 a month. Food, energy, transport. A few things
              for the flat. Nothing extravagant. Sensible, really. And at the
              end of it, after tax, there&rsquo;s roughly &pound;300 left.
              Sometimes less.
            </p>
            <p>
              They&rsquo;re 31 years old. They&rsquo;ve been working for nine
              years. And they have almost no assets. Not because they&rsquo;re
              bad with money. Because the machine isn&rsquo;t designed to let
              them accumulate any.
            </p>
          </BodyText>

          <PullQuote>
            They&rsquo;re not imagining it. They&rsquo;re not bad with money.
            The machine is working exactly as designed &mdash; it&rsquo;s just
            not designed for them.
          </PullQuote>

          <BodyText>
            <p>
              This person exists in every city in Britain. In every country in
              the developed world. Millions of them. Educated, capable, working
              hard. Not asking for a handout. Just asking for the maths to work.
            </p>
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* Section 3 — The Hunger */}
        <AnimatedSection id="the-hunger" className="pt-4">
          <SectionLabel>Part Two</SectionLabel>
          <SectionHeading>The Hunger in People&rsquo;s Eyes.</SectionHeading>
          <BodyText>
            <p>
              There&rsquo;s a look people get when they&rsquo;ve done the maths
              too many times. When they&rsquo;ve sat with the spreadsheet long
              enough to understand that they&rsquo;re not going to catch up. Not
              in the way they imagined.
            </p>
            <p>
              It&rsquo;s not rage. Rage is energising. Rage has somewhere to go.
            </p>
            <p>
              It&rsquo;s something quieter. A careful, practised resignation
              &mdash; the way you&rsquo;d hold your face if someone was watching
              and you didn&rsquo;t want them to see how tired you were.
            </p>
            <p>
              I&rsquo;ve seen it in a farmer in his fifties who has worked the
              same land for thirty years. Who keeps it beautifully. Who knows
              every corner of it. Who will never own it, and whose children will
              move to a city, because there&rsquo;s no path for them to own it
              either.
            </p>
            <p>
              I&rsquo;ve seen it in a nurse who kept a ward running through the
              hardest years the NHS has ever known. Who worked nights and
              weekends and came back the next morning. Who earns more now than
              she ever has &mdash; and still can&rsquo;t afford a flat within
              forty minutes of the hospital where she works.
            </p>
            <p>
              I&rsquo;ve seen it in a couple, both graduates, both employed, who
              did every single thing you&rsquo;re supposed to do. Saved for five
              years. Watched the deposit they needed double while they were
              saving it. Still renting. Still calculating.
            </p>
          </BodyText>

          <PullQuote>
            The economy is working. Just not for the people working in it.
          </PullQuote>

          <BodyText>
            <p>
              The danger isn&rsquo;t that people get angry. It&rsquo;s that they
              stop believing the system can be fixed at all. And when people
              stop believing, they stop participating. Not loudly. Quietly. One
              small withdrawal at a time.
            </p>
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* Section 4 — The Problem */}
        <AnimatedSection id="the-problem" className="pt-4">
          <SectionLabel>Part Three</SectionLabel>
          <SectionHeading>The Problem, Mechanically.</SectionHeading>

          <div className="my-10">
            <StatCallout
              number="&pound;2,000,000"
              description="The average UK citizen&rsquo;s lifetime earnings"
            />
          </div>

          <BodyText>
            <p>
              Two million pounds. That&rsquo;s what flows through an average
              person&rsquo;s hands over forty years of work. Here&rsquo;s where
              it goes:
            </p>
          </BodyText>

          <DataTable
            headers={["Category", "Lifetime Spend"]}
            rows={[
              ["Housing (rent or mortgage)", "\u00a3600,000"],
              ["Food", "\u00a3300,000"],
              ["Transport", "\u00a3250,000"],
              ["Energy", "\u00a3150,000"],
              ["Consumer goods", "\u00a3300,000"],
              ["Travel & leisure", "\u00a3250,000"],
              ["**Total**", "**~\u00a31,850,000**"],
            ]}
          />

          <BodyText>
            <p>
              Nearly all of it. Gone. Into the economy. Into businesses,
              landlords, energy companies, infrastructure. And the economy grew
              with it. Company valuations rose. Infrastructure appreciated.
              Property values climbed. But the person who funded all of it
              &mdash; who actually kept the whole machine turning &mdash; owns
              almost none of what they built.
            </p>
            <p>
              That&rsquo;s the mechanical problem. It&rsquo;s not malice.
              It&rsquo;s plumbing. The money flows in one direction &mdash; from
              citizen to economy &mdash; and there&rsquo;s no pipe running back.
            </p>
          </BodyText>

          <PullQuote>
            Every pound you spend builds someone else&rsquo;s asset.
            That&rsquo;s not a conspiracy. It&rsquo;s just plumbing &mdash;
            and plumbing can be redesigned.
          </PullQuote>
        </AnimatedSection>

        <Divider />

        {/* Section 5 — The Idea */}
        <AnimatedSection id="the-idea" className="pt-4">
          <SectionLabel>Part Four</SectionLabel>
          <SectionHeading>Here&rsquo;s the actual idea.</SectionHeading>

          <PullQuote centered large>
            What if three pence of every pound you already spend automatically
            bought you a tiny piece of the economy you were spending it in?
          </PullQuote>

          <BodyText>
            <p>
              Your rent, quietly building housing ownership. Your food shop,
              slowly accumulating food supply equity. Your energy bill, buying
              you a fractional stake in the grid that powers your home. Your
              commute, investing in the infrastructure you travel on.
            </p>
            <p>
              Not a tax. Not a levy. Not redistribution.
            </p>
            <p>
              Just ownership &mdash; building silently every time you participate.
            </p>
            <p>
              You don&rsquo;t change your behaviour. You don&rsquo;t need a
              financial adviser. The mechanism runs in the background, invisibly,
              the way a pension contribution does &mdash; except it&rsquo;s tied
              not to your employer but to your existence in the economy.
            </p>
            <p>
              Your funds are locked for ten years. You can&rsquo;t touch them.
              They compound. After ten years, you can begin drawing down &mdash;
              but not in lump sums. One day at a time. A daily drip of wealth,
              fed back to you from the economy you helped build.
            </p>
            <p>That&rsquo;s the Participation Economy.</p>
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* Section 6 — The Model */}
        <AnimatedSection id="the-model" className="pt-4">
          <SectionLabel>Part Five</SectionLabel>
          <SectionHeading>How the Machine Works.</SectionHeading>

          <FlowDiagram />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">
                Sector Mapping
              </h3>
              <DataTable
                headers={["Where you spend", "What you own"]}
                rows={[
                  ["Housing", "Social Housing ETF"],
                  ["Food & grocery", "Food Supply ETF"],
                  ["Transport", "Infrastructure ETF"],
                  ["Energy", "Energy Grid ETF"],
                  ["Consumer spending", "Retail Economy ETF"],
                ]}
              />
            </div>
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">
                Investment Structure
              </h3>
              <DataTable
                headers={["Asset class", "Allocation"]}
                rows={[
                  ["Public markets", "45%"],
                  ["Infrastructure", "25%"],
                  ["Private equity", "20%"],
                  ["Venture capital", "10%"],
                ]}
              />
            </div>
          </div>

          <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
            <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Incentive Tiers
            </p>
            <p className="font-serif text-[16px] leading-[1.7] text-text">
              Some spending earns more. Public transport: 4%. Education: 5%.
              Health &amp; fitness: 5%. The mechanism rewards choices that
              benefit the commons.
            </p>
          </div>

          <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
            <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              The Lock &amp; The Drip
            </p>
            <p className="font-serif text-[16px] leading-[1.7] text-text">
              All funds are locked for ten years. No withdrawals. No exceptions.
              This is not a savings account &mdash; it&rsquo;s a long-term
              ownership stake. After ten years, you can draw down one day at a
              time &mdash; a steady daily drip, not a lump sum. This stops people
              cashing out impulsively, keeps the capital compounding, and creates
              a supplementary income that arrives every morning like clockwork.
            </p>
          </div>
        </AnimatedSection>

        <Divider />

        {/* Section 6.5 — The Government's Contribution */}
        <AnimatedSection id="fiscal-case" className="pt-4">
          <SectionLabel>Part Five-B</SectionLabel>
          <SectionHeading>The Government&rsquo;s Investment &mdash; And Why It&rsquo;s Genius.</SectionHeading>
          <BodyText>
            <p>
              Here&rsquo;s where the government puts skin in the game. Not by
              writing a cheque. By doing something smarter.
            </p>
            <p>
              As soon as the citizen portfolios start generating returns, they
              also start generating tax. Three streams:
            </p>
          </BodyText>

          <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
            <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Tax Revenue Streams
            </p>
            <div className="space-y-2 font-serif text-[15px] leading-[1.7] text-text">
              <p>
                <strong>1. The participation tax at death (30%).</strong> When a
                citizen dies, thirty percent of their remaining portfolio returns
                to the state. The rest passes to heirs.
              </p>
              <p>
                <strong>2. Capital gains tax on drawdowns.</strong> When citizens
                draw down after the ten-year lock, the gains are taxable. After
                decades of compounding, over ninety percent of the portfolio is
                capital gain.
              </p>
              <p>
                <strong>3. Dividend tax.</strong> The citizen portfolios generate
                ongoing dividend income from equity holdings, which is taxed at
                standard rates.
              </p>
            </div>
          </div>

          <BodyText>
            <p>
              To understand why the government&rsquo;s commitment matters, work
              it backwards from the average citizen. The average UK adult is 40.
              That&rsquo;s 28 years until retirement at 68, and death at roughly
              81. Here&rsquo;s what the timeline actually looks like:
            </p>
          </BodyText>

          <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
            <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              The Average Citizen&rsquo;s Timeline
            </p>
            <div className="space-y-2 font-serif text-[15px] leading-[1.7] text-text">
              <p>
                <strong>Year 0:</strong> Scheme launches. Average citizen is 40.
                Contributions begin &mdash; small, automatic, unnoticeable.
              </p>
              <p>
                <strong>Year 10:</strong> Lock period ends. Average citizen is 50.
                Portfolios have had 10 years to compound. Daily drawdowns
                become available, but most people leave it growing.
                First CGT revenue trickles in.
              </p>
              <p>
                <strong>Year 13:</strong> The first deaths occur &mdash; people
                who were 68 at launch. But their portfolios only had 13 years of
                accumulation. The death tax generates revenue, but modest amounts.
              </p>
              <p>
                <strong>Year 28:</strong> Average citizen reaches 68 and retires.
                Portfolio has had 28 years of compounding. Drawdowns increase.
                CGT revenue grows meaningfully.
              </p>
              <p>
                <strong>Year 30:</strong> Reinvestment period ends. By now the
                first full-career cohorts are retiring with large portfolios,
                and earlier retirees are dying with meaningful balances.
                The death tax is generating real money.
              </p>
              <p>
                <strong>Year 41:</strong> Average citizen dies at 81. Their
                portfolio had 28 years of accumulation plus 13 years of
                drawdown. 30% of the remaining balance returns to the Treasury.
              </p>
              <p>
                <strong>Year 50:</strong> Scheme is mature. The 18-year-olds
                from launch day are now 68 with full 50-year portfolios.
                The tax revenue is enormous.
              </p>
            </div>
          </div>

          <BodyText>
            <p>
              This is why the thirty-year reinvestment period isn&rsquo;t
              generosity. It&rsquo;s arithmetic. For the first decade, portfolios
              are small and nobody can draw down &mdash; the tax revenue is
              negligible. By year twenty, people are drawing down but the big
              portfolios haven&rsquo;t matured yet. The death tax only becomes a
              serious revenue stream around year thirty, when citizens who had
              20&ndash;30 years of accumulation start dying.
            </p>
            <p>
              So the government commits to reinvesting every penny of CGT, death
              tax, and dividend tax back into the citizen fund for thirty years.
              Not because it&rsquo;s being generous. Because for most of that
              period, there isn&rsquo;t much to collect anyway &mdash; and what
              there is compounds far more powerfully inside the fund than it
              would sitting in the Treasury&rsquo;s current account.
            </p>
            <p>
              That is the government&rsquo;s contribution. Not a cash handout.
              Not a line item on the budget. A thirty-year commitment to forgo
              modest early tax revenue and let it compound. The state is saying:
              we&rsquo;ll take our cut later, when the fund is enormous, and our
              share of it is worth the patience.
            </p>
          </BodyText>

          <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
            <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              The 30-Year Reinvestment Commitment
            </p>
            <p className="font-serif text-[16px] leading-[1.7] text-text">
              <strong>Years 1&ndash;30:</strong> All CGT, death tax, and
              dividend tax from participation portfolios is reinvested into
              the citizen fund. The government forgoes this revenue &mdash;
              that&rsquo;s its investment. <strong>Year 31 onwards:</strong> The
              government begins collecting. By now the fund is so large that
              the annual tax take dwarfs what any traditional match programme
              could have generated.
            </p>
          </div>

          <PullQuote>
            The government&rsquo;s contribution isn&rsquo;t cash. It&rsquo;s
            patience. Thirty years of reinvested tax revenue, compounding
            inside the fund. That&rsquo;s not doing nothing. That&rsquo;s
            the most disciplined investment any Treasury has ever made.
          </PullQuote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <StatCallout
              number="30 yrs"
              description="Government reinvests all tax revenue back into the fund"
              delay={0}
            />
            <StatCallout
              number="&pound;0"
              description="Cost from existing Treasury budgets"
              delay={0.15}
            />
            <StatCallout
              number="&pound;100B+"
              description="Annual tax revenue from year 31 onwards"
              delay={0.3}
            />
          </div>

          <FiscalChart />
          <p className="text-xs text-muted italic mt-3">Based on modelled assumptions. Figures are illustrative projections, not guaranteed outcomes.</p>

          <BodyText>
            <p>
              After thirty years of reinvestment, the national citizen asset
              base is significantly larger than it would have been without
              &mdash; because the tax revenue was compounding inside the fund,
              not leaking out to general spending. When the government finally
              starts collecting in year thirty-one, the portfolios are mature,
              the death tax is generating tens of billions, the CGT on
              drawdowns is enormous, and the dividend stream is a river.
            </p>
            <p>
              The government gets paid handsomely. It just had the discipline
              to wait. And that discipline &mdash; that thirty-year
              reinvestment commitment &mdash; is the single most important
              feature of the whole system. It&rsquo;s what turns a modest 3%
              citizen contribution into a &pound;10 trillion national asset base.
              The government isn&rsquo;t a bystander. It&rsquo;s the
              accelerant.
            </p>
          </BodyText>

          <PullQuote>
            The government doesn&rsquo;t write a cheque. It makes a promise:
            for thirty years, every penny this system generates goes back in.
            That promise is worth more than any match programme ever devised.
          </PullQuote>
        </AnimatedSection>

        <Divider />

        {/* Section 7 — Individual Impact */}
        <AnimatedSection id="individual-impact" className="pt-4">
          <SectionLabel>Part Six</SectionLabel>
          <SectionHeading>What It Means for One Person.</SectionHeading>
          <BodyText>
            <p>
              She earns &pound;55,000 a year. She spends about &pound;46,000.
              Under the Participation Economy, 3% of that &mdash; &pound;1,380
              &mdash; goes toward her ownership stake. No government match. No
              subsidy. Just her own spending, quietly redirected.
            </p>
            <p>
              &pound;1,380 a year sounds like nothing. It&rsquo;s less than
              &pound;4 a day. She doesn&rsquo;t feel it. But at 8% compound
              returns over fifty years, with her spending growing 3% a year
              with inflation, that &pound;4 a day becomes something remarkable.
            </p>
          </BodyText>

          <PortfolioChart />
          <p className="text-xs text-muted italic mt-3">Assumes 8% blended nominal return. Actual returns will vary with market conditions.</p>

          <BodyText>
            <p>
              By sixty-eight, her participation portfolio is worth over
              &pound;1.1 million. Built from three pence of every pound she
              already spent. No sacrifice. No financial literacy required. No
              lucky inheritance. Just the machine, running quietly in the
              background for fifty years.
            </p>
            <p>
              After the ten-year lock, she can draw down daily. At retirement,
              that&rsquo;s roughly &pound;150 a day arriving in her account
              every morning. &pound;55,000 a year. From a system that cost her
              nothing she wasn&rsquo;t already spending.
            </p>
          </BodyText>

          <div className="mt-14">
            <h3 className="font-serif text-2xl md:text-3xl text-text mb-6">
              The Renter Who Becomes an Owner
            </h3>
            <BodyText>
              <p>
                She pays &pound;1,200 a month in rent. Three percent builds
                housing equity &mdash; automatically, invisibly, month after
                month. Not enough to feel. But enough, over time, to matter
                enormously.
              </p>
              <p>
                Here&rsquo;s the bit most people miss. She doesn&rsquo;t just
                accumulate units. She owns the equity. As the housing assets
                appreciate &mdash; and over a lifetime, they will &mdash; she
                benefits from that growth too. The same force that has been
                working against her, rising property values, is now working
                for her.
              </p>
            </BodyText>
          </div>

          <HousingChart />
          <p className="text-xs text-muted italic mt-3">Assumes 5% housing appreciation and 3.5% rental inflation. Actual values will vary by market.</p>

          <BodyText>
            <p>
              By retirement, her housing stake alone is worth over
              &pound;170,000. The underlying equity is worth far more than the
              sum of her contributions, because the assets appreciated too. She
              didn&rsquo;t save for a deposit. She didn&rsquo;t need to. The
              system built her a stake from the rent she was already paying.
            </p>
          </BodyText>

          <PullQuote>
            She&rsquo;s no longer just a tenant. She&rsquo;s a participant.
            Someone the system is working for, not just extracting from.
          </PullQuote>

          <div className="mt-14">
            <h3 className="font-serif text-2xl md:text-3xl text-text mb-6">
              Leveraging Into Home Ownership
            </h3>
            <BodyText>
              <p>
                After ten years of participation, a citizen might hold
                &pound;25,000 or more in housing equity. That stake is real,
                liquid, regulated &mdash; and it can be used as collateral.
              </p>
              <p>
                A lender looks at a mortgage application and sees a verified,
                growing asset backed by diversified social housing stock. It
                counts. Not as a gift from parents. Not as a lucky inheritance.
                As something the applicant built themselves, three pence at a
                time, from the rent they were already paying.
              </p>
              <p>
                The participation portfolio doesn&rsquo;t replace the mortgage.
                It unlocks it. The same asset that earns dividends and
                appreciates in value also opens the door to private home
                ownership.
              </p>
            </BodyText>

            <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
              <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                How It Works
              </p>
              <div className="space-y-2 font-serif text-[15px] leading-[1.7] text-text">
                <p>
                  <strong>1. Build.</strong> Three percent of housing spend
                  accumulates automatically into the Social Housing ETF.
                  The stake grows from contributions and capital appreciation.
                  Locked for ten years.
                </p>
                <p>
                  <strong>2. Leverage.</strong> After the ten-year lock, citizens
                  can pledge their housing equity as a deposit or collateral
                  for a private mortgage. Lenders recognise it as a regulated,
                  appreciating asset.
                </p>
                <p>
                  <strong>3. Own.</strong> The citizen buys their own home.
                  Their participation portfolio continues to grow in the
                  background. They now own both &mdash; a private home and
                  a stake in the nation&rsquo;s housing stock.
                </p>
              </div>
            </div>

            <BodyText>
              <p>
                This turns the housing crisis on its head. The thing that
                made home ownership impossible &mdash; spending all your
                money on rent &mdash; now becomes the mechanism that makes
                it possible.
              </p>
            </BodyText>

            <PullQuote>
              The rent you pay today builds the deposit you need tomorrow.
              That&rsquo;s not just policy. That&rsquo;s justice.
            </PullQuote>
          </div>
        </AnimatedSection>

        <Divider />

        {/* Section 6.7 — Social Housing */}
        <AnimatedSection id="social-housing" className="pt-4">
          <SectionLabel>Part Six-C</SectionLabel>
          <SectionHeading>Housing That Belongs to Everyone.</SectionHeading>
          <BodyText>
            <p>
              The housing allocation isn&rsquo;t an abstraction. It builds
              things. Real homes. In real places. For real people.
            </p>
            <p>
              The Social Housing ETF pools citizen contributions and invests
              directly into the construction and acquisition of housing stock.
              Not speculative development for profit. Not luxury flats in
              Canary Wharf. Affordable, well-built homes in the communities
              that need them &mdash; funded by the citizens who live in those
              communities.
            </p>
          </BodyText>

          <div className="my-10">
            <StatCallout
              number="&pound;9B"
              description="Annual citizen capital flowing into housing (3% of &pound;300B housing-related spend)"
            />
          </div>

          <BodyText>
            <p>
              At an average build cost of &pound;180,000 per home, that&rsquo;s
              the equivalent of 50,000 new citizen-owned homes every year. Not
              government housing. Not charity housing. Citizen housing &mdash;
              owned collectively by the people whose spending created it.
            </p>
            <p>
              The renter in Manchester is part-owner of the block in Birmingham.
              The young family in Leeds holds equity in the development in
              Bristol. The whole country is invested in the whole country&rsquo;s
              housing. That&rsquo;s not a slogan. It&rsquo;s a mechanism.
            </p>
          </BodyText>

          <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
            <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why This Is Different
            </p>
            <div className="space-y-2 font-serif text-[15px] leading-[1.7] text-text">
              <p>
                <strong>Council housing</strong> is funded by the state, managed
                by the state, and often neglected by the state. Citizens have
                no stake and no say.
              </p>
              <p>
                <strong>Housing associations</strong> are well-intentioned but
                opaque. Tenants don&rsquo;t own them. The public doesn&rsquo;t
                benefit from their growth.
              </p>
              <p>
                <strong>Citizen housing</strong> is funded by citizens, owned by
                citizens, and governed in their interest. Dividends from rent
                flow back to the citizen owners. The incentives are aligned:
                better housing stock means better returns for everyone.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-serif text-2xl md:text-3xl text-text mb-6">
              The 35-Year Cycle
            </h3>
            <BodyText>
              <p>
                Housing doesn&rsquo;t last forever. After thirty-five years,
                the original stock starts to age. So the model accounts for
                this. The ETF sells older stock, generates liquidity for
                citizen drawdowns, and reinvests in new construction. Better
                insulation. Better efficiency. Better design. Every generation
                of citizen housing is better than the last.
              </p>
            </BodyText>

            <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
              <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                The Renewal Cycle
              </p>
              <div className="space-y-2 font-serif text-[15px] leading-[1.7] text-text">
                <p>
                  <strong>Years 1&ndash;35:</strong> New housing is built and
                  held. Rents generate dividends for citizen owners. The stock
                  appreciates.
                </p>
                <p>
                  <strong>Year 35+:</strong> Older stock is sold at market
                  value. Sales fund daily drawdowns for citizens and finance
                  the next generation of homes.
                </p>
                <p>
                  <strong>Continuous:</strong> New capital from current
                  workers&rsquo; spending funds fresh construction every year.
                  The pipeline never stops.
                </p>
              </div>
            </div>
          </div>

          <PullQuote>
            Fifty thousand new homes a year. Owned by the public. Built by
            the public&rsquo;s own capital. Renewed every generation to a
            higher standard. That&rsquo;s not a housing policy. That&rsquo;s
            a housing machine.
          </PullQuote>
        </AnimatedSection>

        <Divider />

        {/* Section 7.5 — The New vs The Old */}
        <AnimatedSection id="new-vs-old" className="pt-4">
          <SectionLabel>Part Six-B</SectionLabel>
          <SectionHeading>The New vs The Old.</SectionHeading>
          <BodyText>
            <p>
              Under the current system, a median earner works for fifty years.
              They pay into a pension. If they&rsquo;re lucky, they buy a home.
              They arrive at sixty-eight with a pension pot of perhaps
              &pound;400,000 and whatever property equity they&rsquo;ve managed
              to accumulate. Total wealth at retirement: roughly &pound;600,000.
              Often less.
            </p>
            <p>
              Under the Participation Economy, the same person &mdash; earning
              the same wages, spending the same money, living the same life
              &mdash; arrives at sixty-eight with everything they would have
              had before, plus a participation portfolio worth over &pound;1.1
              million and housing equity worth &pound;170,000. Total wealth:
              over &pound;1.9 million. From three pence of every pound they
              already spent.
            </p>
          </BodyText>

          <ComparisonChart />
          <p className="text-xs text-muted italic mt-3">Comparison based on modelled assumptions. Individual outcomes depend on spending, returns, and timing.</p>

          <BodyText>
            <p>
              Nothing about this person&rsquo;s day-to-day life changed. They
              didn&rsquo;t take on more risk. They didn&rsquo;t sacrifice
              weekends learning to trade. They didn&rsquo;t inherit anything.
              They just lived &mdash; and the system finally worked with them
              instead of around them.
            </p>
          </BodyText>

          <PullQuote>
            Same person. Same job. Same spending. Three times the wealth at
            retirement. That&rsquo;s not a different life. It&rsquo;s a
            different system.
          </PullQuote>
        </AnimatedSection>

        <Divider />

        {/* Section 8 — National Impact */}
        <AnimatedSection id="national-impact" className="pt-4">
          <SectionLabel>Part Seven</SectionLabel>
          <SectionHeading>What It Means for a Country.</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <StatCallout
              number="&pound;900B"
              description="UK household spending per year"
              delay={0}
            />
            <StatCallout
              number="&pound;27B"
              description="Annual citizen capital (3% of spending)"
              delay={0.15}
            />
            <StatCallout
              number="&pound;10T"
              description="Net citizen asset base after one generation"
              delay={0.3}
            />
          </div>

          <BodyText>
            <p>
              The real model isn&rsquo;t a straight line up. People don&rsquo;t
              just accumulate forever. They retire. They draw down &mdash;
              daily, as the mechanism allows. They live on what they&rsquo;ve
              built. And eventually, they die. So the national model accounts
              for the full lifecycle.
            </p>
          </BodyText>

          <NationalChart />
          <p className="text-xs text-muted italic mt-3">National projections based on modelled cohort assumptions. Subject to economic conditions and policy choices.</p>

          <BodyText>
            <p>
              Citizens accumulate during their working years with a ten-year
              lock. After the lock, they can draw down daily &mdash; a steady
              income that arrives every morning. In retirement, a 5% annual
              drawdown gives an average daily income of around &pound;150.
              That&rsquo;s &pound;55,000 a year &mdash; funded not by the state,
              not by an employer, but by a lifetime of compound participation.
            </p>
          </BodyText>

          <PullQuote>
            At death, thirty percent of the remaining portfolio returns to
            the state &mdash; a participation tax. The rest passes to heirs.
            One mechanism. Billions in new government revenue every year. And
            the government spent nothing to create it.
          </PullQuote>

          <BodyText>
            <p>
              Ten trillion pounds of productive assets &mdash; net of every
              drawdown, every death, every inheritance &mdash; built over one
              generation, owned by the citizens of the country that created
              them. The death tax alone generates tens of billions per year.
              Capital gains tax on drawdowns adds tens of billions more. The
              government didn&rsquo;t spend a penny. It just built the pipe.
            </p>
            <p>
              When people own things, they care about them differently. They
              vote differently. They feel differently &mdash; about the country,
              about capitalism, about each other.
            </p>
            <p>
              The dysfunction in democratic politics has many causes. But one of
              them &mdash; perhaps the most structural &mdash; is that large
              numbers of people have concluded the system isn&rsquo;t working
              for them and never will.
            </p>
            <p>
              The Participation Economy doesn&rsquo;t fix that with a speech. It
              fixes it with a fact. A number on a statement. A daily deposit
              that arrives every morning. A stake that&rsquo;s real.
            </p>
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* Section 9 — Innovation */}
        <AnimatedSection id="innovation" className="pt-4">
          <SectionLabel>Part Eight</SectionLabel>
          <SectionHeading>The Innovation Layer.</SectionHeading>
          <BodyText>
            <p>
              If citizen ownership funds reached &pound;10 trillion over
              one generation &mdash; and a 5% venture allocation was maintained
              &mdash; that creates a &pound;500 billion pool of startup capital.
              Not venture capital owned by a handful of firms in Mayfair.
              Citizen capital. Owned by the people who are also the consumers
              of the technology being built.
            </p>
          </BodyText>

          <div className="my-10">
            <StatCallout
              number="&pound;500B"
              description="Citizen-owned startup capital at scale"
            />
          </div>

          <PullQuote>
            This is what it means to have a stake in the future. Not a metaphor.
            An actual stake. With dividends.
          </PullQuote>

          <BodyText>
            <p>
              Citizens fund the next generation of British companies. They
              benefit from their growth &mdash; not just as users and consumers,
              but as owners. The upside of innovation flows back to the people
              who made it possible. Which, frankly, is how it should have
              worked all along.
            </p>
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* Section 10 — Benefits Grid */}
        <AnimatedSection id="benefits" className="pt-4">
          <SectionLabel>Part Nine</SectionLabel>
          <SectionHeading>What This Changes.</SectionHeading>
          <BenefitsGrid />
        </AnimatedSection>

        <Divider />

        {/* Section 11 — Closing */}
        <AnimatedSection id="closing" className="pt-4 pb-20 md:pb-28">
          <SectionLabel>Conclusion</SectionLabel>
          <SectionHeading>The Person on the Bus.</SectionHeading>
          <BodyText>
            <p>
              I keep coming back to that person. The one on the bus home from a
              long day. Phone in hand, half-looking out the window.
            </p>
            <p>
              I don&rsquo;t want to give them a fantasy. People aren&rsquo;t
              naive. They&rsquo;ve heard promises before.
            </p>
            <p>
              What I want to give them is something more useful than a promise.
              A mechanism.
            </p>
            <p>
              Because mechanisms matter &mdash; enormously &mdash; when
              you&rsquo;ve spent years feeling like the tide is against you. Not
              because every day suddenly gets easier, but because the logic of
              your situation has changed. The system is compounding in your
              favour now, not around you.
            </p>
            <p>
              The person on the bus goes to work tomorrow. Buys breakfast. Takes
              the tube. Does their job. Pays their bills. All the same things
              they did yesterday.
            </p>
            <p>
              But three pence of every pound they spend is doing something
              different now. It&rsquo;s building them a stake. Silently.
              Persistently. Locked away and compounding. And after ten years,
              it starts dripping back &mdash; a daily deposit, every morning,
              for the rest of their life.
            </p>
            <p>
              In ten years, it&rsquo;s small but real. In twenty, it&rsquo;s
              meaningful. By retirement, it&rsquo;s transformative.
            </p>
          </BodyText>

          <PullQuote centered large>
            The economy works best when the people who power it own a piece
            of it. That&rsquo;s not ideology. That&rsquo;s engineering.
          </PullQuote>

          <BodyText>
            <p>
              That&rsquo;s the Participation Economy. Not a revolution. Not
              redistribution. A reconnection &mdash; between the people who
              spend and the system that grows from their spending.
            </p>
          </BodyText>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14 no-print">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-sans text-sm font-semibold uppercase tracking-wider rounded hover:bg-green-800 transition-colors"
            >
              Save as PDF
            </button>
            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent("A framework for rebuilding capital ownership in modern market societies.");
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank", "noopener");
              }}
              className="inline-flex items-center px-8 py-3.5 border border-rule text-muted font-sans text-sm font-semibold uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
            >
              Share on X
            </button>
            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener");
              }}
              className="inline-flex items-center px-8 py-3.5 border border-rule text-muted font-sans text-sm font-semibold uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
            >
              Share on LinkedIn
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
              className="inline-flex items-center px-8 py-3.5 border border-rule text-muted font-sans text-sm font-semibold uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
            >
              Copy Link
            </button>
          </div>
        </AnimatedSection>
      </div>

      <CommentSection />

      <Footer />
    </main>
  );
}
