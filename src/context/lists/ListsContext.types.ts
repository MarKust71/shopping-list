import { FirebaseBasicResponse } from 'config/Firebase.types';
import { ListItem } from 'providers/lists/ListProvider.types';

export type ListsContextProps = {
  loading: boolean;
  getDocsFromCollection: (collectionName: string) => Promise<FirebaseBasicResponse>;
  docsFromCollection: ListItem[];
};
