import { ArrowUpLeft } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/socialLinks';

export function SocialSection() {
  return (
    <section id="content" className="social-section" aria-labelledby="social-title">
      <div className="container social-layout">
        <div>
          <p className="eyebrow">شاهد التفاصيل</p>
          <h2 id="social-title">الصورة تختصر الفكرة، والفيديو يشرحها.</h2>
          <p>
            تابع توثيق الحالات، طريقة قراءة المشكلة، والمنطق وراء كل تصور
            معماري على المنصات الاجتماعية.
          </p>
        </div>
        <ul className="social-list">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                {link.url ? (
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <Icon aria-hidden="true" />
                    <span>
                      <strong>{link.name}</strong>
                      <small>{link.handle}</small>
                    </span>
                    <ArrowUpLeft aria-hidden="true" />
                    <span className="sr-only">يفتح في نافذة جديدة</span>
                  </a>
                ) : (
                  <span className="social-placeholder" aria-disabled="true">
                    <Icon aria-hidden="true" />
                    <span>
                      <strong>{link.name}</strong>
                      <small>الرابط قيد الإضافة</small>
                    </span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
