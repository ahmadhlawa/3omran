export type SolutionCategory =
  | 'الكل'
  | 'الأرصفة'
  | 'الإنارة العامة'
  | 'واجهات الأحياء'
  | 'تنظيم الشوارع'
  | 'مداخل البلدات'
  | 'الفراغات العامة'
  | 'تصريف المياه';

export interface UrbanSolution {
  id: string;
  title: string;
  category: Exclude<SolutionCategory, 'الكل'>;
  problem: string;
  proposal: string;
  impact: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  videoUrl: string | null;
}
