import createStyleSheat from 'utils/createStyleSheat';

export const createStyles = createStyleSheat(({ theme }) => ({
  root: {
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: theme['background-basic-color-1'],
  },

  withBorder: {
    shadowColor: theme['border-primary-color-2'],
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 7.0,
    elevation: 2,
  },

  image: {
    width: 100,
    borderRadius: 8,
  },

  content: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 12,
  },

  titleText: {
    flexGrow: 0,
    flexShrink: 1,
  },

  name: {
    fontWeight: 'bold',
  },

  button: {
    flexGrow: 0,
    flexShrink: 0,
  },
}));
