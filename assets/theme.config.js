window.tailwind = window.tailwind || {};

window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'error-container': 'var(--fomo-error-container)',
        'on-tertiary-fixed-variant': 'var(--fomo-on-tertiary-fixed-variant)',
        'inverse-on-surface': 'var(--fomo-inverse-on-surface)',
        'on-primary': 'var(--fomo-on-primary)',
        'on-error': 'var(--fomo-on-error)',
        'inverse-primary': 'var(--fomo-inverse-primary)',
        background: 'var(--fomo-background)',
        'on-surface': 'var(--fomo-on-surface)',
        'on-secondary-container': 'var(--fomo-on-secondary-container)',
        'secondary-fixed-dim': 'var(--fomo-secondary-fixed-dim)',
        'on-secondary': 'var(--fomo-on-secondary)',
        'surface-variant': 'var(--fomo-surface-variant)',
        'on-primary-fixed-variant': 'var(--fomo-on-primary-fixed-variant)',
        'primary-container': 'var(--fomo-primary-container)',
        error: 'var(--fomo-error)',
        'surface-container-high': 'var(--fomo-surface-container-high)',
        'surface-tint': 'var(--fomo-surface-tint)',
        'secondary-fixed': 'var(--fomo-secondary-fixed)',
        outline: 'var(--fomo-outline)',
        'surface-dim': 'var(--fomo-surface-dim)',
        'surface-bright': 'var(--fomo-surface-bright)',
        'secondary-container': 'var(--fomo-secondary-container)',
        'on-primary-container': 'var(--fomo-on-primary-container)',
        secondary: 'var(--fomo-secondary)',
        surface: 'var(--fomo-surface)',
        'primary-fixed-dim': 'var(--fomo-primary-fixed-dim)',
        'on-surface-variant': 'var(--fomo-on-surface-variant)',
        'inverse-surface': 'var(--fomo-inverse-surface)',
        'primary-fixed': 'var(--fomo-primary-fixed)',
        'tertiary-fixed': 'var(--fomo-tertiary-fixed)',
        'on-secondary-fixed-variant': 'var(--fomo-on-secondary-fixed-variant)',
        'tertiary-fixed-dim': 'var(--fomo-tertiary-fixed-dim)',
        'on-background': 'var(--fomo-on-background)',
        'surface-container-highest': 'var(--fomo-surface-container-highest)',
        'on-error-container': 'var(--fomo-on-error-container)',
        'on-tertiary-container': 'var(--fomo-on-tertiary-container)',
        'outline-variant': 'var(--fomo-outline-variant)',
        'on-tertiary-fixed': 'var(--fomo-on-tertiary-fixed)',
        tertiary: 'var(--fomo-tertiary)',
        'on-tertiary': 'var(--fomo-on-tertiary)',
        'surface-container': 'var(--fomo-surface-container)',
        'tertiary-container': 'var(--fomo-tertiary-container)',
        'on-secondary-fixed': 'var(--fomo-on-secondary-fixed)',
        'surface-container-lowest': 'var(--fomo-surface-container-lowest)',
        'on-primary-fixed': 'var(--fomo-on-primary-fixed)',
        'surface-container-low': 'var(--fomo-surface-container-low)',
        primary: 'var(--fomo-primary)'
      },
      borderRadius: {
        DEFAULT: 'var(--fomo-radius-default)',
        lg: 'var(--fomo-radius-lg)',
        xl: 'var(--fomo-radius-xl)',
        full: 'var(--fomo-radius-full)'
      },
      spacing: {
        xs: 'var(--fomo-space-xs)',
        sm: 'var(--fomo-space-sm)',
        base: 'var(--fomo-space-base)',
        md: 'var(--fomo-space-md)',
        lg: 'var(--fomo-space-lg)',
        xl: 'var(--fomo-space-xl)',
        gutter: 'var(--fomo-space-gutter)',
        'margin-mobile': 'var(--fomo-space-margin-mobile)',
        'margin-desktop': 'var(--fomo-space-margin-desktop)'
      },
      fontFamily: {
        'title-lg': ['var(--fomo-font-sans)'],
        'body-md': ['var(--fomo-font-sans)'],
        'headline-lg': ['var(--fomo-font-sans)'],
        'display-lg': ['var(--fomo-font-sans)'],
        'body-lg': ['var(--fomo-font-sans)'],
        'label-mono': ['var(--fomo-font-mono)'],
        'title-md': ['var(--fomo-font-sans)'],
        'label-mono-sm': ['var(--fomo-font-mono)'],
        'headline-md': ['var(--fomo-font-sans)'],
        'headline-lg-mobile': ['var(--fomo-font-sans)']
      },
      fontSize: {
        'title-lg': ['22px', { lineHeight: '28px', fontWeight: '600' }],
        'body-md': ['14px', { lineHeight: '20px', letterSpacing: '0.25px', fontWeight: '400' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'display-lg': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px', fontWeight: '700' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.5px', fontWeight: '400' }],
        'label-mono': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'title-md': ['16px', { lineHeight: '24px', letterSpacing: '0.15px', fontWeight: '600' }],
        'label-mono-sm': ['11px', { lineHeight: '14px', fontWeight: '400' }],
        'headline-md': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '700' }]
      }
    }
  }
};