import createStyleSheat from 'utils/createStyleSheat';

export const createStyles = createStyleSheat(({ theme }) => ({
  bottomNav: {
    borderTopWidth: 0.25,
    borderTopColor: theme['border-basic-color-5'] || 'transparent',
  },
}));
