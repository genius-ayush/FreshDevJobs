import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			'stroke-primary': 'hsl(var(--stroke-primary))',
			'stroke-secondary': 'hsl(var(--stroke-secondary))',
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			darkBgSecondary: '#0F172A',
			darkBgTertiary: '#020817',
			lightBgSecondary: '#F1F5F9',
			foreground: 'hsl(var(--foreground))',
			primary: {
			  DEFAULT: 'hsl(var(--primary))',
			  foreground: 'hsl(var(--primary-foreground))',
			},
			secondary: {
			  DEFAULT: 'hsl(var(--secondary))',
			  foreground: 'hsl(var(--secondary-foreground))',
			},
			destructive: {
			  DEFAULT: 'hsl(var(--destructive))',
			  foreground: 'hsl(var(--destructive-foreground))',
			},
			muted: {
			  DEFAULT: 'hsl(var(--muted))',
			  foreground: 'hsl(var(--muted-foreground))',
			},
			accent: {
			  DEFAULT: 'hsl(var(--accent))',
			  foreground: 'hsl(var(--accent-foreground))',
			},
			popover: {
			  DEFAULT: 'hsl(var(--popover))',
			  foreground: 'hsl(var(--popover-foreground))',
			},
			card: {
			  DEFAULT: 'hsl(var(--card))',
			  foreground: 'hsl(var(--card-foreground))',
			},
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		} , 
		  backgroundImage: {
			'hero-bg-dark': "url('/BG-Grid.svg')",
			'hero-bg-light': "url('/BG-Grid-Light.svg')",
			'grad-dark':
			  'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(2, 8, 23) 0%);',
			'faq-dark':
			  'linear-gradient(180deg, rgba(2,8,23) 0%, rgba(2, 8, 23)0%)',
			'grad-light':
			  'linear-gradient(180deg, rgba(241, 245, 249, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)',
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
