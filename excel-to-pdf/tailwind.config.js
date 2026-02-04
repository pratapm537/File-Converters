tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#fff7ed', // Orange 50
                    100: '#ffedd5', // Orange 100
                    500: '#f97316', // Orange 500
                    600: '#ea580c', // Orange 600
                    700: '#c2410c', // Orange 700
                },
                slate: {
                    850: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                'paper': '0 0 0 1px rgba(0,0,0,0.03), 0 24px 48px -12px rgba(0,0,0,0.15), 0 12px 24px -12px rgba(0,0,0,0.05)',
                'floating': '0 10px 40px -10px rgba(0,0,0,0.1)',
                'glow': '0 0 20px rgba(249, 115, 22, 0.15)',
                'menu': '0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)'
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fadeIn': 'fadeIn 0.5s ease-out forwards',
                'slideDown': 'slideDown 0.2s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                }
            }
        }
    }
}