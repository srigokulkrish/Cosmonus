import Link from 'next/link'
import StripedPlaceholder from '@/components/StripedPlaceholder'
import DiagramCanvas from '@/components/DiagramCanvas'

const STATS = [
  { value: '11', label: 'Violation and incident classes in the first version' },
  { value: '4', label: 'Layers — perception, spatial, rules, reasoning' },
  { value: 'Edge', label: 'Detection runs at the camera, not in the cloud' },
  { value: 'Every', label: 'Event keeps the clip, track, and rule behind it' },
]

const DETECTIONS = [
  { title: 'Red-signal crossing', body: 'A vehicle crosses the stop line and enters the junction while its signal is red.' },
  { title: 'Stop-line and lane-line crossing', body: 'A vehicle rolls past the stop line on red, or crosses a solid lane marking.' },
  { title: 'Wrong-way driving', body: 'A track holds a heading against its lane’s direction for longer than a moment.' },
  { title: 'Illegal U-turn', body: 'A heading reverses inside a junction where turning back is prohibited.' },
  { title: 'Restricted region entry', body: 'A vehicle of the wrong class enters a bus lane, a no-entry zone, or a closed stretch.' },
  { title: 'Prohibited stopping', body: 'A vehicle stays still in a no-stopping zone past the allowed time.' },
  { title: 'Jaywalking', body: 'A pedestrian crosses the roadway outside a crosswalk, or inside one during a don’t-walk phase.' },
  { title: 'Dangerous lane change', body: 'A lane change with high lateral speed, across a solid line, or into a gap too small to be safe.' },
  { title: 'Collision', body: 'Two tracks converge to contact, with a sharp deceleration or a broken trajectory, then stop.' },
  { title: 'Hit-and-run', body: 'A collision where one participant leaves the scene while the other stays, with the plate recorded.' },
  { title: 'Rash or abnormal driving', body: 'A trajectory whose speed, acceleration, and lane behaviour falls outside the normal pattern for that camera.' },
]

const LAYERS = [
  { title: 'Perception', body: 'Detects vehicles, pedestrians, two-wheelers, and signal heads in every frame and gives each one a stable identity across frames. Reads number plates on vehicle crops. Runs on a small computer beside the camera.' },
  { title: 'Spatial', body: 'Calibrates each camera to the ground plane so every track lives in metres, with real speed and heading. Lanes, stop lines, crosswalks, and restricted zones are drawn once per camera as geometry the rules can test against.' },
  { title: 'Rules', body: 'Each violation is an explicit condition over a track and the scene geometry: this heading against that lane, this footprint inside that zone, this crossing during that signal phase. Deterministic, so every flag can be explained.' },
  { title: 'Reasoning', body: 'A foundation model sees only flagged events, never the raw stream. It reviews the clip and the evidence, confirms or rejects the flag, rates severity, and writes the incident narrative a human will read.' },
]

const STACK = [
  { layer: 'Perception', tech: 'Object detection and multi-object tracking, fine-tuned on live footage' },
  { layer: 'Identity', tech: 'Number-plate recognition on vehicle crops' },
  { layer: 'Spatial', tech: 'Per-camera ground-plane calibration; zones and lines as geometry' },
  { layer: 'Rules', tech: 'Deterministic event engine over world-coordinate tracks' },
  { layer: 'Reasoning', tech: 'Claude (Anthropic) — event review, severity, incident narrative' },
  { layer: 'Edge', tech: 'On-device inference; only events and clips leave the camera' },
]

const SCREENS = [
  { label: 'Traffic Intelligence / Live Junction', title: 'Live junction view', desc: 'Every track with its heading and speed, zones and stop lines overlaid.' },
  { label: 'Traffic Intelligence / Event Evidence', title: 'Event evidence', desc: 'The clip, the track, the rule that fired, and the signal state at that moment.' },
  { label: 'Traffic Intelligence / Review Queue', title: 'Review queue', desc: 'Where a person confirms or rejects, and every decision feeds back into the system.' },
  { label: 'Traffic Intelligence / Camera Setup', title: 'Camera setup', desc: 'Calibration and zone drawing, done once per camera.' },
]

export const metadata = {
  title: 'Cosmonus Traffic Intelligence — Roads That Notice',
  description: 'Cosmonus Traffic Intelligence turns traffic camera feeds into accountable events: red-light and stop-line violations, wrong-way driving, collisions, hit-and-run, and abnormal driving, each with its evidence attached.',
  alternates: { canonical: '/products/traffic-intelligence' },
}

function DetectionRow({ d, n }) {
  return (
    <div className="hiw-step">
      <span className="hiw-step-n mono">{String(n).padStart(2, '0')}</span>
      <span className="hiw-step-body">
        <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>{d.title}</strong> — {d.body}
      </span>
    </div>
  )
}

