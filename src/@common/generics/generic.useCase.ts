export abstract class GenericUseCase<IRepository, IProps> {
  constructor(readonly repository: IRepository) {}
  abstract execute(props: IProps);
}
