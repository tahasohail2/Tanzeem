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
interface LinkButtonProps {
  title: string;
  onPress: () => void;
}
type AdminRootStackParamList = {
  Admin: undefined;
  AdminHomeStack: undefined;
  AdminHome: undefined;
  AdminLoginAccounts: undefined;
  AffiliatedSchools: undefined;
  UploadOrChangePhotos: undefined;
  UploadOrChangeNews: undefined;
  MadrasasMessages: undefined;
  ScholarsLoginAccounts: undefined;
  ScholarsRecords: undefined;
  OfficialEmail: undefined;
};
interface AffiliatedSchoolsForm {
  label: string;
  value: any;
}
