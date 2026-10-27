import { useState } from 'react'

const liveRooms = [
  { title: 'Daily Venting', count: 842, color: '#ff4fb8' },
  { title: 'Relationship Drama', count: '1.7k', color: '#a84bea' },
  { title: 'Sapphic Safe Space', count: 693, color: '#398bff' },
  { title: 'Late Night Thoughts', count: 428, color: '#e744ca' },
]

const quickActions = [
  { icon: '✦', title: 'Daily Affirmation', color: 'from-[#ff68bc] to-[#fb3d96]' },
  { icon: '♡', title: 'Mood Check-in', color: 'from-[#b967ef] to-[#7d52e8]' },
  { icon: '◌', title: 'Anonymous Confessions', color: 'from-[#50b8ff] to-[#3878ef]' },
  { icon: '?', title: 'Ask for Advice', color: 'from-[#ff77cf] to-[#aa48e8]' },
]

const activeRooms = [
  { icon: '♡', title: 'Boy Talk', text: 'Crushes, red flags, & relationship drama.', count: '2.4k online', gradient: 'from-[#ff4fa5] to-[#ff86cb]' },
  { icon: '♥', title: 'Girls & Girls Only', text: 'Our safe space for sapphic, bi, and queer girls.', count: '1.1k online', gradient: 'from-[#8758ec] via-[#dc55ce] to-[#54a9ff]' },
  { icon: '?', title: 'Unfiltered Advice', text: 'Big sister energy. Ask anything, no judgment.', count: '936 online', gradient: 'from-[#a34de6] to-[#714ff1]' },
  { icon: '✦', title: 'Trend Spotting', text: 'Y2K fashion, makeup routines, & current aesthetics.', count: '1.8k online', gradient: 'from-[#3789ff] to-[#c74fe2]' },
]

const posts = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1720609602393-207f35b618c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800', title: 'What’s in my bag: pink edition', tag: 'LIFESTYLE', likes: '2.8k', comments: 184, tall: true },
  { type: 'quote', title: '“You were never too much. They were simply never enough.”', tag: 'DAILY REMINDER', likes: '4.1k', comments: 302 },
  { type: 'image', src: 'https://images.unsplash.com/photo-1618436458118-7aafd8f70fcf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800', title: 'Accessories that do all the talking', tag: 'TREND REPORT', likes: '1.6k', comments: 97 },
  { type: 'image', src: '/girls-world-silver.jpg', title: 'OOTD: silver girl energy', tag: 'OUTFIT OF THE DAY', likes: '3.7k', comments: 228, tall: true },
  { type: 'image', src: 'https://images.unsplash.com/photo-1622937309508-db3273465d8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800', title: 'Current mood: soft but unstoppable', tag: 'MOODBOARD', likes: '2.2k', comments: 146 },
  { type: 'image', src: 'https://images.unsplash.com/photo-1717154205778-dabb3ace2c9b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800', title: 'Sunday reset essentials', tag: 'SELF CARE', likes: '1.9k', comments: 112 },
]

const besties = [
  ['Maya', '#ff5dad'], ['Jules', '#8b5cf6'], ['Nia', '#3b9cff'], ['Ari', '#e34acb'], ['Zoe', '#724ee8'], ['Sam', '#ff78bb'],
]

