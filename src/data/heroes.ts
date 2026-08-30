export const heroNames = [
  "Ana",
  "Anran",
  "Ashe",
  "Baptiste",
  "Bastion",
  "Brigitte",
  "Cassidy",
  "D.Mon",
  "D.Va",
  "Domina",
  "Doomfist",
  "Echo",
  "Emre",
  "Freja",
  "Genji",
  "Hanzo",
  "Hazard",
  "Illari",
  "JetpackCat",
  "Junker Queen",
  "Junkrat",
  "Juno",
  "Kiriko",
  "Lifeweaver",
  "Lucio",
  "Mauga",
  "Mei",
  "Mercy",
  "Mizuki",
  "Moira",
  "Orisa",
  "Pharah",
  "Ramattra",
  "Reaper",
  "Reinhardt",
  "Roadhog",
  "Shion",
  "Sierra",
  "Sigma",
  "Sojourn",
  "Soldier-76",
  "Sombra",
  "Symmetra",
  "Torbjorn",
  "Tracer",
  "Vendetta",
  "Venture",
  "Widowmaker",
  "Winston",
  "Wrecking-Ball",
  "Wuyang",
  "Zarya",
  "Zenyatta",
];

export type KillEventType =
  | "weapon"
  | "ability"
  | "ultimate"
  | "melee";

export type KillEvent = {
  headshot: boolean;
  ability?: string;
  melee?: boolean;
  alt?: boolean;
};

export type HeroAbility = {
  name: string;
  icon: string;
  killFeed: boolean;
};
export type HeroUlt = {
  name: string;
  icon: string;
  killFeed: boolean;
};

export type Hero = {
  name: string;
  icon: string;
  abilities: HeroAbility[];
  ults: HeroUlt[];
};

