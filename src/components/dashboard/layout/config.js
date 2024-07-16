import { paths } from '@/paths';

export const layoutConfig = {
  navItems: [
    {
      key: 'dashboards',
      title: 'Dashboards',
      items: [
        {
          key: 'dashboards',
          title: 'Dashboards',
          icon: 'users',
          items: [
            { key: 'dashboard:admin', title: 'Admin Dashboard', href: paths.dashboard.customers.list },
            { key: 'dashboard:teacher', title: 'Teacher Dashboard', href: paths.dashboard.customers.create },
            { key: 'dashboard:student', title: 'Student Dashboard', href: paths.dashboard.customers.details('1') },
          ],
        },
        {
          key: 'students',
          title: 'Students',
          icon: 'users',
          items: [
            { key: 'student:list', title: 'Student List', href: paths.dashboard.customers.list },
            { key: 'student:view', title: 'Student View', href: paths.dashboard.customers.create },
            { key: 'student:add', title: 'Student Add', href: paths.dashboard.customers.details('1') },
            { key: 'student:edit', title: 'Student Edit', href: paths.dashboard.customers.details('1') },
          ],
        },
        {
          key: 'teachers',
          title: 'Teachers',
          icon: 'users',
          items: [
            { key: 'teacher:list', title: 'Teacher List', href: paths.dashboard.customers.list },
            { key: 'teacher:view', title: 'Teacher View', href: paths.dashboard.customers.create },
            { key: 'teacher:add', title: 'Teacher Add', href: paths.dashboard.customers.details('1') },
            { key: 'teacher:edit', title: 'Teacher Edit', href: paths.dashboard.customers.details('1') },
          ],
        },
        {
          key: 'department',
          title: 'Departments',
          icon: 'users',
          items: [
            { key: 'department:list', title: 'Teacher List', href: paths.dashboard.customers.list },
            { key: 'department:add', title: 'Teacher Add', href: paths.dashboard.customers.details('1') },
            { key: 'department:edit', title: 'Teacher Edit', href: paths.dashboard.customers.details('1') },
          ],
        },
        {
          key: 'subjects',
          title: 'Subjects',
          icon: 'users',
          items: [
            { key: 'subjects:list', title: 'Subjects List', href: paths.dashboard.customers.list },
            { key: 'subjects:add', title: 'Subjects Add', href: paths.dashboard.customers.details('1') },
            { key: 'subjects:edit', title: 'Subjects Edit', href: paths.dashboard.customers.details('1') },
          ],
        },
        {
          key: 'invoices',
          title: 'Invoices',
          icon: 'users',
          items: [
            { key: 'invoice:list', title: 'Invoice List', href: paths.dashboard.customers.list },
            { key: 'invoice:add', title: 'Invoice Add', href: paths.dashboard.customers.details('1') },
            { key: 'invoice:edit', title: 'Add Invoices', href: paths.dashboard.customers.details('1') },
            { key: 'invoice:list', title: 'Edit Invoices', href: paths.dashboard.customers.list },
            { key: 'invoice:add', title: 'Invoices Details', href: paths.dashboard.customers.details('1') },
            { key: 'invoice:edit', title: 'Invoices Settings', href: paths.dashboard.customers.details('1') },
          ],
        },
      ],
    },
    {
      key: 'management',
      title: 'Management',
      items: [
        {
          key: 'accounts',
          title: 'Accounts',
          icon: 'users',
          items: [
            { key: 'account:feecollection', title: 'Fee Collection', href: paths.dashboard.customers.list },
            { key: 'account:expenses', title: 'Expenses', href: paths.dashboard.customers.create },
            { key: 'account:salary', title: 'Salary', href: paths.dashboard.customers.details('1') },
            { key: 'account:addfees', title: 'Add Fees', href: paths.dashboard.customers.list },
            { key: 'account:addexpenses', title: 'Add Expenses', href: paths.dashboard.customers.create },
            { key: 'account:addsalary', title: 'Add Salary', href: paths.dashboard.customers.details('1') },
          ],
        },
        { key: 'holiday', title: 'Holiday', href: paths.dashboard.overview, icon: 'house' },
        { key: 'fees', title: 'Fees', href: paths.dashboard.analytics, icon: 'chart-pie' },
        { key: 'examlist', title: 'Exam List', href: paths.dashboard.eCommerce, icon: 'cube' },
        { key: 'timetable', title: 'Time Table', href: paths.dashboard.crypto, icon: 'currency-eth' },
        { key: 'library', title: 'Library', href: paths.dashboard.eCommerce, icon: 'cube' },
        {
          key: 'blogs',
          title: 'Blogs',
          icon: 'users',
          items: [
            { key: 'blog:list', title: 'Blogs List', href: paths.dashboard.customers.list },
            { key: 'blog:add', title: 'Blogs Add', href: paths.dashboard.customers.details('1') },
            { key: 'blog:edit', title: 'Blogs Edit', href: paths.dashboard.customers.details('1') },
          ],
        },
        { key: 'settings', title: 'Settings', href: paths.dashboard.eCommerce, icon: 'gear' },
      ],
    },
    {
      key: 'pages',
      title: 'Pages',
      items: [
        {
          key: 'authentication',
          title: 'Authentication',
          icon: 'users',
          items: [
            { key: 'authetication:login', title: 'Login', href: paths.dashboard.customers.list },
            { key: 'authetication:register', title: 'Register', href: paths.dashboard.customers.create },
            { key: 'authetication:forgetpassword', title: 'Forget Password', href: paths.dashboard.customers.details('1') },
            { key: 'authetication:errorpage', title: 'Error Page', href: paths.dashboard.customers.create },
          ],
        },
        { key: 'blankpage', title: 'Blank Page', href: paths.dashboard.calendar, icon: 'calendar-check' },
      ],
    },
    {
      key: 'other',
      title: 'Other',
      items: [
        { key: 'sports', title: 'Sports', href: paths.pricing, icon: 'credit-card' },
        { key: 'hotel', title: 'Hotel', href: paths.checkout, icon: 'sign-out' },
        { key: 'transport', title: 'Transport', href: paths.contact, icon: 'address-book' },
      ],
    },
  ],
};
