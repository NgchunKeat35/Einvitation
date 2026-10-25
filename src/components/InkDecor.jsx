export const MagpiePair = ({ className }) => (
  <svg className={className} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 树枝 (淡墨) */}
    <path d="M10,100 C40,90 70,80 100,60 C120,45 140,30 180,20" stroke="#5a5a5a" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M80,75 C90,80 100,90 105,100" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M130,45 C140,50 150,60 155,70" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>

    {/* 左喜鹊 (浓墨) */}
    <g transform="translate(40, 45)">
      {/* 身体 */}
      <path d="M20,40 C10,20 30,10 40,15 C50,20 45,40 30,45 Z" fill="#2c2c2c" opacity="0.85"/>
      {/* 尾巴 */}
      <path d="M20,40 L0,70 L5,75 L25,45 Z" fill="#2c2c2c" opacity="0.9"/>
      {/* 翅膀和蓝色反光 */}
      <path d="M30,20 C40,25 45,35 35,40" stroke="#4a6572" strokeWidth="2" opacity="0.7"/>
      {/* 头部和嘴 */}
      <circle cx="40" cy="15" r="5" fill="#2c2c2c"/>
      <path d="M45,15 L50,16 L45,17 Z" fill="#2c2c2c"/>
      {/* 眼睛 */}
      <circle cx="42" cy="14" r="1" fill="#fff"/>
    </g>

    {/* 右喜鹊 (淡墨，或者深灰) */}
    <g transform="translate(100, 25) scale(-1, 1)">
      {/* 身体 */}
      <path d="M20,40 C10,20 30,10 40,15 C50,20 45,40 30,45 Z" fill="#2c2c2c" opacity="0.75"/>
      {/* 尾巴 */}
      <path d="M20,40 L0,70 L5,75 L25,45 Z" fill="#2c2c2c" opacity="0.8"/>
      {/* 翅膀 */}
      <path d="M30,20 C40,25 45,35 35,40" stroke="#4a6572" strokeWidth="2" opacity="0.6"/>
      {/* 头部和嘴 */}
      <circle cx="40" cy="15" r="5" fill="#2c2c2c" opacity="0.9"/>
      <path d="M45,15 L50,16 L45,17 Z" fill="#2c2c2c"/>
      {/* 眼睛 */}
      <circle cx="42" cy="14" r="1" fill="#fff"/>
    </g>

    {/* 花朵 (一点胭脂红和淡墨) */}
    <g opacity="0.7">
      {/* 白梅/玉兰 */}
      <path d="M100,60 C95,55 90,55 88,60 C90,65 95,65 100,60 Z" fill="#e8e0d5"/>
      <path d="M100,60 C105,55 110,55 112,60 C110,65 105,65 100,60 Z" fill="#e8e0d5"/>
      <path d="M100,60 C100,55 102,50 105,48 C103,52 102,58 100,60 Z" fill="#e8e0d5"/>
      <circle cx="100" cy="60" r="1.5" fill="#8c1a1a"/> {/* 花蕊 */}
    </g>
  </svg>
)