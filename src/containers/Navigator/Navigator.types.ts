export interface INavigatorProps {
  startPage: string;
  pages: {
    [key: string]: React.FunctionComponent<any>;
  };
}
