export function MissionSection() {
  return (
    <section className="mission-section" aria-labelledby="mission-title">
      <div className="container mission-layout">
        <div>
          <p className="eyebrow">كيف تبدأ الحكاية؟</p>
          <h2 id="mission-title">من صورة حقيقية إلى فكرة يمكن فهمها ونقاشها.</h2>
          <p className="mission-summary">
            نقرأ المشكلة كما يعيشها الناس، ثم نوضح معالجة أولية وأثرها على
            المكان.
          </p>
        </div>
        <ol className="mission-steps">
          <li>
            <span>01</span>
            <div>
              <h3>نرصد المشكلة</h3>
              <p>صورة حقيقية وملاحظة واضحة لما يعيشه الناس.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>نقترح معالجة</h3>
              <p>تصور بصري يوضح فكرة معمارية ممكنة للنقاش.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>نشرح الأثر</h3>
              <p>فيديو يربط المقترح بحركة الناس وهوية المكان.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
