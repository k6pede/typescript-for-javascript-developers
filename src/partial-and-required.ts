export {}

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

//optionalなプロパティを容易に作成できる
type PartialType = Partial<Profile>;

//必須な型を持つProfileを容易に作成できる
type RequiredType = Required<Profile>;

