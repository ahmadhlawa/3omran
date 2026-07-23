import { ArrowUpLeft, MessageCircle } from 'lucide-react';

const message = [
  'مرحباً، لدي مشكلة عمرانية أود مشاركتها.',
  'اسم الحي أو البلدة:',
  'وصف المشكلة:',
].join('\n');

export const WHATSAPP_URL = `https://wa.me/?text=${encodeURIComponent(message)}`;

export function CommunitySection() {
  return (
    <section id="community" className="community-section" aria-labelledby="community-title">
      <div className="container community-layout">
        <div>
          <p className="eyebrow">من الحارة إلى فكرة قابلة للنقاش</p>
          <h2 id="community-title">شايف مشكلة عمرانية في حارتك؟</h2>
        </div>
        <div className="community-content">
          <p>
            صوّر المكان، اكتب اسم الحي أو البلدة، واحكيلنا باختصار عن المشكلة.
            ممكن تكون البداية لمقترح بصري وفيديو جديد.
          </p>
          <a className="button button-primary" href={WHATSAPP_URL}>
            <MessageCircle aria-hidden="true" />
            أرسل الصورة عبر واتساب
            <ArrowUpLeft aria-hidden="true" />
          </a>
          <small>
            تُراجع المشاركات لاختيار الحالات المناسبة للمحتوى. أي تصور منشور هو
            فكرة أولية، وليس مخططاً هندسياً معتمداً للتنفيذ.
          </small>
        </div>
      </div>
    </section>
  );
}
