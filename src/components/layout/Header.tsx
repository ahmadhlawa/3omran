import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#top', label: 'الرئيسية' },
  { href: '#solutions', label: 'الحلول' },
  { href: '#community', label: 'أرسل مشكلة' },
  { href: '#content', label: 'تابع المحتوى' },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="#top" aria-label="حلول عمرانية ذكية — الرئيسية">
          <span>
            <strong>حلول عمرانية ذكية</strong>
            <small>قراءة معمارية للمكان الفلسطيني</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-action" href="#community">
          أرسل مشكلة من حارتك
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل'}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={() => {
            setIsOpen((open) => !open);
          }}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="التنقل المحمول"
        >
          <div className="container">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
