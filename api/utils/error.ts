export class GeneralError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }

  getCode(): number {
    switch (this.constructor) {
      case BadRequest:
        return 400;
        break;
      case Unauthorized:
        return 401;
        break;
      case Forbidden:
        return 403;
        break;
      case NotFound:
        return 404;
        break;
      case Conflict:
        return 409;
        break;
      case UnprocessableEntity:
        return 422;
        break;
      default:
        return 500;
    }
  }
}

export class BadRequest extends GeneralError { };
export class NotFound extends GeneralError { };
export class Unauthorized extends GeneralError { };
export class Forbidden extends GeneralError { };
export class Conflict extends GeneralError { };
export class UnprocessableEntity extends GeneralError { };