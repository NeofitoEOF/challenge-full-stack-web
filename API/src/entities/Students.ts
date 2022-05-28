export class Students {
  public readonly id?: string;
  public Name: string;
  public Email: string;
  public RA: string;
  public Cpf: string;

  constructor(props: Omit<Students, 'id'>,  id?: string) {
    Object.assign(this, props)
  };
};


