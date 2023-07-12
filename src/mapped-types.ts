export {};

type Profile = {
  name: string;
  age: number;
};


// Partialの定義 Partialの上で右クリック　-> 「定義へ移動」
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };


type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// Partialの定義からオリジナルの型を作成できる　MappedType
type Optional<T> = {
  [P in keyof T ]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;