export default function TrafficIntelligencePage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="feature">
            <div className="feature__content">
              <div className="eyebrow feature__eyebrow">In development · first version</div>
              <h1 className="display" style={{ fontSize: 'clamp(2rem, 4.4vw, 3.25rem)', marginBottom: '0.75rem' }}>Cosmonus Traffic Intelligence</h1>
              <p className="body-lg feature__body">
                Roads that notice. Most traffic cameras record everything and understand nothing —
                the footage exists, but a violation is only found if someone goes looking. Cosmonus
                Traffic Intelligence watches the feed as it happens, turns tracked movement into
                events, and attaches the evidence to every one, so a red-light run, a wrong-way
                driver, or a hit-and-run becomes a record within seconds, not a search days later.
              </p>
              <div className="hero__actions">
                <Link href="/contact" className="btn btn--primary">
                  <span>Talk to us about a deployment</span>
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </Link>
                <Link href="/products/stayonmap" className="btn btn--ghost">See StayOnMap, our first product</Link>
              </div>
            </div>
            <div className="feature__visual">
              <DiagramCanvas
                variant="intersection"
                ratio="4/3"
                label="Schematic junction seen from above, tracked vehicles moving through lanes, one wrong-way vehicle highlighted in violet with its track number and heading"
                caption="Every vehicle is a track with a heading and a speed in real metres. When one contradicts its lane, the rule fires, and the event carries the track, the clip, and the reason with it."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="stats-row" data-reveal>
            {STATS.map((s) => (
              <div key={s.label} className="stats-item">
                <span className="stats-item__value mono">{s.value}</span>
                <span className="stats-item__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">01</span> The problem</div>
            <h2 className="section-title">A city has thousands of cameras and almost no one watching.</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-col problem-col--dim" data-reveal>
              <div className="problem-col__kicker eyebrow">What a traffic camera does today</div>
              <h3 className="problem-col__title">Records, and waits to be asked</h3>
              <ul>
                <li>Stores footage that is reviewed only after a complaint or a crash</li>
                <li>Depends on an operator noticing, across dozens of screens at once</li>
                <li>Leaves hit-and-run to witnesses and luck</li>
                <li>Treats a violation as a still frame with no context and no explanation</li>
              </ul>
            </div>
            <div className="problem-grid__rule" />
            <div className="problem-col" data-reveal>
              <div className="problem-col__kicker eyebrow">What Traffic Intelligence does instead</div>
              <h3 className="problem-col__title">Watches, reasons, and keeps the evidence</h3>
              <ul>
                <li>Tracks every vehicle and pedestrian in real-world coordinates, continuously</li>
                <li>Tests each track against explicit rules the moment it moves</li>
                <li>Links a collision to the vehicle that left, with the plate already read</li>
                <li>Files every event with its clip, its track, and the rule that fired</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">02</span> What it detects</div>
            <h2 className="section-title">Eleven things the first version is built to see.</h2>
            <p className="body">
              Each one is defined as a condition a system can test, not a label a model guesses.
              The geometric ones ship first. Collision, hit-and-run, and abnormal driving learn
              from reviewed cases as they accumulate.
            </p>
          </div>
          <div className="hiw-grid" data-reveal>
            <div>
              {DETECTIONS.slice(0, 6).map((d, i) => <DetectionRow key={d.title} d={d} n={i + 1} />)}
            </div>
            <div>
              {DETECTIONS.slice(6).map((d, i) => <DetectionRow key={d.title} d={d} n={i + 7} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">03</span> How it works</div>
            <h2 className="section-title">Four layers. The model is the last one, not the first.</h2>
            <p className="body">
              Almost none of this is a model problem. It is geometry over tracked objects. A
              foundation model earns its place at the end, on the cases that need judgment.
            </p>
          </div>
          <div className="principles" data-reveal>
            {LAYERS.map((l, i) => (
              <div key={l.title} className="principle">
                <span className="principle__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle__title">{l.title}</h3>
                <p className="principle__body">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">04</span> Product screens</div>
            <h2 className="section-title">Live view. Event evidence. Review queue.</h2>
          </div>
          <div className="proof-grid" data-reveal>
            {SCREENS.map((item) => (
              <div key={item.title} className="proof-item">
                <StripedPlaceholder label={item.label} className="proof-item__frame" />
                <p className="proof-item__caption"><strong>{item.title}</strong> — {item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">05</span> Technology</div>
            <h2 className="section-title">Built to run beside the camera.</h2>
          </div>
          <div className="stack-table" data-reveal>
            {STACK.map((s) => (
              <div key={s.layer} className="stack-row">
                <span className="stack-row__layer mono">{s.layer}</span>
                <span className="stack-row__tech">{s.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
