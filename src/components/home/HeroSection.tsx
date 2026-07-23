import { ArrowDown, Camera } from 'lucide-react';
import { SolutionComparison } from './SolutionComparison';

export function HeroSection() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">قراءة معمارية للشارع الفلسطيني</p>
          <h1 id="hero-title">نرصد مشكلة المكان، ونقترح كيف يمكن أن يصبح أفضل.</h1>
          <p className="hero-summary">
            نحوّل مشكلات شوارعنا وأحيائنا إلى تصورات معمارية واضحة تساعد على
            النقاش وفهم الحلول الممكنة.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#solutions">
              شاهد المشكلات والحلول
              <ArrowDown aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#community">
              <Camera aria-hidden="true" />
              أرسل مشكلة من حارتك
            </a>
          </div>
          <p className="hero-note">
            التصورات مقترحات أولية للنقاش، وليست مخططات هندسية معتمدة.
          </p>
        </div>

        <figure className="hero-visual">
          <SolutionComparison
            title="إعادة تنظيم رصيف محلي"
            beforeImage="/images/hero-before.webp"
            beforeAlt="صورة الوضع الحالي لمسار مشاة متقطع في شارع محلي"
            afterImage="/images/hero-after.webp"
            afterAlt="تصور مقترح لمسار مشاة متصل مع ظل وزراعة محلية"
            priority
          />
          <figcaption>
            مثال المقارنة: تنظيم مسار المشاة وإضافة ظل وزراعة محلية.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
