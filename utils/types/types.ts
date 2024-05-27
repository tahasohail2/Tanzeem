interface CarouselData {
  image: any;
}
interface CarouselComponentProps<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => React.ReactElement;
}

interface CarouselItemProps {
  item: {
    image: any;
  };
}
