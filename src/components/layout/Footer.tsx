import { SOCIAL_LINKS } from '../../data/socialLinks';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <a className="footer-brand" href="#top">
            حلول عمرانية ذكية
          </a>
          <p>محتوى معماري يقرأ مشاكل المكان ويقترح بداية أفضل للنقاش.</p>
        </div>
        <nav aria-label="روابط التواصل الاجتماعي">
          {SOCIAL_LINKS.map((link) =>
            link.url ? (
              <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                {link.name}
                <span className="sr-only">يفتح في نافذة جديدة</span>
              </a>
            ) : (
              <span key={link.name} aria-disabled="true">
                {link.name}
              </span>
            ),
          )}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 حلول عمرانية ذكية</span>
        <span>لأن المكان الأفضل يبدأ بسؤال أدق.</span>
      </div>
    </footer>
  );
}
