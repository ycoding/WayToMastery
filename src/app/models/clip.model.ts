import firbase from 'firebase/compat/app';
export default interface IClip {
  docID?: string;
  uid: string;
  displayName: string;
  title: string;
  fileName: string;
  url: string;
  timestamp: firbase.firestore.FieldValue;
}