function ChatIcon() {
  return <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-[2]" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H6l-4 2 1.4-4.2A9 9 0 1 1 21 12Z" /></svg>
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return <svg viewBox="0 0 24 24" className={`size-4 stroke-current stroke-[2] ${filled ? 'fill-current' : 'fill-none'}`} aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></svg>
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [liked, setLiked] = useState<number[]>([])

  const toggleLike = (index: number) => setLiked((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index])

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8ff] text-[#261431]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-[#fff8ff]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
          <a href="#" className="logo text-xl xl:text-2xl">It&apos;S A GiRl&apos;S WoRlD!</a>
          <div className="hidden items-center gap-6 text-sm font-extrabold lg:flex">
            <a href="#rooms" className="nav-link">Chat rooms</a>
            <a href="#advice" className="nav-link">Advice</a>
            <a href="#trends" className="nav-link">Trends</a>
            <a href="#boy-talk" className="nav-link">Boy Talk</a>
            <a href="#girls-only" className="nav-link text-[#d62591]">Girls & Girls Only</a>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button className="soft-button">Log in</button>
            <button className="bubble-button">Join us <span>♥</span></button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="grid size-10 place-items-center rounded-xl bg-[#f3ddff] font-black text-[#8a2db8] lg:hidden">☰</button>
        </nav>
        {mobileOpen && <div className="grid gap-4 border-t border-[#eeddf5] bg-white/95 px-6 py-5 font-bold lg:hidden">{['Chat rooms', 'Advice', 'Trends', 'Boy Talk', 'Girls & Girls Only'].map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMobileOpen(false)}>{item}</a>)}</div>}
      </header>

      <section className="dashboard-gradient relative isolate pt-[76px]">
        <div className="absolute left-[-8%] top-32 size-96 rounded-full bg-[#ff4fb8]/20 blur-3xl" />
        <div className="absolute right-[-4%] top-24 size-96 rounded-full bg-[#3c91ff]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-12 pt-14 lg:grid-cols-[1.12fr_.88fr] lg:px-8 lg:pb-16 lg:pt-16">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-xl border border-[#ff98d2] bg-white/65 px-3 py-2 text-[11px] font-black uppercase tracking-[.14em] text-[#d91b87] shadow-sm backdrop-blur">
              <span className="size-2 animate-pulse rounded-full bg-[#ff3c9e]" /> The group chat is always open
            </div>
            <h1 className="font-black leading-[.88] tracking-[-.06em]">
              <span className="block text-5xl sm:text-7xl xl:text-[88px]">GIRL TALK,</span>
              <span className="gradient-word block text-6xl sm:text-8xl xl:text-[102px]">UNFILTERED.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-[#67546f] sm:text-lg">Your online sleepover for real advice, current obsessions, relationship tea, and bestie-level support.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="hero-button">Enter the girl world <span>✦</span></button>
              <button className="outline-button">Find your room →</button>
            </div>

            <div className="mt-10">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-black uppercase tracking-[.14em]">Live chat rooms</h2>
                <span className="text-xs font-bold text-[#8b748f]">Swipe to explore →</span>
              </div>
              <div className="no-scrollbar flex gap-3 overflow-x-auto pb-3">
                {liveRooms.map((room) => (
                  <button key={room.title} className="live-card">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#67716a]"><span className="size-2 rounded-full bg-[#39d77d] shadow-[0_0_8px_#39d77d]" /> Active now</div>
                    <p className="mt-3 whitespace-nowrap text-left text-sm font-black">{room.title}</p>
                    <p className="mt-1 text-left text-xs font-semibold text-[#8a758f]">{room.count} girls inside</p>
                    <span style={{ backgroundColor: room.color }} className="absolute right-3 top-3 grid size-7 place-items-center rounded-lg text-xs text-white">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:translate-x-5">
            <div className="absolute -inset-3 rotate-3 rounded-[38px] bg-gradient-to-br from-[#ff4fb8] via-[#9b5de5] to-[#3a86ff] opacity-50 blur-xl" />
            <div className="relative rotate-[1.5deg] overflow-hidden rounded-[32px] border-[5px] border-white bg-white p-2 shadow-[0_30px_80px_rgba(102,35,139,.25)] transition duration-500 hover:rotate-0">
              <img src="/girls-world-pink.jpg" alt="Stylish illustrated friends in a pink girl world" className="aspect-square w-full rounded-[23px] object-cover" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/70 bg-white/82 p-3.5 shadow-lg backdrop-blur-md">
                <div><p className="text-[9px] font-black uppercase tracking-[.18em] text-[#df238f]">Trending now</p><p className="mt-1 text-xs font-black sm:text-sm">What&apos;s your main character song?</p></div>
                <button className="grid size-10 place-items-center rounded-xl bg-[#ffdef1] text-[#df238f]"><HeartIcon /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee border-y-2 border-[#57156e] bg-gradient-to-r from-[#ff4bab] via-[#c146d5] to-[#548af7] py-3 text-xs font-black uppercase tracking-[.18em] text-white"><div>NO GATEKEEPING ✦ REAL TALK ONLY ✦ HYPE GIRLS HYPE GIRLS ✦ SAFE SPACE, BIG ENERGY ✦ NO GATEKEEPING ✦ REAL TALK ONLY ✦ HYPE GIRLS HYPE GIRLS ✦</div></div>

      <section className="flow-gradient px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8">
            <p className="kicker">Start here, bestie</p>
            <h2 className="section-title">The Daily Vibe</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickActions.map((action) => (
              <button key={action.title} className="quick-card group">
                <span className={`grid size-14 place-items-center rounded-full bg-gradient-to-br ${action.color} text-2xl font-black text-white shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:rotate-6`}>{action.icon}</span>
                <span className="text-sm font-black sm:text-base">{action.title}</span>
              </button>
            ))}
          </div>

          <div id="rooms" className="mt-24 grid gap-8 xl:grid-cols-[1fr_320px]">
            <div>
              <div className="mb-8 flex items-end justify-between gap-4">
                <div><p className="kicker">Everybody&apos;s talking</p><h2 className="section-title">Active Talk Rooms</h2></div>
                <button className="hidden text-sm font-black text-[#a42e9c] sm:block">View all rooms →</button>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {activeRooms.map((room, index) => (
                  <article id={index === 0 ? 'boy-talk' : index === 1 ? 'girls-only' : index === 2 ? 'advice' : 'trends'} key={room.title} className={`room-gradient bg-gradient-to-br ${room.gradient}`}>
                    <div className="room-inner">
                      <div className="flex items-start justify-between gap-4">
                        <span className={`grid size-12 place-items-center rounded-xl bg-gradient-to-br ${room.gradient} text-2xl font-black text-white shadow-lg ${index === 2 ? 'drop-shadow-[0_0_8px_#b14fff]' : ''}`}>{room.icon}</span>
                        <span className="online-pill"><i />{room.count}</span>
                      </div>
                      <h3 className="mt-6 text-xl font-black">{room.title}</h3>
                      <p className="mt-2 min-h-12 text-sm leading-6 text-[#76637c]">{room.text}</p>
                      <button className="mt-6 flex w-full items-center justify-between rounded-xl bg-[#f8effb] px-4 py-3 text-sm font-black text-[#932e9c] transition hover:bg-[#902ea7] hover:text-white"><span>Enter room</span><span>→</span></button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="space-y-5 xl:pt-[82px]">
              <div className="glass-panel">
                <div className="flex items-center justify-between"><h3 className="font-black">Online Besties</h3><span className="text-xs font-bold text-[#34b36c]">284 online</span></div>
                <div className="mt-6 grid grid-cols-3 gap-5">
                  {besties.map(([name, color]) => (
                    <button key={name} className="group text-center">
                      <span style={{ background: color }} className="relative mx-auto grid size-12 place-items-center rounded-full border-2 border-white font-black text-white shadow-md transition group-hover:scale-110">{name[0]}<i className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-[#38d778]" /></span>
                      <span className="mt-2 block text-[11px] font-bold">{name}</span>
                    </button>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-xl border border-[#ead4f1] py-2.5 text-xs font-black text-[#9a349e]">Find more besties</button>
              </div>
              <div className="overflow-hidden rounded-2xl bg-[#24132f] p-6 text-white shadow-xl">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#ff6fc4]">Topic of the hour</p>
                <h3 className="mt-3 text-xl font-black leading-tight">Are situationships officially over?</h3>
                <p className="mt-3 text-xs leading-5 text-white/60">4,821 girls have something to say.</p>
                <button className="mt-5 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-[#852595]">Join the debate →</button>
              </div>
            </aside>
          </div>

          <section id="trends" className="mt-24">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><p className="kicker">Inspiration & hype</p><h2 className="section-title">Community Moodboards</h2><p className="mt-3 text-sm font-medium text-[#796580]">Trending moodboards, style tips, and tiny sparks of joy from the community.</p></div>
              <div className="flex gap-2"><button className="filter-active">For you</button><button className="filter-button">Style</button><button className="filter-button">Beauty</button></div>
            </div>
            <div className="masonry">
              {posts.map((post, index) => (
                <article key={post.title} className="masonry-card">
                  {post.type === 'quote' ? (
                    <div className="quote-card"><span className="text-3xl">“</span><p className="mt-3 text-2xl font-black leading-tight">{post.title.replaceAll('“','').replaceAll('”','')}</p><span className="mt-8 block text-xs font-black uppercase tracking-widest">Save this for later ✦</span></div>
                  ) : (
                    <img src={post.src} alt={post.title} className={`w-full object-cover ${post.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} />
                  )}
                  <div className="p-4">
                    <span className="text-[9px] font-black tracking-[.16em] text-[#d02b8e]">{post.tag}</span>
                    {post.type !== 'quote' && <h3 className="mt-1.5 font-black">{post.title}</h3>}
                    <div className="mt-4 flex items-center gap-4 border-t border-[#f0e1f3] pt-3 text-xs font-bold text-[#79647f]">
                      <button onClick={() => toggleLike(index)} className={`flex items-center gap-1.5 transition ${liked.includes(index) ? 'text-[#eb2e93]' : 'hover:text-[#eb2e93]'}`} aria-label="Like post"><HeartIcon filled={liked.includes(index)} />{post.likes}</button>
                      <span className="flex items-center gap-1.5"><ChatIcon />{post.comments}</span>
                      <button className="ml-auto text-lg">•••</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <footer className="border-t border-[#ead7ef] bg-white/80 px-5 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 sm:flex-row">
          <a href="#" className="logo text-xl">It&apos;S A GiRl&apos;S WoRlD!</a>
          <p className="text-xs font-semibold text-[#8d7b94]">© 2025 Girl&apos;s World. Be kind. Stay iconic.</p>
          <div className="flex gap-4 font-black text-[#b13492]"><button>IG</button><button>TT</button><button>PIN</button></div>
        </div>
      </footer>
    </main>
  )
}
