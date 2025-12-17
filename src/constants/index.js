
export const AUTH_CONFIG = {
  EMAIL_DOMAIN: '@barreautanger.ma',
  DEFAULT_USERNAME: 'admin',
  STORAGE_KEY: 'isLoggedIn'
};


export const COLLECTIONS = {
  ADMINS: 'barreau_admins',
  USERS: 'barreau_users'
};


export const PAGINATION = {
  ITEMS_PER_PAGE: 10,
  MAX_PAGE_BUTTONS: 5
};


export const LAWYER_TYPES = {
  OFFICIAL: 'المحامين الرسميين',
  TRAINEE: 'المحامين المتمرنين'
};


export const SIDEBAR_ITEMS = [
  { id: 'home', label: 'الرئيسية', icon: 'Users', active: false },
  { id: 'activities', label: 'أنشطة الهيئة', icon: 'FileText', active: false },
  { id: 'courses', label: 'الدورات', icon: 'BookOpen', active: false },
  { id: 'notifications', label: 'الإخبارات', icon: 'Bell', active: false },
  { id: 'complaints', label: 'الشكايات', icon: 'File', active: false },
  { id: 'union', label: 'النقابي', icon: 'Lightbulb', active: false },
  { id: 'announcements', label: 'البلاغات', icon: 'File', active: false },
  { id: 'statements', label: 'البيانات', icon: 'File', active: false },
  { id: 'services', label: 'الخدمات', icon: 'Settings', active: false },
  { id: 'suggestions', label: 'الإقتراحات', icon: 'Lightbulb', active: false },
  { id: 'correspondence', label: 'المراسلات', icon: 'Mail', active: false },
  { id: 'improve-table', label: 'تحسين جدول المحامين', icon: 'Users', active: false },
  { id: 'lawyers-table', label: 'جدول المحامين', icon: 'Users', active: true }
];


export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'اسم المستخدم أو كلمة المرور غير صحيحة',
  LOGIN_ERROR: 'حدث خطأ أثناء تسجيل الدخول',
  FETCH_ERROR: 'حدث خطأ أثناء جلب البيانات',
  NO_DATA: 'لا توجد بيانات'
};


export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'تم تسجيل الدخول بنجاح',
  LOGOUT_SUCCESS: 'تم تسجيل الخروج بنجاح'
};