export const heroes: Hero[] = [
  {
    name: "Ana",
    icon: "/heroes/ana.png",
    abilities: [
      {
        name: "Biotic Grenade",
        icon: "/abilities/ana/biotic-grenade.png",
        killFeed: true,
      },
      {
        name: "Sleep Dart",
        icon: "/abilities/ana/sleep-dart.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Nano Boost",
        icon: "/ults/ana/nano-boost.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Anran",
    icon: "/heroes/anran.png",
    abilities: [
      {
        name: "Dancing Blaze",
        icon: "/abilities/anran/dancing-blaze.png",
        killFeed: true,
      },
      {
        name: "Fan the Flames",
        icon: "/abilities/anran/fan-the-flames.png",
        killFeed: true,
      },
      {
        name: "Ignition",
        icon: "/abilities/anran/ignition.png",
        killFeed: true,
      },
      {
        name: "Inferno Rush",
        icon: "/abilities/anran/inferno-rush.png",
        killFeed: true,
      },
      {
        name: "Zhuque Fans",
        icon: "/abilities/anran/zhuque-fans.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Vermillion Ascent",
        icon: "/ults/anran/vermillion-ascent.png",
        killFeed: true,
      },
      {
        name: "Vermillion Revival",
        icon: "/ults/anran/vermillion-revival.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Ashe",
    icon: "/heroes/ashe.png",
    abilities: [
      {
        name: "Coach Gun",
        icon: "/abilities/ashe/coach-gun.png",
        killFeed: true,
      },
      {
        name: "Dynamite",
        icon: "/abilities/ashe/dynamite.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "B.O.B.",
        icon: "/ults/ashe/b-o-b.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Baptiste",
    icon: "/heroes/baptiste.png",
    abilities: [
      {
        name: "Immortality Field",
        icon: "/abilities/baptiste/immortality-field.png",
        killFeed: true,
      },
      {
        name: "Regenerative Burst",
        icon: "/abilities/baptiste/regenerative-burst.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Amplification Matrix",
        icon: "/ults/baptiste/amplification-matrix.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Bastion",
    icon: "/heroes/bastion.png",
    abilities: [
      {
        name: "Tactical Grenade",
        icon: "/abilities/bastion/a-36-tactical-grenade.png",
        killFeed: true,
      },
      {
        name: "Reconfigure",
        icon: "/abilities/bastion/reconfigure.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Configuration: Artillery",
        icon: "/ults/bastion/configuration-artillery.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Brigitte",
    icon: "/heroes/brigitte.png",
    abilities: [
      {
        name: "Rocket Flail",
        icon: "/abilities/brigitte/rocket-flail.png",
        killFeed: true,
      },
      {
        name: "Shield Bash",
        icon: "/abilities/brigitte/shield-bash.png",
        killFeed: true,
      },
      {
        name: "Whip Shot",
        icon: "/abilities/brigitte/whip-shot.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Rally",
        icon: "/ults/brigitte/rally.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Cassidy",
    icon: "/heroes/cassidy.png",
    abilities: [
      {
        name: "Combat Roll",
        icon: "/abilities/cassidy/combat-roll.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Deadeye",
        icon: "/ults/cassidy/deadeye.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "D.Va",
    icon: "/heroes/d.va.png",
    abilities: [
      {
        name: "Boosters",
        icon: "/abilities/d.va/boosters.png",
        killFeed: true,
      },
      {
        name: "Micro Missiles",
        icon: "/abilities/d.va/micro-missiles.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Self-Destruct",
        icon: "/ults/d.va/self-destruct.png",
        killFeed: true,
      },
      {
        name: "Call Mech",
        icon: "/ults/d.va/call-mech.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "D.Mon",
    icon: "/heroes/dmon.png",
    abilities: [
      {
        name: "Surging Strike",
        icon: "/abilities/dmon/surging-strike.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Limit Break",
        icon: "/ults/dmon/limit-break.png",
        killFeed: true,
      },
      {
        name: "Call Mech",
        icon: "/ults/dmon/call-mech.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Domina",
    icon: "/heroes/domina.png",
    abilities: [
      {
        name: "Crystal Charge",
        icon: "/abilities/domina/crystal-charge.png",
        killFeed: true,
      },
      {
        name: "Sonic Repulsors",
        icon: "/abilities/domina/sonic-repulsors.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Panopticon",
        icon: "/ults/domina/panopticon.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Doomfist",
    icon: "/heroes/doomfist.png",
    abilities: [
      {
        name: "Rocket Punch",
        icon: "/abilities/doomfist/rocket-punch.png",
        killFeed: true,
      },
      {
        name: "Seismic Slam",
        icon: "/abilities/doomfist/seismic-slam.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Meteor Strike",
        icon: "/ults/doomfist/meteor-strike.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Echo",
    icon: "/heroes/echo.png",
    abilities: [
      {
        name: "Sticky Bombs",
        icon: "/abilities/echo/sticky-bombs.png",
        killFeed: true,
      },
      {
        name: "Focusing Beam",
        icon: "/abilities/echo/focusing-beam.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Duplicate",
        icon: "/ults/echo/duplicate.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Emre",
    icon: "/heroes/emre.png",
    abilities: [
      {
        name: "Cyber-Frag",
        icon: "/abilities/emre/cyber-frag.png",
        killFeed: true,
      },
      {
        name: "Altered Vitals",
        icon: "/abilities/emre/altered-vitals.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Override Protocol",
        icon: "/ults/emre/override-protocol.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Freja",
    icon: "/heroes/freja.png",
    abilities: [
      {
        name: "Take Aim",
        icon: "/abilities/freja/take-aim.png",
        killFeed: true,
      },
      {
        name: "Updraft",
        icon: "/abilities/freja/updraft.png",
        killFeed: true,
      },
      {
        name: "Quick Dash",
        icon: "/abilities/freja/quick-dash.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Bola Shot",
        icon: "/ults/freja/bola-shot.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Genji",
    icon: "/heroes/genji.png",
    abilities: [
      {
        name: "Deflect",
        icon: "/abilities/genji/deflect.png",
        killFeed: true,
      },
      {
        name: "Swift Strike",
        icon: "/abilities/genji/swift-strike.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Dragonblade",
        icon: "/ults/genji/dragonblade.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Hanzo",
    icon: "/heroes/hanzo.png",
    abilities: [
      {
        name: "Sonic Arrow",
        icon: "/abilities/hanzo/sonic-arrow.png",
        killFeed: true,
      },
      {
        name: "Storm Arrows",
        icon: "/abilities/hanzo/storm-arrows.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Dragonstrike",
        icon: "/ults/hanzo/dragonstrike.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Hazard",
    icon: "/heroes/hazard.png",
    abilities: [
      {
        name: "Jagged Wall",
        icon: "/abilities/hazard/jagged-wall.png",
        killFeed: true,
      },
      {
        name: "Spike Guard",
        icon: "/abilities/hazard/spike-guard.png",
        killFeed: true,
      },
      {
        name: "Violent Leap",
        icon: "/abilities/hazard/violent-leap.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Downpour",
        icon: "/ults/hazard/downpour.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Illari",
    icon: "/heroes/illari.png",
    abilities: [
      {
        name: "Outburst",
        icon: "/abilities/illari/outburst.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Captive Sun",
        icon: "/ults/illari/captive-sun.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Jetpack Cat",
    icon: "/heroes/jetpack-cat.png",
    abilities: [
      {
        name: "Lifeline",
        icon: "/abilities/jetpack-cat/lifeline.png",
        killFeed: true,
      },
      {
        name: "Purr",
        icon: "/abilities/jetpack-cat/purr.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Catnapper",
        icon: "/ults/jetpack-cat/catnapper.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Junker Queen",
    icon: "/heroes/junker-queen.png",
    abilities: [
      {
        name: "Carnage",
        icon: "/abilities/junker-queen/carnage.png",
        killFeed: true,
      },
      {
        name: "Commanding Shout",
        icon: "/abilities/junker-queen/commanding-shout.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Rampage",
        icon: "/ults/junker-queen/rampage.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Junkrat",
    icon: "/heroes/junkrat.png",
    abilities: [
      {
        name: "Concussion Mine",
        icon: "/abilities/junkrat/concussion-mine.png",
        killFeed: true,
      },
      {
        name: "Steel Trap",
        icon: "/abilities/junkrat/steel-trap.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "RIP-Tire",
        icon: "/ults/junkrat/rip-tire.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Juno",
    icon: "/heroes/juno.png",
    abilities: [
      {
        name: "Pulsar Torpedoes",
        icon: "/abilities/juno/pulsar-torpedoes.png",
        killFeed: true,
      },
      {
        name: "Hyper Ring",
        icon: "/abilities/juno/hyper-ring.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Orbital Ray",
        icon: "/ults/juno/orbital-ray.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Kiriko",
    icon: "/heroes/kiriko.png",
    abilities: [
      {
        name: "Protection Suzu",
        icon: "/abilities/kiriko/protection-suzu.png",
        killFeed: true,
      },
      {
        name: "Swift Step",
        icon: "/abilities/kiriko/swift-step.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Kitsune Rush",
        icon: "/ults/kiriko/kitsune-rush.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Lifeweaver",
    icon: "/heroes/lifeweaver.png",
    abilities: [
      {
        name: "Life Grip",
        icon: "/abilities/lifeweaver/life-grip.png",
        killFeed: true,
      },
      {
        name: "Petal Platform",
        icon: "/abilities/lifeweaver/petal-platform.png",
        killFeed: true,
      },
      {
        name: "Rejuvenating Dash",
        icon: "/abilities/lifeweaver/rejuvenating-dash.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Tree of Life",
        icon: "/ults/lifeweaver/tree-of-life.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Lúcio",
    icon: "/heroes/lucio.png",
    abilities: [
      {
        name: "Soundwave",
        icon: "/abilities/lucio/soundwave.png",
        killFeed: true,
      },
      {
        name: "Amp It Up",
        icon: "/abilities/lucio/amp-it-up.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Sound Barrier",
        icon: "/ults/lucio/sound-barrier.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Mauga",
    icon: "/heroes/mauga.png",
    abilities: [
      {
        name: "Cardiac Overdrive",
        icon: "/abilities/mauga/cardiac-overdrive.png",
        killFeed: true,
      },
      {
        name: "Overrun",
        icon: "/abilities/mauga/overrun.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Cage Fight",
        icon: "/ults/mauga/cage-fight.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Mei",
    icon: "/heroes/mei.png",
    abilities: [
      {
        name: "Ice Wall",
        icon: "/abilities/mei/ice-wall.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Blizzard",
        icon: "/ults/mei/blizzard.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Mercy",
    icon: "/heroes/mercy.png",
    abilities: [
      {
        name: "Resurrect",
        icon: "/abilities/mercy/resurrect.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Valkyrie",
        icon: "/ults/mercy/valkyrie.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Mizuki",
    icon: "/heroes/mizuki.png",
    abilities: [
      {
        name: "Binding Chain",
        icon: "/abilities/mizuki/binding-chain.png",
        killFeed: true,
      },
      {
        name: "Katashiro Return",
        icon: "/abilities/mizuki/katashiro-return.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Kekkai Sanctuary",
        icon: "/ults/mizuki/kekkai-sanctuary.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Moira",
    icon: "/heroes/moira.png",
    abilities: [
      {
        name: "Biotic Orb",
        icon: "/abilities/moira/biotic-orb.png",
        killFeed: true,
      },
      {
        name: "Fade",
        icon: "/abilities/moira/fade.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Coalescence",
        icon: "/ults/moira/coalescence.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Orisa",
    icon: "/heroes/orisa.png",
    abilities: [
      {
        name: "Energy Javelin",
        icon: "/abilities/orisa/energy-javelin.png",
        killFeed: true,
      },
      {
        name: "Javelin Spin",
        icon: "/abilities/orisa/javelin-spin.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Terra Surge",
        icon: "/ults/orisa/terra-surge.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Pharah",
    icon: "/heroes/pharah.png",
    abilities: [
      {
        name: "Concussive Blast",
        icon: "/abilities/pharah/concussive-blast.png",
        killFeed: true,
      },
      {
        name: "Jet Dash",
        icon: "/abilities/pharah/jet-dash.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Barrage",
        icon: "/ults/pharah/barrage.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Ramattra",
    icon: "/heroes/ramattra.png",
    abilities: [
      {
        name: "Ravenous Vortex",
        icon: "/abilities/ramattra/ravenous-vortex.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Annihilation",
        icon: "/ults/ramattra/annihilation.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Reaper",
    icon: "/heroes/reaper.png",
    abilities: [
      {
        name: "Shadow Step",
        icon: "/abilities/reaper/shadow-step.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Death Blossom",
        icon: "/ults/reaper/death-blossom.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Reinhardt",
    icon: "/heroes/reinhardt.png",
    abilities: [
      {
        name: "Charge",
        icon: "/abilities/reinhardt/charge.png",
        killFeed: true,
      },
      {
        name: "Fire Strike",
        icon: "/abilities/reinhardt/fire-strike.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Earthshatter",
        icon: "/ults/reinhardt/earthshatter.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Roadhog",
    icon: "/heroes/roadhog.png",
    abilities: [
      {
        name: "Chain Hook",
        icon: "/abilities/roadhog/chain-hook.png",
        killFeed: true,
      },
      {
        name: "Take a Breather",
        icon: "/abilities/roadhog/take-a-breather.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Whole Hog",
        icon: "/ults/roadhog/whole-hog.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Shion",
    icon: "/heroes/shion.png",
    abilities: [
      {
        name: "Execution",
        icon: "/abilities/shion/execution.png",
        killFeed: true,
      },
      {
        name: "Evade",
        icon: "/abilities/shion/evade.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Satsuriku Spree",
        icon: "/ults/shion/satsuriku-spree.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Sierra",
    icon: "/heroes/sierra.png",
    abilities: [
      {
        name: "Tracking Shot",
        icon: "/abilities/sierra/tracking-shot.png",
        killFeed: true,
      },
      {
        name: "Tremor Charge",
        icon: "/abilities/sierra/tremor-charge.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Trailblazer",
        icon: "/ults/sierra/trailblazer.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Sigma",
    icon: "/heroes/sigma.png",
    abilities: [
      {
        name: "Accretion",
        icon: "/abilities/sigma/accretion.png",
        killFeed: true,
      },
      {
        name: "Kinetic Grasp",
        icon: "/abilities/sigma/kinetic-grasp.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Gravitic Flux",
        icon: "/ults/sigma/gravitic-flux.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Sojourn",
    icon: "/heroes/sojourn.png",
    abilities: [
      {
        name: "Disruptor Shot",
        icon: "/abilities/sojourn/disruptor-shot.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Overclock",
        icon: "/ults/sojourn/overclock.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Soldier 76",
    icon: "/heroes/soldier-76.png",
    abilities: [
      {
        name: "Helix Rockets",
        icon: "/abilities/soldier-76/helix-rockets.png",
        killFeed: true,
      },
      {
        name: "Biotic Field",
        icon: "/abilities/soldier-76/biotic-field.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Tactical Visor",
        icon: "/ults/soldier-76/tactical-visor.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Sombra",
    icon: "/heroes/sombra.png",
    abilities: [
      {
        name: "Hack",
        icon: "/abilities/sombra/hack.png",
        killFeed: true,
      },
      {
        name: "Virus",
        icon: "/abilities/sombra/virus.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "EMP",
        icon: "/ults/sombra/emp.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Symmetra",
    icon: "/heroes/symmetra.png",
    abilities: [
      {
        name: "Sentry Turret",
        icon: "/abilities/symmetra/sentry-turret.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Photon Barrier",
        icon: "/ults/symmetra/photon-barrier.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Torbjorn",
    icon: "/heroes/torbjorn.png",
    abilities: [
      {
        name: "Deploy Turret",
        icon: "/abilities/torbjorn/deploy-turret.png",
        killFeed: true,
      },
      {
        name: "Overload",
        icon: "/abilities/torbjorn/overload.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Molten Core",
        icon: "/ults/torbjorn/molten-core.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Tracer",
    icon: "/heroes/tracer.png",
    abilities: [
      {
        name: "Blink",
        icon: "/abilities/tracer/blink.png",
        killFeed: true,
      },
      {
        name: "Recall",
        icon: "/abilities/tracer/recall.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Pulse Bomb",
        icon: "/ults/tracer/pulse-bomb.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Vendetta",
    icon: "/heroes/vendetta.png",
    abilities: [
      {
        name: "Projected Edge",
        icon: "/abilities/vendetta/projected-edge.png",
        killFeed: true,
      },
      {
        name: "Soaring Slice",
        icon: "/abilities/vendetta/soaring-slice.png",
        killFeed: true,
      },
      {
        name: "Whirlwind Dash",
        icon: "/abilities/vendetta/whirlwind-dash.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Sundering Blade",
        icon: "/ults/vendetta/sundering-blade.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Venture",
    icon: "/heroes/venture.png",
    abilities: [
      {
        name: "Burrow",
        icon: "/abilities/venture/burrow.png",
        killFeed: true,
      },
      {
        name: "Drill Dash",
        icon: "/abilities/venture/drill-dash.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Tectonic Shock",
        icon: "/ults/venture/tectonic-shock.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Widowmaker",
    icon: "/heroes/widowmaker.png",
    abilities: [
      {
        name: "Venom Mine",
        icon: "/abilities/widowmaker/venom-mine.png",
        killFeed: true,
      },
      {
        name: "Grappling Hook",
        icon: "/abilities/widowmaker/grappling-hook.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Infra-Sight",
        icon: "/ults/widowmaker/infra-sight.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Winston",
    icon: "/heroes/winston.png",
    abilities: [
      {
        name: "Jump Pack",
        icon: "/abilities/winston/jump-pack.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Primal Rage",
        icon: "/ults/winston/primal-rage.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Wrecking-Ball",
    icon: "/heroes/wrecking-ball.png",
    abilities: [
      {
        name: "Piledriver",
        icon: "/abilities/wrecking-ball/piledriver.png",
        killFeed: true,
      },
      {
        name: "Grappling Claw",
        icon: "/abilities/wrecking-ball/grappling-claw.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Minefield",
        icon: "/ults/wrecking-ball/minefield.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Wuyang",
    icon: "/heroes/wuyang.png",
    abilities: [
      {
        name: "Guardian Wave",
        icon: "/abilities/wuyang/guardian-wave.png",
        killFeed: true,
      },
      {
        name: "Rushing Torrent",
        icon: "/abilities/wuyang/rushing-torrent.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Tidal Blast",
        icon: "/ults/wuyang/tidal-blast.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Zarya",
    icon: "/heroes/zarya.png",
    abilities: [
      {
        name: "Particle Barrier",
        icon: "/abilities/zarya/particle-barrier.png",
        killFeed: true,
      },
      {
        name: "Projected Barrier",
        icon: "/abilities/zarya/projected-barrier.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Graviton Surge",
        icon: "/ults/zarya/graviton-surge.png",
        killFeed: true,
      },
    ],
  },

  {
    name: "Zenyatta",
    icon: "/heroes/zenyatta.png",
    abilities: [
      {
        name: "Orb of Discord",
        icon: "/abilities/zenyatta/orb-of-discord.png",
        killFeed: true,
      },
      {
        name: "Snap Kick",
        icon: "/abilities/zenyatta/snap-kick.png",
        killFeed: true,
      },
    ],
    ults: [
      {
        name: "Transcendence",
        icon: "/ults/zenyatta/transcendence.png",
        killFeed: true,
      },
    ],
  },
];