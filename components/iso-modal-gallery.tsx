'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

type IsoImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const images: IsoImage[] = [
  {
    src: '/iso-en-9100-2018.png',
    alt: 'Certificación EN 9100:2018',
    width: 240,
    height: 339,
  },
  {
    src: '/iso une-en-iso-9001-2015.png',
    alt: 'Certificación UNE-EN ISO 9001:2015',
    width: 240,
    height: 339,
  },
];

export function IsoModalGallery() {
  const [active, setActive] = useState<IsoImage | null>(null);

  return (
    <>
      <div className="quality-badges">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            className="quality-badge-button"
            onClick={() => setActive(image)}
            aria-label={`Abrir ${image.alt}`}
          >
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="quality-badge-image" />
          </button>
        ))}
      </div>

      {active ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={active.alt} onClick={() => setActive(null)}>
          <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setActive(null)} aria-label="Cerrar">
              <X size={18} />
            </button>
            <Image src={active.src} alt={active.alt} width={active.width} height={active.height} className="modal-image" />
          </div>
        </div>
      ) : null}
    </>
  );
}
