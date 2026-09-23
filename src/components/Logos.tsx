import React from 'react';

// Historic Official Round Crest of MITS Gwalior (Estd. 1957)
export const MitsSealLogo: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className} select-none group transition-transform duration-300 hover:scale-105`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer concentric rings */}
        <circle cx="100" cy="95" r="90" fill="#ffffff" stroke="#991b1b" strokeWidth="6" />
        <circle cx="100" cy="95" r="82" fill="#fffbeb" stroke="#b45309" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="100" cy="95" r="62" fill="#eff6ff" stroke="#1e3a8a" strokeWidth="3" />

        {/* Circular text path */}
        <path id="crestUpperPath" d="M 24,95 A 76,76 0 0,1 176,95" fill="none" />
        <text className="text-[11.5px] font-bold fill-[#991b1b] uppercase tracking-wider">
          <textPath href="#crestUpperPath" startOffset="50%" textAnchor="middle">
            MADHAV INSTITUTE OF TECH. &amp; SCIENCE
          </textPath>
        </text>

        {/* Inner Graphic Elements */}
        {/* Rising Sun with radiant rays */}
        <g transform="translate(100, 75)">
          <path d="M-30,-2 L30,-2 A30,30 0 0,0 -30,-2" fill="#f59e0b" />
          {/* Sun rays */}
          {[-60, -40, -20, 0, 20, 40, 60].map((angle, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={Math.sin((angle * Math.PI) / 180) * 38}
              y2={-Math.cos((angle * Math.PI) / 180) * 38}
              stroke="#d97706"
              strokeWidth="2.5"
            />
          ))}
        </g>

        {/* Cogwheel Gear (representing Engineering) */}
        <circle cx="100" cy="96" r="28" fill="#1e3a8a" />
        <circle cx="100" cy="96" r="14" fill="#eff6ff" />
        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const x = 100 + Math.sin(rad) * 28;
          const y = 96 - Math.cos(rad) * 28;
          return <circle key={idx} cx={x} cy={y} r="4" fill="#1e3a8a" />;
        })}

        {/* Open Book of Wisdom & Knowledge */}
        <path
          d="M 80,105 Q 100,98 100,116 Q 100,98 120,105 L 120,120 Q 100,112 100,128 Q 100,112 80,120 Z"
          fill="#ffffff"
          stroke="#1e3a8a"
          strokeWidth="2"
        />
        <line x1="100" y1="112" x2="100" y2="128" stroke="#b45309" strokeWidth="1.5" />

        {/* Knowledge Flame / Torch */}
        <path
          d="M 100,70 C 95,80 94,84 100,90 C 106,84 105,80 100,70 Z"
          fill="#ef4444"
        />
        <path
          d="M 100,74 C 97,81 97,83 100,87 C 103,83 103,81 100,74 Z"
          fill="#fbbf24"
        />

        {/* Flowing Water Waves below */}
        <path
          d="M 72,128 Q 86,134 100,128 Q 114,134 128,128"
          fill="none"
          stroke="#0284c7"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 76,134 Q 88,139 100,134 Q 112,139 124,134"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Bottom Banner Ribbon: WORK IS WORSHIP */}
        <g transform="translate(100, 168)">
          <path
            d="M -75,-16 L -65,-28 L -55,-16 L 55,-16 L 65,-28 L 75,-16 L 65,-4 L -65,-4 Z"
            fill="#1e3a8a"
            stroke="#b45309"
            strokeWidth="1.5"
          />
          <rect x="-60" y="-18" width="120" height="18" rx="2" fill="#1e3a8a" />
          <text
            x="0"
            y="-5"
            textAnchor="middle"
            fill="#ffffff"
            className="text-[10px] font-extrabold tracking-widest uppercase"
          >
            WORK IS WORSHIP
          </text>
          <text
            x="0"
            y="14"
            textAnchor="middle"
            fill="#991b1b"
            className="text-[10.5px] font-bold tracking-wider"
          >
            Estd. 1957
          </text>
        </g>
      </svg>
    </div>
  );
};

// Modern MITS Emblem (Right side logo in header)
export const MitsModernEmblem: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className} select-none group transition-transform duration-300 hover:scale-105`}>
      <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Radial cogwheel sunburst (teal & cyan segmented arms) */}
        <g transform="translate(80, 68)">
          {/* Segmented rotating turbine / gear petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <path
              key={i}
              d="M 0,-48 L 7,-36 L -7,-36 Z"
              transform={`rotate(${deg})`}
              fill={i % 2 === 0 ? '#0d9488' : '#06b6d4'}
            />
          ))}

          {/* Inner ring */}
          <circle cx="0" cy="0" r="34" fill="#ffffff" stroke="#0891b2" strokeWidth="4" />
          <circle cx="0" cy="0" r="26" fill="#f0fdfa" />

          {/* Central Lightning Energy Bolt (Yellow) */}
          <path
            d="M 4,-26 L -12,2 L 0,2 L -6,26 L 14,-2 L 2,-2 Z"
            fill="#eab308"
            stroke="#ca8a04"
            strokeWidth="1.5"
            className="drop-shadow"
          />
        </g>

        {/* Lower Banner: MITS with institutional accents */}
        <g transform="translate(80, 134)">
          {/* Horizontal accent bars */}
          <rect x="-65" y="-12" width="130" height="7" rx="1.5" fill="#f59e0b" />
          <rect x="-65" y="1" width="130" height="6" rx="1.5" fill="#0d9488" />

          {/* Central Emblem Badge */}
          <circle cx="0" cy="-3" r="14" fill="#ffffff" stroke="#0891b2" strokeWidth="2" />
          {/* Inner mini crest */}
          <circle cx="0" cy="-3" r="10" fill="#fef3c7" stroke="#b45309" strokeWidth="1" />
          <path d="M-5,-4 L0,-9 L5,-4 L0,1 Z" fill="#dc2626" />

          {/* Bold text */}
          <text
            x="-26"
            y="2"
            textAnchor="middle"
            fill="#d97706"
            className="text-[13px] font-black tracking-tighter"
          >
            M
          </text>
          <text
            x="-13"
            y="2"
            textAnchor="middle"
            fill="#059669"
            className="text-[13px] font-black tracking-tighter"
          >
            I
          </text>
          <text
            x="14"
            y="2"
            textAnchor="middle"
            fill="#0284c7"
            className="text-[13px] font-black tracking-tighter"
          >
            T
          </text>
          <text
            x="27"
            y="2"
            textAnchor="middle"
            fill="#7c3aed"
            className="text-[13px] font-black tracking-tighter"
          >
            S
          </text>
        </g>
      </svg>
    </div>
  );
};
