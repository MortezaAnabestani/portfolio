type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'مرتضی عنابستانی (توسعه‌دهندۀ وب و داستان‌پرداز تعاملی)',
    fullName: 'مرتضی عنابستانی',
    email: 'anabestani.morteza@gmail.com',
  },
  hero: {
    name: 'من',
    p: ['توسعه‌دهندۀ وب و داستان‌پرداز تعاملی'],
  },
  contact: {
    p: '',
    h2: 'مسیر ارتباطی',
    form: {
      name: {
        span: 'نام',
        placeholder: 'نامت را بنویس',
      },
      email: { span: 'ایمیل', placeholder: 'ایمیلت را بنویس' },
      message: {
        span: 'پیام',
        placeholder: 'پیامت را بنویس',
      },
    },
  },
  sections: {
    about: {
      p: 'معرفی',
      h2: 'دربارۀ من',
      content: `دانشجوی دکتری زمینه‌ای بینارشته‌ای (نرم‌افزار و هنر) به نام ادبیات الکترونیکم و همزمان به توسعۀ سایت‌های پویا، تعاملی و واکنشی می‌پردازم. زبان برنامه‌نویسی که بهش مسلطم، جاوااسکریپته و با فریم‌ورک ری‌اکت و نود جی اس، آشنایی خوبی دارم. پشتۀ فناورانه‌ای که در اون کسب مهارت می‌کنم MERN-Stack است. با MongoDB، Express، Node.js و React می‌تونم هر برنامه‌ای را در بخش‌های مختلفش (فرانت‌اند، بک‌اند و پایگاه داده)، راه‌اندازی کنم. داستان‌پردازی تعاملی را به‌عنوان علاقه و تخصص اصلی‌ام دنبال می‌کنم و کتابخونه‌هایی مثل D3.js، P5.js و Three.js رو نیز به همین‌منظور یاد گرفتم. به‌تازگی به مهندسی پرامپت و ایجاد ارتباط مؤثر با مدل‌های زبانی هوش مصنوعی علاقه‌مند شدم و تا جایی که در توانم باشه، سعی می‌کنم یاد بگیریم و خلاق بمونم.`,
    },
    experience: {
      p: 'چه مسیری رو طی کردم؟',
      h2: 'مهارت‌ها',
    },
    feedbacks: {
      p: 'حرف مردم',
      h2: 'نظر دیگران',
    },
    works: {
      p: 'نمونه‌کار',
      h2: 'سایت‌های توسعه‌داده‌شده',
      content: `نمونه‌کارهای زیر برخی از سایت‌هایی‌ست که توسعه داده‌ام. دلیل انتخاب این‌ها، پشته‌های فناوری متفاوتی است که در توسعه استفاده کرده ام.`,
    },
  },
};
