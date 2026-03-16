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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />

      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Section 1 — Introduction */}
        <AnimatedSection id="introduction" className="pt-20 md:pt-28">
          <SectionLabel>Introduction</SectionLabel>
          <SectionHeading>
            I want to start with some honesty.
          </SectionHeading>
          <BodyText>
            <p>
              I&rsquo;m not an economist. I haven&rsquo;t spent years in lecture
              theatres studying theory. I left school early. I built things
              instead &mdash; and then rebuilt them when they broke, which they
              often did.
            </p>
            <p>
              But over the last fifteen years I&rsquo;ve sat across from a lot
              of people. Farmers and founders. Factory workers and fund
              managers. People running businesses on the edge, and people who
              feel the whole system is running away from them.
            </p>
            <p>
              And one thing keeps surfacing in those conversations &mdash; not
              as analysis, but as feeling. A quiet, persistent sense that the
              system isn&rsquo;t quite fair. Not in a dramatic, revolutionary
              way. Just in a maths-doesn&rsquo;t-add-up way.
            </p>
            <p>
              People work hard. Really hard. They earn decent money &mdash;
              more, often, than their parents did. They&rsquo;re careful.
              They&rsquo;re not reckless. And yet the life they&rsquo;re
              working towards &mdash; the security, the ownership, the feeling
              that they&rsquo;re building something &mdash; keeps moving just a
              little further away, every year.
            </p>
          </BodyText>

          <PullQuote>
            Most people participate in the economy every single day. They just
            don&rsquo;t own any of it.
          </PullQuote>

          <BodyText>
            <p>
              They work in the system. They spend in the system. They power the
              system. They are the system. And yet the system doesn&rsquo;t give
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
              They&rsquo;re sitting at a kitchen table &mdash; maybe a rented
              flat somewhere in a city that once felt exciting, that now just
              feels expensive. They&rsquo;ve got their bank app open.
              They&rsquo;ve done this calculation before, but they do it again,
              because they keep thinking they must be missing something.
            </p>
            <p>
              Rent: &pound;1,200 a month. Food, energy, transport. A few things
              for the flat. Not extravagant. Sensible, really. And at the end
              of it, after tax, there&rsquo;s roughly &pound;300 left.
              Sometimes less.
            </p>
            <p>
              They&rsquo;re 31 years old. They&rsquo;ve been working for nine
              years. And they have almost no assets.
            </p>
          </BodyText>

          <PullQuote>
            They&rsquo;re not imagining it. They&rsquo;re not bad with money.
            Something structural is broken.
          </PullQuote>

          <BodyText>
            <p>
              This person exists in every city in Britain. In every country in
              the developed world. Millions of them. Educated, capable, working
              hard. Not asking for a handout. Not expecting life to be easy.
              Just asking for the maths to work.
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
              It&rsquo;s something quieter than that. A stillness. A kind of
              careful, practised resignation &mdash; the way you&rsquo;d hold
              your face if someone was watching and you didn&rsquo;t want them
              to see how tired you were.
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
              small withdrawal at a time. That&rsquo;s what we&rsquo;re risking.
              And we don&rsquo;t have to.
            </p>
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* Section 4 — The Problem */}
        <AnimatedSection id="the-problem" className="pt-4">
          <SectionLabel>Part Three</SectionLabel>
          <SectionHeading>The Problem, Plainly Stated.</SectionHeading>

          <div className="my-10">
            <StatCallout
              number="&pound;2,000,000"
              description="The average UK citizen&rsquo;s lifetime earnings"
            />
          </div>

          <BodyText>
            <p>
              Think about that number for a moment. Two million pounds. Flowing
              through one person&rsquo;s hands over forty years of work. Here is
              roughly where it goes:
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
              &mdash; who actually kept the whole system turning &mdash; owns
              almost none of what they built.
            </p>
          </BodyText>

          <PullQuote>
            Every pound you spend builds someone else&rsquo;s asset.
            That&rsquo;s not a conspiracy. It&rsquo;s just how the system was
            designed &mdash; and it&rsquo;s a design we can change.
          </PullQuote>
        </AnimatedSection>

        <Divider />

        {/* Section 5 — The Idea */}
        <AnimatedSection id="the-idea" className="pt-4">
          <SectionLabel>Part Four</SectionLabel>
          <SectionHeading>The Idea. One Paragraph.</SectionHeading>

          <PullQuote centered large>
            What if a small fraction of what you already spend &mdash; three
            pence in every pound &mdash; automatically bought you a tiny piece
            of the economy you were spending it in?
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
              Just ownership &mdash; quietly building every time you
              participate.
            </p>
            <p>
              You don&rsquo;t change your behaviour. You don&rsquo;t need a
              financial adviser. The mechanism runs in the background,
              invisibly, the way a pension contribution does &mdash; except
              it&rsquo;s tied not to your employment but to your existence in
              the economy.
            </p>
            <p>That&rsquo;s the Participation Economy.</p>
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* Section 6 — The Model */}
        <AnimatedSection id="the-model" className="pt-4">
          <SectionLabel>Part Five</SectionLabel>
          <SectionHeading>How It Works.</SectionHeading>

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
              Health &amp; fitness: 5%.
            </p>
          </div>
        </AnimatedSection>

        <Divider />

        {/* Section 6.5 — The Government Match */}
        <AnimatedSection id="government-match" className="pt-4">
          <SectionLabel>Part Five-B</SectionLabel>
          <SectionHeading>The Government Match.</SectionHeading>
          <BodyText>
            <p>
              Here&rsquo;s where it doubles. For every three pence a citizen
              puts in, the government matches it. Three pence from you, three
              pence from the state. Six pence of every pound, building
              ownership &mdash; half of it funded by the people who spend, half
              by the country that benefits from their spending.
            </p>
            <p>
              The logic is simple. If citizens are investing in the
              infrastructure, housing, and industries that make the economy
              function, the government has every reason to accelerate that. It
              reduces long-term welfare dependency. It creates a more stable
              electorate. It builds a citizen balance sheet that compounds
              quietly for decades.
            </p>
          </BodyText>

          <div className="my-10">
            <StatCallout
              number="&pound;27B"
              description="Annual cost of the government match"
            />
          </div>

          <BodyText>
            <p>
              Twenty-seven billion pounds a year. That sounds like a lot. Let&rsquo;s
              put it in proportion.
            </p>
          </BodyText>

          <DataTable
            headers={["Item", "Annual Spend"]}
            rows={[
              ["Total UK government spending", "\u00a31,189B"],
              ["State pension", "\u00a3124B"],
              ["NHS", "\u00a3182B"],
              ["Defence", "\u00a356B"],
              ["Debt interest", "\u00a3100B"],
              ["Participation Economy match (3%)", "\u00a327B"],
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <StatCallout
              number="2.3%"
              description="Of total government spending"
              delay={0}
            />
            <StatCallout
              number="&pound;27B"
              description="Builds &pound;20T net citizen assets over one generation"
              delay={0.15}
            />
            <StatCallout
              number="&lt;22p"
              description="Per day per citizen from the Treasury"
              delay={0.3}
            />
          </div>

          <BodyText>
            <p>
              Two point three percent of annual government expenditure. Less
              than a quarter of what the country pays in debt interest alone.
              And unlike debt interest, this money doesn&rsquo;t disappear
              &mdash; it compounds. It builds a national citizen balance sheet.
              It turns spending into investment.
            </p>
            <p>
              With the match, citizen capital doubles. Over one full
              generation &mdash; from age eighteen to sixty-eight &mdash; the
              net national citizen asset base reaches &pound;20 trillion, even
              after accounting for retirement drawdowns and the death tax.
              Every person in the country holds a growing, productive stake
              in the economy they live in. And the death tax alone &mdash;
              thirty percent of remaining assets on death &mdash; returns
              &pound;111 billion per year to the Treasury by the fiftieth year.
              Nearly four times the annual cost of the match. The government
              doesn&rsquo;t lose this money &mdash; it redirects it from
              future costs it would have paid anyway: housing subsidies,
              pension top-ups, welfare dependency. This is upstream investment.
              It more than pays for itself.
            </p>
          </BodyText>

          <PullQuote>
            For less than what the government spends on debt interest, every
            citizen in the country gets a stake in the economy. That&rsquo;s not
            radical spending. That&rsquo;s radical efficiency.
          </PullQuote>
        </AnimatedSection>

        <Divider />

        {/* Section 6.6 — The Fiscal Case */}
        <AnimatedSection id="fiscal-case" className="pt-4">
          <SectionLabel>Part Five-C</SectionLabel>
          <SectionHeading>The Fiscal Case.</SectionHeading>
          <BodyText>
            <p>
              The match costs the Treasury &pound;27 billion a year at inception,
              rising to around &pound;62 billion by the fiftieth year as wages
              and spending grow. That&rsquo;s the outflow. But the system generates
              its own inflows &mdash; three distinct tax revenue streams that grow
              faster than the cost.
            </p>
          </BodyText>

          <div className="my-8 p-6 bg-pull-bg rounded-lg border border-green-200">
            <p className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Revenue Streams
            </p>
            <div className="space-y-2 font-serif text-[15px] leading-[1.7] text-text">
              <p>
                <strong>1. The participation tax at death (30%).</strong> When a
                citizen dies, thirty percent of their remaining portfolio returns
                to the state. The rest passes to heirs.
              </p>
              <p>
                <strong>2. Capital gains tax on drawdowns.</strong> When retirees
                sell portfolio assets to fund their retirement, the gains are
                taxable. After fifty years of compounding, over ninety percent
                of the portfolio is capital gain.
              </p>
              <p>
                <strong>3. Dividend tax.</strong> The citizen portfolios generate
                ongoing dividend income from equity holdings, which is taxed at
                standard rates.
              </p>
            </div>
          </div>

          <FiscalChart />

          <BodyText>
            <p>
              By year thirty-five, annual tax revenue from the participation
              economy exceeds the annual match cost. By year fifty, the
              government collects &pound;213 billion per year against a match
              cost of &pound;62 billion &mdash; over three times the outlay.
              The death tax alone returns &pound;111 billion. Capital gains tax
              adds &pound;60 billion. Dividend tax adds another &pound;42
              billion.
            </p>
            <p>
              And this is before counting the indirect fiscal benefits: reduced
              welfare dependency as citizens retire wealthy, increased consumer
              spending from retirees drawing down, higher corporation tax from
              companies funded by citizen capital, and the economic multiplier
              effect of &pound;20 trillion in productive citizen-owned assets.
            </p>
          </BodyText>

          <PullQuote>
            The government invests &pound;27 billion a year. Within a
            generation, it gets back &pound;213 billion a year in tax
            revenue. That&rsquo;s not a cost. That&rsquo;s the most
            productive investment the Treasury has ever made.
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
              &mdash; goes toward her ownership stake. The government matches
              it. That&rsquo;s &pound;2,760 a year building equity, half from
              her spending, half from the state. She doesn&rsquo;t feel it
              leaving. It&rsquo;s not a sacrifice. It&rsquo;s a redirect.
            </p>
          </BodyText>

          <PortfolioChart />

          <div className="mt-14">
            <h3 className="font-serif text-2xl md:text-3xl text-text mb-6">
              The Renter Who Becomes an Owner
            </h3>
            <BodyText>
              <p>
                She pays &pound;1,200 a month in rent. Three percent builds
                housing equity &mdash; automatically, invisibly, month after
                month. Not enough to feel. But enough, over time, to matter.
              </p>
              <p>
                And here&rsquo;s what most people miss: she doesn&rsquo;t just
                accumulate units. She owns the equity. As the housing assets in
                her portfolio appreciate &mdash; and over a lifetime, they
                will &mdash; she benefits from that growth too. The same force
                that has been working against her, rising property values, is
                now working for her. Her stake grows from contributions and
                from capital appreciation. Both.
              </p>
            </BodyText>
          </div>

          <HousingChart />

          <BodyText>
            <p>
              By retirement at sixty-eight, her housing stake alone is worth
              over &pound;338,000 &mdash; generating more than &pound;10,000 a
              year in dividend income. The underlying equity is worth far more
              than the sum of her contributions, because the assets have
              appreciated too. She
              didn&rsquo;t save for a deposit. She didn&rsquo;t need to. The
              system built her a stake from the rent she was already paying.
              The equity is hers. The growth is hers.
            </p>
          </BodyText>

          <PullQuote>
            She&rsquo;s no longer just a tenant. She&rsquo;s a participant. A
            stakeholder. Someone the system is working for, not just extracting
            from.
          </PullQuote>

          <div className="mt-14">
            <h3 className="font-serif text-2xl md:text-3xl text-text mb-6">
              Leveraging Into Home Ownership
            </h3>
            <BodyText>
              <p>
                Here&rsquo;s where the housing stake becomes more than just
                equity on a screen. After ten years of participation, a citizen
                might hold &pound;50,000 or more in housing equity. That stake
                is real, liquid, regulated &mdash; and it can be used as
                collateral.
              </p>
              <p>
                A lender looks at a mortgage application and sees a verified,
                growing asset backed by diversified social housing stock. It
                counts. Not as a gift from parents. Not as a lucky inheritance.
                As something the applicant built themselves, three pence at a
                time, from the rent they were already paying.
              </p>
              <p>
                The citizen pledges part of their housing equity as a deposit
                &mdash; or uses it to meet affordability thresholds that
                otherwise locked them out. The participation portfolio doesn&rsquo;t
                replace the mortgage. It unlocks it. The same asset that earns
                dividends and appreciates in value also opens the door to private
                home ownership.
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
                </p>
                <p>
                  <strong>2. Leverage.</strong> After a qualifying period,
                  citizens can pledge their housing equity as a deposit or
                  collateral for a private mortgage. Lenders recognise it
                  as a regulated, appreciating asset.
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
                it possible. Every month of rent quietly builds the deposit
                that the current system demands but never helps you save.
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
              The housing allocation in the Participation Economy isn&rsquo;t
              an abstraction. It builds things. Real homes. In real places.
              For real people.
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
              number="&pound;18B"
              description="Annual citizen capital flowing into housing (3% of &pound;600B housing spend)"
            />
          </div>

          <BodyText>
            <p>
              At an average build cost of &pound;180,000 per home, that&rsquo;s
              the equivalent of 100,000 new social homes every year. Not
              government housing. Not charity housing. Citizen housing &mdash;
              owned collectively by the people whose spending created it.
            </p>
            <p>
              This is social housing in the truest sense. The tenants are
              citizens. The owners are citizens. The dividends flow back to
              citizens. It&rsquo;s peer-to-peer housing &mdash; the people who
              need homes are also the people who fund them. The renter in
              Manchester is part-owner of the block in Birmingham. The young
              family in Leeds holds equity in the development in Bristol. The
              whole country is invested in the whole country&rsquo;s housing.
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
                flow back to the citizen owners. The assets appreciate in their
                portfolios. The incentives are aligned: better housing stock
                means better returns for everyone.
              </p>
            </div>
          </div>

          <BodyText>
            <p>
              Over one generation, this mechanism doesn&rsquo;t just build
              social housing. It builds a national housing asset base worth
              hundreds of billions of pounds, owned not by a developer or a
              hedge fund or a foreign sovereign wealth fund, but by the
              citizens of the country it serves.
            </p>
            <p>
              The rents paid by tenants become dividends paid to citizen
              owners. The appreciation of the housing stock builds citizen
              wealth. And the homes themselves &mdash; warm, decent,
              affordable homes &mdash; exist because the people who needed
              them were also the people who funded them.
            </p>
          </BodyText>

          <div className="mt-14">
            <h3 className="font-serif text-2xl md:text-3xl text-text mb-6">
              The 35-Year Cycle
            </h3>
            <BodyText>
              <p>
                Housing doesn&rsquo;t last forever. After thirty-five years,
                the original stock starts to age. Maintenance costs rise.
                Standards evolve. What was a good home in 2030 may not meet the
                expectations of 2065. So the model accounts for this.
              </p>
              <p>
                After thirty-five years, the ETF begins selling off older
                housing stock. These sales serve two purposes. First, they
                generate liquidity &mdash; the cash that funds ETF withdrawals
                for citizens who are drawing down their portfolios in
                retirement. The sell-offs ensure there is always real money
                behind the equity, not just paper value.
              </p>
              <p>
                Second, the proceeds fund the construction of new housing. The
                cycle renews itself: old stock is sold, new stock is built to
                modern standards. Better insulation. Better energy efficiency.
                Better design. The housing portfolio doesn&rsquo;t degrade over
                time &mdash; it improves. Every generation of citizen housing
                is better than the last.
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
                  value. Sales fund ETF withdrawals for retiring citizens and
                  finance the next generation of homes.
                </p>
                <p>
                  <strong>Continuous:</strong> New capital from current
                  workers&rsquo; spending funds fresh construction every year.
                  The pipeline never stops.
                </p>
              </div>
            </div>

            <BodyText>
              <p>
                This is what makes citizen housing truly sustainable. It
                isn&rsquo;t a one-off building programme that decays into
                neglect. It&rsquo;s a permanent, self-renewing machine. The
                people fund it. The people own it. The people benefit from it.
                And every thirty-five years, the housing stock gets better
                &mdash; not worse.
              </p>
            </BodyText>
          </div>

          <PullQuote>
            One hundred thousand new homes a year. Owned by the public. Built
            by the public&rsquo;s own capital. Renewed every generation to a
            higher standard. That&rsquo;s not a housing policy. That&rsquo;s a
            housing revolution.
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
              &mdash; arrives at sixty-eight with everything they would have had
              before, plus a participation portfolio worth over &pound;2.5
              million and housing equity worth &pound;339,000. Total wealth:
              over &pound;3.4 million.
            </p>
          </BodyText>

          <ComparisonChart />

          <BodyText>
            <p>
              Nothing about this person&rsquo;s day-to-day life changed. They
              didn&rsquo;t take on more risk. They didn&rsquo;t sacrifice
              weekends learning to trade stocks. They didn&rsquo;t inherit
              anything. They just lived &mdash; and the system worked with them
              instead of around them.
            </p>
          </BodyText>

          <PullQuote>
            Same person. Same job. Same spending. Five times the wealth at
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
              number="&pound;54B"
              description="Annual citizen capital (3% + gov match)"
              delay={0.15}
            />
            <StatCallout
              number="&pound;20T"
              description="Net citizen asset base after one generation"
              delay={0.3}
            />
          </div>

          <BodyText>
            <p>
              But the real model isn&rsquo;t a straight line up. People don&rsquo;t
              just accumulate forever. They retire. They draw down. They live on
              what they&rsquo;ve built. And eventually, they die. So the national
              model has to account for all of it &mdash; the full lifecycle of
              participation.
            </p>
          </BodyText>

          <NationalChart />

          <BodyText>
            <p>
              These figures account for realistic behaviour. Citizens accumulate
              during their working years. In retirement, they draw down roughly
              five percent of their portfolio each year &mdash; this is their
              pension, their income, their reward for a lifetime of
              participation. The assets remaining continue to grow, more
              conservatively, generating returns even as they provide income.
            </p>
            <p>
              Some will hold. Some will draw more. Some will pass their stake
              to children while still alive. The model assumes a steady five
              percent drawdown, which gives retirees an income of roughly
              &pound;47,000 per year on average &mdash; funded not by the state,
              not by an employer, but by a lifetime of compound participation.
              That is what replaces the pension crisis.
            </p>
          </BodyText>

          <PullQuote>
            At death, thirty percent of the remaining portfolio returns to
            the state &mdash; a participation tax. The rest passes to heirs.
            One mechanism. &pound;111 billion per year in new government revenue
            by the fiftieth year.
          </PullQuote>

          <BodyText>
            <p>
              Twenty trillion pounds of productive assets &mdash; net of every
              drawdown, every death, every inheritance distribution &mdash;
              built over one generation, owned by the citizens of the country
              that created them. And the system funds itself: the death tax
              alone recovers more in a single year than the government&rsquo;s
              annual match costs to run the scheme.
            </p>
            <p>
              When people own things, they care about them differently. They
              vote differently. They feel differently &mdash; about the country,
              about capitalism, about each other.
            </p>
            <p>
              The dysfunction in democratic politics across the developed world
              has many causes. But one of them &mdash; perhaps the most
              structural one &mdash; is that large numbers of people have
              concluded the system isn&rsquo;t working for them and never will.
            </p>
            <p>
              The Participation Economy doesn&rsquo;t fix that with a speech. It
              fixes it with a fact. A number on a statement. A stake that&rsquo;s
              real.
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
              If citizen ownership funds reached &pound;20 trillion over
              one generation &mdash; and a 5% venture allocation was maintained
              &mdash; that creates a &pound;1 trillion pool of startup
              capital. Not venture capital
              owned by a handful of firms in Mayfair. Citizen capital. Owned by
              the people who are also the consumers of the technology being
              built.
            </p>
          </BodyText>

          <div className="my-10">
            <StatCallout
              number="&pound;1T"
              description="Citizen-owned startup capital at scale"
            />
          </div>

          <PullQuote>
            This is what it means to have a stake in the future. Not a metaphor.
            An actual stake.
          </PullQuote>

          <BodyText>
            <p>
              Citizens fund the next generation of British companies. They
              benefit from their growth &mdash; not just as users and consumers,
              but as owners. The upside of innovation flows back to the people
              who made it possible.
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
              I don&rsquo;t want to give them a fantasy. I don&rsquo;t think
              that&rsquo;s what people want, anyway. They&rsquo;re not naive.
              They&rsquo;ve heard promises before.
            </p>
            <p>
              What I want to give them is something more valuable than a
              promise. A direction.
            </p>
            <p>
              Because direction matters &mdash; enormously &mdash; when
              you&rsquo;ve spent years feeling like the tide is against you. Not
              because every day suddenly gets easier, but because the logic of
              your situation has changed. The system is moving with you now, not
              around you.
            </p>
            <p>
              The person on the bus goes to work tomorrow. Buys breakfast. Takes
              the tube. Does their job. Pays their bills. All the same things
              they did yesterday.
            </p>
            <p>
              But three pence of every pound they spend is doing something
              different now. It&rsquo;s building them a stake. Silently.
              Persistently. In the sector they&rsquo;re living in, spending in,
              contributing to.
            </p>
            <p>
              In ten years, it&rsquo;s small but real. In twenty, it&rsquo;s
              meaningful. By retirement, it&rsquo;s transformative.
            </p>
          </BodyText>

          <PullQuote centered large>
            The economy works best when the people who participate in it feel
            like they own a piece of it. Because they should.
          </PullQuote>

          <BodyText>
            <p>
              That&rsquo;s the Participation Economy. Not a revolution. Not a
              redistribution. A reconnection.
            </p>
          </BodyText>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-sans text-sm font-semibold uppercase tracking-wider rounded hover:bg-green-800 transition-colors no-print"
            >
              Download the White Paper
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "The Participation Economy",
                    text: "A framework for rebuilding capital ownership in modern market societies.",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center px-8 py-3.5 border border-rule text-muted font-sans text-sm font-semibold uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-colors no-print"
            >
              Share this idea
            </button>
          </div>
        </AnimatedSection>
      </div>

      <CommentSection />

      <Footer />
    </main>
  );
}
