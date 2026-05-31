// IntroSocial UI kit — sample data for the interactive demo.
window.SEED = {
  me: { name: 'Arham Khan', userId: 'me' },
  groups: [
    { _id: 'g1', name: 'Hostel 7 Crew', description: 'Late-night chai runs, exam panic, and everything in between.', inviteCode: 'H7CREW', members: new Array(12).fill(0), cover: 'linear-gradient(135deg,#1c2d5a 0%,#1877f2 50%,#0d3b8e 100%)' },
    { _id: 'g2', name: 'Karachi Trip 2026', description: 'Planning the December beach trip. RSVP for the van.', inviteCode: 'KHI26', members: new Array(8).fill(0), cover: 'linear-gradient(135deg,#0d3b8e 0%,#1877f2 60%,#1c2d5a 100%)' },
    { _id: 'g3', name: 'CS Final Year', description: 'FYP updates, deadlines, and shared notes.', inviteCode: 'CSFY24', members: new Array(21).fill(0), cover: 'linear-gradient(135deg,#1877f2 0%,#0d47a1 100%)' },
  ],
  moments: [
    { _id: 'm1', userId: { name: 'Sara Malik' }, caption: 'Sunset from the rooftop tonight 🌇 Worth every flight of stairs.', image: 'linear-gradient(160deg,#f0883e 0%,#c0392b 55%,#5b1e3b 100%)', createdAt: Date.now() - 22 * 60000, likes: ['u2', 'u3', 'me'], comments: [{ userId: { name: 'Bilal Ahmed' }, text: 'Unreal colours 🔥' }, { userId: { name: 'Sara Malik' }, text: 'Come up next time!' }] },
    { _id: 'm2', userId: { name: 'Bilal Ahmed' }, caption: 'Team made it to the finals. Proud of this crew 💪', image: 'linear-gradient(160deg,#1877f2 0%,#0d47a1 100%)', createdAt: Date.now() - 3 * 3600000, likes: ['u1', 'u4'], comments: [] },
    { _id: 'm3', userId: { name: 'Hina Raza' }, caption: 'Found the best biryani spot near campus. Group trip soon?', image: null, createdAt: Date.now() - 26 * 3600000, likes: ['me'], comments: [{ userId: { name: 'Arham Khan' }, text: 'Im in. Friday?' }] },
  ],
  messages: [
    { _id: 'c1', userId: { name: 'Sara Malik' }, text: 'Are we still on for the trip planning call tonight?', createdAt: Date.now() - 40 * 60000 },
    { _id: 'c2', userId: { name: 'me' }, text: 'Yes! 9pm works for me. I made a checklist.', createdAt: Date.now() - 38 * 60000 },
    { _id: 'c3', userId: { name: 'Bilal Ahmed' }, text: 'Can someone book the van before prices go up?', createdAt: Date.now() - 30 * 60000, replyCount: 2 },
    { _id: 'c4', userId: { name: 'Hina Raza' }, text: 'On it. Need a headcount first though 🙋', createdAt: Date.now() - 12 * 60000, replyTo: { userId: { name: 'Bilal Ahmed' }, text: 'Can someone book the van before prices go up?' } },
  ],
  events: [
    { _id: 'e1', title: 'Karachi Trip Planning Call', description: 'Finalize van, budget, and the itinerary.', dateTime: Date.now() + 6 * 3600000, location: 'Google Meet', visibility: 'private', createdBy: { name: 'Sara Malik' }, fromThread: true },
    { _id: 'e2', title: 'Hostel 7 Farewell Dinner', description: 'Last one before semester ends. Everyone invited.', dateTime: Date.now() + 3 * 86400000, location: 'Student Biryani, Gulshan', visibility: 'public', createdBy: { name: 'Arham Khan' }, fromThread: false },
  ],
};
