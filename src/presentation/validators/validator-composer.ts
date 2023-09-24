import { ValidatorInterface } from "@/presentation/abstract";

export class ValidatorComposer implements ValidatorInterface {
  private readonly validators: ValidatorInterface[];

  public constructor(validators: ValidatorInterface[]) {
    this.validators = validators;
  }

  public validate(request: any): Error | undefined {
    for (const validator of this.validators) {
      const error = validator.validate(request);
      if (error) return error;
    }
    return;
  }
}
