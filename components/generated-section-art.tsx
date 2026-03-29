type GeneratedSectionArtProps = {
  variant: 'technical' | 'signal';
  alt: string;
};

export function GeneratedSectionArt({ variant, alt }: GeneratedSectionArtProps) {
  if (variant === 'signal') {
    return (
      <svg viewBox="0 0 1600 900" aria-label={alt} role="img" className="media-frame__art" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="signalGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1180 212) rotate(124.341) scale(730.85 1021.79)">
            <stop stopColor="#DCEBFA" stopOpacity="0.34" />
            <stop offset="1" stopColor="#0A1C30" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="signalShade" x1="200" y1="110" x2="1340" y2="824" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0A1C30" stopOpacity="0.84" />
            <stop offset="0.56" stopColor="#123F73" stopOpacity="0.42" />
            <stop offset="1" stopColor="#0A1C30" stopOpacity="0.78" />
          </linearGradient>
          <clipPath id="signalClip">
            <rect x="26" y="26" width="1548" height="848" rx="34" />
          </clipPath>
        </defs>
        <g clipPath="url(#signalClip)">
          <rect width="1600" height="900" fill="#081521" />
          <image href="/home/home-hero.jpg" x="-34" y="-22" width="1660" height="944" preserveAspectRatio="xMidYMid slice" />
          <rect width="1600" height="900" fill="url(#signalShade)" />
          <rect width="1600" height="900" fill="url(#signalGlow)" />
          <circle cx="1154" cy="210" r="186" stroke="#EAF2FA" strokeOpacity="0.26" strokeWidth="2" />
          <circle cx="1154" cy="210" r="128" stroke="#EAF2FA" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="10 14" />
          <circle cx="1154" cy="210" r="66" fill="#F2F8FF" fillOpacity="0.12" stroke="#F2F8FF" strokeOpacity="0.56" strokeWidth="2" />
          <path d="M234 654C384 656 560 626 742 536C912 452 1042 348 1154 210" stroke="#F2F8FF" strokeOpacity="0.48" strokeWidth="2" />
          <path d="M234 700C438 690 646 648 838 562C1028 478 1162 360 1288 196" stroke="#F2F8FF" strokeOpacity="0.16" strokeWidth="1.4" strokeDasharray="4 10" />
          <rect x="116" y="108" width="336" height="198" rx="24" fill="#071624" fillOpacity="0.54" stroke="#EAF2FA" strokeOpacity="0.14" />
          <text x="148" y="154" fill="#EAF2FA" fillOpacity="0.74" fontFamily="Arial, sans-serif" fontSize="17" letterSpacing="4">VISUAL SYSTEM</text>
          <text x="148" y="208" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="44" fontWeight="700">Quality Signal</text>
          <text x="148" y="244" fill="#D9E8F6" fillOpacity="0.78" fontFamily="Arial, sans-serif" fontSize="19">traceability • approvals • process control</text>
          <rect x="148" y="266" width="128" height="8" rx="4" fill="#F2F8FF" fillOpacity="0.34" />
          <rect x="148" y="284" width="220" height="8" rx="4" fill="#F2F8FF" fillOpacity="0.16" />
          <rect x="126" y="638" width="404" height="140" rx="24" fill="#071624" fillOpacity="0.5" stroke="#EAF2FA" strokeOpacity="0.14" />
          <text x="160" y="690" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="54" fontWeight="700">EN9100</text>
          <text x="160" y="724" fill="#D9E8F6" fillOpacity="0.78" fontFamily="Arial, sans-serif" fontSize="20">certifications and approved processes</text>
        </g>
        <rect x="26" y="26" width="1548" height="848" rx="34" stroke="#EAF2FA" strokeOpacity="0.16" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1600 900" aria-label={alt} role="img" className="media-frame__art" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="panelShade" x1="0" y1="0" x2="1600" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A1C30" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#123F73" stopOpacity="0.5" />
          <stop offset="1" stopColor="#DCE8F4" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="lineGlow" x1="1012" y1="110" x2="416" y2="742" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAF2FA" />
          <stop offset="1" stopColor="#7DA2C9" />
        </linearGradient>
        <clipPath id="panelClip">
          <rect x="28" y="28" width="1544" height="844" rx="34" />
        </clipPath>
      </defs>
      <g clipPath="url(#panelClip)">
        <rect width="1600" height="900" fill="#071421" />
        <image href="/home/home-hero.jpg" x="-24" y="-12" width="1648" height="926" preserveAspectRatio="xMidYMid slice" />
        <rect width="1600" height="900" fill="url(#panelShade)" />
        <path d="M118 700C300 616 496 514 720 374C936 238 1134 146 1300 98" stroke="url(#lineGlow)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 12" />
        <path d="M230 760C428 694 640 594 876 432C1098 280 1284 196 1436 170" stroke="#D9E8F6" strokeOpacity="0.36" strokeWidth="1.4" />
        <circle cx="720" cy="374" r="14" fill="#F6FBFF" fillOpacity="0.18" stroke="#F6FBFF" strokeOpacity="0.8" strokeWidth="2" />
        <circle cx="876" cy="432" r="10" fill="#F6FBFF" fillOpacity="0.14" stroke="#F6FBFF" strokeOpacity="0.6" strokeWidth="2" />
        <circle cx="118" cy="700" r="8" fill="#F6FBFF" fillOpacity="0.14" stroke="#F6FBFF" strokeOpacity="0.5" strokeWidth="2" />
        <rect x="112" y="122" width="260" height="126" rx="22" fill="#081827" fillOpacity="0.58" stroke="#EAF2FA" strokeOpacity="0.16" />
        <text x="144" y="164" fill="#EAF2FA" fillOpacity="0.72" fontFamily="Arial, sans-serif" fontSize="18" letterSpacing="4">AEROSERV</text>
        <text x="144" y="210" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="700">Industrial Support</text>
        <text x="144" y="238" fill="#D9E8F6" fillOpacity="0.76" fontFamily="Arial, sans-serif" fontSize="18">assembly • logistics • traceability</text>
        <rect x="1128" y="584" width="312" height="182" rx="24" fill="#081827" fillOpacity="0.52" stroke="#EAF2FA" strokeOpacity="0.16" />
        <text x="1162" y="632" fill="#EAF2FA" fillOpacity="0.72" fontFamily="Arial, sans-serif" fontSize="16" letterSpacing="3">PROGRAMME VIEW</text>
        <text x="1162" y="684" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="54" fontWeight="700">04</text>
        <text x="1248" y="684" fill="#D9E8F6" fillOpacity="0.88" fontFamily="Arial, sans-serif" fontSize="22">operational locations</text>
        <text x="1162" y="724" fill="#D9E8F6" fillOpacity="0.76" fontFamily="Arial, sans-serif" fontSize="18">Puerto Real • El Puerto • Sevilla • Madrid</text>
        <path d="M1162 748H1404" stroke="#EAF2FA" strokeOpacity="0.22" />
      </g>
      <rect x="28" y="28" width="1544" height="844" rx="34" stroke="#EAF2FA" strokeOpacity="0.18" strokeWidth="2" />
    </svg>
  );
}
